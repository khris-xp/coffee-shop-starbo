import Hero from "./components/Hero";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <BaseLayout>
      <div className="xl:mx-40 xl:my-10">
        <Hero />
      </div>
    </BaseLayout>
  );
}

export default App;
