import { Metadata } from "next";
import TypesPage from "@/components/pages/types-page";

export const metadata: Metadata = {
  title: "All tags | Gamezop",
};

export default function Page() {
  return <TypesPage title="All Tags" type="tags" />;
}
