import { Suspense } from "react";
import Categories from "./categories";
import CategoriesLoader from "./category-loader";

export default function CategoryBar() {
  return (
    <div className="py-4 flex items-center justify-between sticky top-0">
      <Suspense fallback={<CategoriesLoader />}>
        <Categories />
      </Suspense>
    </div>
  );
}
