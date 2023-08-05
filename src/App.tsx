import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="grow"></div>

      <Footer />
    </div>
  );
};

export default App;
