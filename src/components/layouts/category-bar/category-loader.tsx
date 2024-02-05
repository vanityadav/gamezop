export default function CategoriesLoader({
  numberOfLoaders = 8,
}: {
  numberOfLoaders?: number;
}) {
  const categories = new Array(numberOfLoaders).fill("Action new");

  return (
    <div className="flex items-center justify-between gap-3 overflow-x-auto text-nowrap no-scrollbar animate-pulse">
      {categories.map((category, index) => (
        <div
          key={index}
          className="px-4 py-2 w-20 text-background-focused/0 bg-background-focused/50 rounded-md border border-border"
        >
          {category}
        </div>
      ))}
    </div>
  );
}
