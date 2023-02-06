import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./constants/env";
import Header from "./components/organisms/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/organisms/Footer";

function App() {
  initializeApp(FIREBASE_CONFIG);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
