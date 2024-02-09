import Link from "next/link";

type LabelProps = {
  labels: string[];
  labelHeading: string;
  basePath: "categories" | "tags";
};

export default function LinkLabelSectionServer({
  labels,
  labelHeading,
  basePath,
}: LabelProps) {
  if (labels.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <span>{labelHeading}</span>
      <div className="flex flex-wrap gap-1">
        {labels.map((label) => (
          <Link
            key={label}
            href={`/${basePath}/${encodeURIComponent(label).toLowerCase()}`}
            className="text-xs px-2 py-1 bg-background-focused/70 text-foreground-muted rounded text-center hover:text-foreground hover:bg-background-focused"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
