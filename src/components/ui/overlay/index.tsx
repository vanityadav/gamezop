"use client";

import { Drawer } from "vaul";
import cx from "@/lib/utils/cx";
import { createContext } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { ComponentPropsWithRef, ReactNode, useContext } from "react";

type Element = "drawer" | "popover" | "auto";

type Context = {
  isPopover: boolean;
  element?: Element;
};

const OverLayContext = createContext<Context | null>(null);

type OverlayProps = {
  popoverProps?: Popover.PopoverProps;
  drawerProps?: DialogPrimitive.DialogProps & {
    shouldScaleBackground?: boolean;
  };
  element?: Element;
  children: ReactNode;
};

const Overlay = ({
  popoverProps,
  drawerProps,
  children,
  element = "auto",
}: OverlayProps) => {
  const isDesktop = useMediaQuery();

  let isPopover = isDesktop;

  if (element === "popover") isPopover = true;
  if (element === "drawer") isPopover = false;

  if (isPopover)
    return (
      <OverLayContext.Provider value={{ isPopover }}>
        <Popover.Root {...popoverProps}>{children}</Popover.Root>
      </OverLayContext.Provider>
    );
  return (
    <OverLayContext.Provider value={{ isPopover }}>
      <Drawer.Root {...drawerProps}>{children}</Drawer.Root>
    </OverLayContext.Provider>
  );
};

type OverlayTriggerProps = {
  popoverProps?: Popover.PopoverTriggerProps;
  drawerProps?: DialogPrimitive.DialogTriggerProps;
  children: ReactNode;
};

const OverlayTrigger = ({
  popoverProps,
  drawerProps,
  children,
}: OverlayTriggerProps) => {
  const context = useContext(OverLayContext);
  if (!context) throw new Error("Context not in scope");

  if (context.isPopover)
    return <Popover.Trigger {...popoverProps}>{children}</Popover.Trigger>;

  return <Drawer.Trigger {...drawerProps}>{children}</Drawer.Trigger>;
};

type OverlayContentProps = {
  children: ReactNode;
  align?: Popover.PopoverContentProps["align"];
  sideOffset?: Popover.PopoverContentProps["sideOffset"];
  className?: CSSStyleValue;
  drawerOverlayClassName?: CSSStyleValue;
};

const OverlayContent = ({
  children,
  align = "end",
  sideOffset = 5,
  className,
  drawerOverlayClassName,
}: OverlayContentProps) => {
  const context = useContext(OverLayContext);
  if (!context) throw new Error("Context not in scope");

  if (context.isPopover)
    return (
      <Popover.Portal>
        <Popover.Content
          align={align}
          sideOffset={sideOffset}
          className={cx(
            "relative bg-background text-sm rounded-xl overflow-hidden shadow-xl  border-2 dark:border text-foreground md:max-h-[500px] overflow-y-auto",
            className
          )}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    );

  return (
    <Drawer.Portal>
      <Drawer.Overlay
        className={cx(
          "fixed inset-0 bg-black/40 dark:bg-white/10 backdrop-blur-sm",
          drawerOverlayClassName
        )}
      />
      <Drawer.Content
        className={cx(
          "bg-background text-sm flex flex-col rounded-t-xl h-[85%] mt-24 fixed bottom-0 left-0 right-0 text-foreground",
          className
        )}
      >
        <div className="mx-auto w-2/4 h-2  my-2 rounded-full bg-background-focused " />
        <div className="overflow-y-auto w-[96%] md:w-[90%] mx-auto my-3">
          {children}
        </div>
      </Drawer.Content>
      <Drawer.Overlay />
    </Drawer.Portal>
  );
};

function OverlayElement({ className, ...props }: ComponentPropsWithRef<"div">) {
  return (
    <div
      {...props}
      className={cx(
        "p-3  hover:bg-background-focused hover:cursor-pointer",
        className
      )}
    />
  );
}

export { Overlay, OverlayTrigger, OverlayContent, OverlayElement };
