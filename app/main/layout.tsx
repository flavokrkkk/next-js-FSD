import { FC } from "react";

interface ILayout {
  children: React.ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  return <section>{children}</section>;
};

export default Layout;
