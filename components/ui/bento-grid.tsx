"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-neutral-900 bg-white border border-transparent hover:border-primary/50 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 w-fit rounded-md dark:bg-neutral-800 bg-neutral-100 group-hover/bento:bg-primary/5 transition duration-200">
            {icon}
          </div>
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
          {description}
        </p>
      </div>
      {header}
    </div>
  );
};