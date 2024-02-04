import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-background" + " " + sans.className}>
        <Providers>
          <div vaul-drawer-wrapper="" className="bg-background min-h-[100dvh]">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
