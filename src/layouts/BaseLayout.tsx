import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fragment } from "react";

interface IChildren {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IChildren) {
  return (
    <Fragment>
      <Navbar />
      <main className="font-nunito">{children}</main>
      <Footer />
    </Fragment>
  );
}
