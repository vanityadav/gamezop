"use client";

import { Drawer } from "vaul";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState } from "react";
type Props = {
  children: ReactNode;
};

type DrawerState = {
  setOpen: (prev: boolean) => void;
};

export const DrawerContext = createContext<DrawerState | null>(null);

export default function GameDrawer({ children }: Props) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <DrawerContext.Provider value={{ setOpen }}>
      <Drawer.Root open={open} shouldScaleBackground dismissible={false}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 dark:bg-white/10 backdrop-blur-sm" />

          <Drawer.Content className="bg-background flex flex-col rounded-t-xl h-[94%] fixed bottom-0 left-0 right-0">
            <Drawer.Close asChild>
              <div
                className="absolute -top-11 right-2 z-[100] bg-background-focused/90 backdrop-blur p-2 rounded-md cursor-pointer"
                onClick={() => {
                  router.back();
                  setOpen(false);
                }}
              >
                <X className="stroke-foreground" />
              </div>
            </Drawer.Close>

            <div className="overflow-y-auto no-scrollbar w-[96%] md:w-[90%] mx-auto text-sm text-foreground  my-6 md:my-12">
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </DrawerContext.Provider>
  );
}
