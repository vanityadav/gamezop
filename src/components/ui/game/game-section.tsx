import Link from "next/link";
import cx from "@/lib/utils/cx";
import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ChevronRight } from "lucide-react";

const gameSectionVariants = cva("", {
  variants: {
    intent: {
      default:
        "no-scrollbar overflow-x-scroll grid grid-flow-col-dense auto-rows-auto auto-cols-max gap-5",
      grid: "grid  grid-cols-[repeat(auto-fit,_minmax(225px,_1fr))] gap-10",
    },
    header: {
      default: "",
      sticky: "sticky top-0 z-30 bg-background",
    },
  },
  defaultVariants: {
    intent: "default",
    header: "default",
  },
});

type Props = VariantProps<typeof gameSectionVariants> & {
  children: ReactNode;
  heading: string;
  className?: string;
  count?: number;
  href?: string;
};

export default function GameSection({
  children,
  heading,
  className,
  intent = "default",
  count,
  header,
  href,
}: Props) {
  const Comp = href ? Link : "div";

  return (
    <section className={cx(className)}>
      <Comp
        href={href || ""}
        className={cx(
          "flex items-center gap-2 py-6 group",
          gameSectionVariants({ header })
        )}
      >
        <div className="flex gap-2 items-center text-xl md:text-2xl font-medium capitalize">
          <h1>{heading}</h1>
          {count && <span>&#40;{count}&#41;</span>}
          {href && (
            <ChevronRight className="group-hover:translate-x-2 transition-all" />
          )}
        </div>
      </Comp>
      <div className={cx(gameSectionVariants({ intent }))}>{children}</div>
    </section>
  );
}
