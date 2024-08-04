"use client";

import { IRoute } from "@/widgets/header/model/IRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface INaviagtion {
  navigate: IRoute;
}

const Naviagtion: FC<INaviagtion> = ({ navigate }) => {
  const pathname = usePathname();

  const isPathname = pathname === navigate.path;

  return (
    <span
      key={navigate.id}
      className={`text-white ${
        isPathname
          ? "bg-gray-500 p-1 h-full flex justify-center items-center w-16"
          : ""
      }`}
    >
      <Link href={navigate.path}>{navigate.value}</Link>
    </span>
  );
};

export default Naviagtion;
