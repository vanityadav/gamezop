import getGameCategories from "@/lib/services/get-game-categories";
import React from "react";

export default async function Page() {
  const categories = await getGameCategories();

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>{category}</div>
      ))}
    </div>
  );
}
