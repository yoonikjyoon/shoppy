import { useEffect } from "react";
import Header from "./components/organisms/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/organisms/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
