import Header from "./components/organisms/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
