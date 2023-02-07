import Header from "./components/organisms/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/organisms/Footer";
import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
