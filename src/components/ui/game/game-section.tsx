import cx from "@/lib/utils/cx";
import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

const gameSectionVariants = cva("", {
  variants: {
    intent: {
      default:
        "no-scrollbar overflow-x-scroll grid grid-flow-col-dense auto-rows-auto auto-cols-max gap-5",
      grid: "grid  grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-10",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type Props = VariantProps<typeof gameSectionVariants> & {
  children: ReactNode;
  heading: string;
  className?: string;
  count?: number;
};

export default function GameSection({
  children,
  heading,
  className,
  intent = "default",
  count,
}: Props) {
  return (
    <div className={cx(className)}>
      <div className="flex items-center gap-2 my-6 ">
        <div className="flex gap-2">
          <h2 className="text-2xl font-medium capitalize">{heading}</h2>
          {count && <span className="text-2xl">&#40;{count}&#41;</span>}
        </div>
      </div>
      <div className={cx(gameSectionVariants({ intent }))}>{children}</div>
    </div>
  );
}
