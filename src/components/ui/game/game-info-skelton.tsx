import React from "react";

export default function GameInfoSkelton() {
  return (
    <div className="max-w-full mx-auto p-4">
      <div className="space-y-6">
        <div className="animate-pulse rounded-md bg-background-focused h-12 w-1/4"></div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="animate-pulse rounded-md bg-background-focused h-6 w-14"></div>
            <div className="animate-pulse rounded-md bg-background-focused h-6 w-24"></div>
          </div>
          <div className="animate-pulse rounded-md bg-background-focused h-10 w-1/4"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="animate-pulse rounded-md bg-background-focused flex-3 w-full"></div>
          <div className="col-span-5 space-y-4 flex flex-col flex-2">
            <div className="animate-pulse rounded-md bg-background-focused aspect-video"></div>
            <div className="animate-pulse rounded-md bg-background-focused h-16 w-64"></div>
            <div className="animate-pulse rounded-md bg-background-focused h-6 w-2/3"></div>
            <div className="animate-pulse rounded-md bg-background-focused h-6 w-1/3"></div>
            <div className="animate-pulse rounded-md bg-background-focused h-6 w-1/2"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="animate-pulse rounded-md bg-background-focused aspect-square"></div>
          <div className="animate-pulse rounded-md bg-background-focused aspect-square"></div>
          <div className="animate-pulse rounded-md bg-background-focused aspect-square"></div>
        </div>
      </div>
    </div>
  );
}
