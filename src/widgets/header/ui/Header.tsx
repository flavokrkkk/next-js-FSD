import React, { FC } from "react";
import { IRoute } from "../model/IRoute";
import Link from "next/link";
import Naviagtion from "@/shared/ui/Naviagtion";

interface IHeader {
  navigation: IRoute[];
}

const Header: FC<IHeader> = ({ navigation }) => {
  return (
    <section className="h-16 flex justify-center gap-6 items-center bg-gray-400 border-2 border-gray-600">
      {navigation.map((navigate) => (
        <Naviagtion key={navigate.id} navigate={navigate} />
      ))}
    </section>
  );
};

export default Header;
