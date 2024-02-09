import HeaderLogo from "./header-logo";
import SearchGames from "./search-games";
import UserAccountSection from "./user-account-section";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-2">
        <HeaderLogo />
        <SearchGames />
        <UserAccountSection />
      </nav>
    </header>
  );
}
