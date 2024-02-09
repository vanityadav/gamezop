import { Suspense } from "react";
import Categories from "./categories";
import CategoriesLoader from "./category-loader";

type Props = {
  fetchedGames?: Game[];
};

export default function CategoryBar({ fetchedGames }: Props) {
  return (
    <div className="py-4 flex items-center justify-between sticky top-0 mt-1 mb-4 md:mb-6 sm:mt-2 md:mt-4 bg-background z-20">
      <Suspense fallback={<CategoriesLoader />}>
        <Categories fetchedGames={fetchedGames} />
      </Suspense>
    </div>
  );
}
