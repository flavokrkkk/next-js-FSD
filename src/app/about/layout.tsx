import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const AboutLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <ul>
        <li>
          <Link href={"/about"}>About us</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutLayout;
