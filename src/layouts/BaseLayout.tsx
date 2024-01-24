import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface IChildren {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IChildren) {
  return (
    <div className="base-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
