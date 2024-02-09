import Link from "next/link";
import { ReactNode } from "react";

type Props = { children: ReactNode; href?: string; title: string };

export default function GameListCardSection({ children, href, title }: Props) {
  return (
    <section className="snap-start flex-[0_0_100%] sm:flex-1 border-l border-foreground-muted ">
      <div className="flex gap-6 items-center justify-between text-lg capitalize mb-4 pl-4">
        <h1>{title}</h1>
        {href && (
          <Link
            href={href}
            className="text-[10px] px-4  border rounded capitalize border-foreground-muted hover:bg-foreground-muted/30"
          >
            View More
          </Link>
        )}
      </div>
      <div className="pl-4">{children}</div>
    </section>
  );
}
