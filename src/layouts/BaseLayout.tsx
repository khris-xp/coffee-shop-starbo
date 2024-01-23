import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="base-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
