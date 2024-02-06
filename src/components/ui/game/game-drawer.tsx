"use client";

import { Drawer } from "vaul";
import { X } from "lucide-react";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function GameDrawer({ children }: Props) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <Drawer.Root
      open={open}
      onClose={router.back}
      shouldScaleBackground
      dismissible={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 dark:bg-white/10 backdrop-blur-sm" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-xl h-[90%] fixed bottom-0 left-0 right-0">
          <Drawer.Close>
            <div
              className="absolute top-2 right-2 z-[100] bg-background-focused/30 backdrop-blur p-2 rounded-md "
              onClick={() => setOpen(false)}
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
  );
}
