"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useContext } from "react";
import { DrawerContext } from "./game-drawer";

type LabelProps = {
  labels: string[];
  labelHeading: string;
  basePath: "categories" | "tags";
  children: ReactNode;
};

export default function LinkLabelSectionClient({
  labels,
  labelHeading,
  basePath,
  children,
}: LabelProps) {
  const router = useRouter();
  const drawerContext = useContext(DrawerContext);

  if (!drawerContext) return <>{children}</>;

  const { setOpen } = drawerContext;
  if (labels.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <span>{labelHeading}</span>
      <div className="flex flex-wrap gap-1">
        {labels.map((label) => (
          <div
            key={label}
            onClick={() => {
              router.push(
                `/${basePath}/${encodeURIComponent(label).toLowerCase()}`
              );
              setOpen(false);
            }}
            className="cursor-pointer text-xs px-2 py-1 bg-background-focused/70 text-foreground-muted rounded text-center hover:text-foreground hover:bg-background-focused"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
