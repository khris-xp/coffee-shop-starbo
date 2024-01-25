import Hero from "./components/Hero";
import BaseLayout from "./layouts/BaseLayout";
import Card from "./components/Card";
import { ProductData } from "./constants/Product";

function App() {
  return (
    <BaseLayout>
      <div className="xl:mx-40 xl:my-10">
        <Hero />
      </div>
      <div className="flex justify-center items-center mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {ProductData.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

export default App;
