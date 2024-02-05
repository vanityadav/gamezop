import cx from "@/lib/utils/cx";

type Props = {
  className?: CSSStyleValue;
};

export default function SearchGames({ className }: Props) {
  return (
    <>
      <div className={cx("flex-1 max-w-80 hidden md:block", className)}>
        <form>
          <input
            type="text"
            placeholder="Search games..."
            className="px-5 py-2 rounded-full bg-background-focused/50 w-full border border-border ring-0  outline-0"
          />
        </form>
      </div>
    </>
  );
}
