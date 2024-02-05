"use client";

import { Drawer } from "vaul";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export function MyDrawer({ children }: Props) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return (
    <Drawer.Root open={open} onClose={router.back} shouldScaleBackground>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 h-[96%] rounded-t-[10px]">
          <Drawer.Close onClick={() => setOpen(false)}>Close </Drawer.Close>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
