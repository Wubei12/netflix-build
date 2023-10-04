import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVgXL-nNt-AluAJAy3IbrH_Vr48iI-41Q",
  authDomain: "netflix-clone-fb11e.firebaseapp.com",
  projectId: "netflix-clone-fb11e",
  storageBucket: "netflix-clone-fb11e.appspot.com",
  messagingSenderId: "238456621935",
  appId: "1:238456621935:web:f581dec3aefcf1fa09b69a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
