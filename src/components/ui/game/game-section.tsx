import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  heading: string;
};

export default function GameSection({ children, heading }: Props) {
  return (
    <div>
      <div>
        <h2 className="text-xl font-medium my-4">{heading}</h2>
      </div>
      <div className="no-scrollbar overflow-x-scroll grid grid-flow-col-dense  auto-rows-[200px_auto] sm:auto-rows-[auto_auto] auto-cols-max gap-5">
        {children}
      </div>
    </div>
  );
}
