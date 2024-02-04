import { Suspense } from "react";
import Categories from "./categories";
import HeaderLogo from "./header-logo";
import SearchGames from "./search-games";
import UserAccountSection from "./user-account-section";

export default function Header() {
  return (
    <div className="w-[90%] m-auto py-2 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <HeaderLogo />
        <UserAccountSection />
      </div>
      <div className="py-2 flex items-center justify-between sticky top-0">
        <SearchGames />
        <Suspense fallback="Loading comp...">
          <Categories />
        </Suspense>
      </div>
    </div>
  );
}
