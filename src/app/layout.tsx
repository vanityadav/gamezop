import "./globals.css";
import cx from "@/lib/utils/cx";
import { ReactNode } from "react";
import type { Metadata } from "next";
import Providers from "@/lib/providers";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Plus_Jakarta_Sans } from "next/font/google";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameZop",
  description: "Web game platform",
};

type Props = Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>;

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body className={cx("bg-background", sans.className)}>
        <Providers>
          <div vaul-drawer-wrapper="" className="bg-background min-h-[100dvh]">
            <div className="w-[90%] m-auto text-sm text-foreground">
              <Header />
              {children}
              {modal}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
