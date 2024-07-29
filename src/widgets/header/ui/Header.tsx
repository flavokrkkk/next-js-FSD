import React, { FC } from "react";
import { IRoute } from "../model/IRoute";
import Link from "next/link";

interface IHeader {
  navigation: IRoute[];
}

const Header: FC<IHeader> = ({ navigation }) => {
  return (
    <section className="h-16 flex justify-center gap-6 items-center bg-gray-400 border-2 border-gray-600">
      {navigation.map((navigate) => (
        <span key={navigate.id} className="text-white">
          <Link href={navigate.path}>{navigate.value}</Link>
        </span>
      ))}
    </section>
  );
};

export default Header;
