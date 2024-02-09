export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="space-y-4 h-[1px] w-full bg-foreground-muted my-6" />

      <nav className="flex sm:space-x-4 text-sm flex-col sm:flex-row gap-2 sm:gap-0">
        <span>Submit a Game</span>
        <span className="hidden sm:block">·</span>
        <span>Jobs</span>
        <span className="hidden sm:block">·</span>
        <span>Privacy Policy</span>
        <span className="hidden sm:block">·</span>
        <span>Terms of Use</span>
      </nav>

      <div className="space-y-4 h-[1px] w-full bg-foreground-muted my-6" />

      <div className="text-xs flex flex-col gap-5 leading-relaxed tracking-wide mb-6 text-balance">
        <p>
          Gamezop is a plug-and-play gaming platform that any app or website can
          integrate to bring casual gaming for its users. Gamezop also operates
          Quizzop, a quizzing platform, that digital products can add as a
          trivia section.
        </p>
        <p>
          Over 5,000 products from more than 70 countries have integrated
          Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap,
          Tata Play, AccuWeather, Paytm, Gulf News, and Branch.
        </p>
        <p>
          Games and trivia increase user engagement significantly within all
          kinds of apps and websites, besides opening a new stream of
          advertising revenue. Gamezop and Quizzop take 30 minutes to integrate
          and can be used for free: both by the products integrating them and
          end users
        </p>
        <p>
          If you wish to add games and trivia to your product, write to us on:
          <a className="text-blue-500" href="mailto: partnerships@gamezop.com">
            partnerships@gamezop.com
          </a>
        </p>
        <p>
          For more information, please visit:
          <a className="text-blue-500" href="https://business.gamezop.com">
            business.gamezop.com
          </a>
        </p>

        <div className="space-y-4 h-[1px] w-full bg-foreground-muted" />
        <p>
          © 2024 Advergame Technologies Pvt. Ltd. ("ATPL"). Gamezop ® & Quizzop
          ® are registered trademarks of ATPL
        </p>
      </div>
    </footer>
  );
}
