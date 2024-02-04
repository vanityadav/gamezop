"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Button from "@/components/ui/button";
import { BellDot, Globe, User } from "lucide-react";
import {
  Overlay,
  OverlayContent,
  OverlayElement,
  OverlayTrigger,
} from "@/components/ui/overlay";
import {
  dummyLanguages,
  dummySettings,
  notifications,
} from "@/lib/constants/headerData";

export default function UserAccountSection() {
  return (
    <div className="flex items-center justify-between">
      <Overlay drawerProps={{ shouldScaleBackground: true }}>
        <OverlayTriggerButton className="group">
          <Globe className="stroke-muted-foreground group-hover:stroke-foreground" />
        </OverlayTriggerButton>
        <OverlayContent>
          {dummyLanguages.map((language) => (
            <OverlayElement className="pr-24" key={language}>
              {language}
            </OverlayElement>
          ))}
        </OverlayContent>
      </Overlay>

      <Overlay drawerProps={{ shouldScaleBackground: true }}>
        <OverlayTriggerButton className="group">
          <BellDot className="stroke-muted-foreground group-hover:stroke-foreground" />
        </OverlayTriggerButton>
        <OverlayContent>
          {notifications.map((notification) => (
            <OverlayElement key={notification.image}>
              <div className="grid grid-flow-col gap-4 align-middle md:max-w-[300px] ">
                <Image
                  src={notification.image}
                  height={40}
                  width={40}
                  alt="icon"
                  className="rounded-xl object-cover aspect-square"
                />
                <span className="line-clamp-2 text-balance">
                  {notification.content}
                </span>
              </div>
            </OverlayElement>
          ))}
        </OverlayContent>
      </Overlay>

      <Overlay drawerProps={{ shouldScaleBackground: true }}>
        <OverlayTriggerButton className="group">
          <User className="stroke-muted-foreground group-hover:stroke-foreground" />
        </OverlayTriggerButton>
        <OverlayContent>
          {dummySettings.map((setting) => (
            <OverlayElement className="pr-24" key={setting}>
              {setting}
            </OverlayElement>
          ))}
        </OverlayContent>
      </Overlay>
    </div>
  );
}

const OverlayTriggerButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <OverlayTrigger
      drawerProps={{ asChild: true }}
      popoverProps={{ asChild: true }}
    >
      <Button intent="icon" className={className}>
        {children}
      </Button>
    </OverlayTrigger>
  );
};
