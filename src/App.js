import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./constants/env";

function App() {
  initializeApp(FIREBASE_CONFIG);

  return (
    <>
      <div>Shoppy</div>
    </>
  );
}

export default App;
