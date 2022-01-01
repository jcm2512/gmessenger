import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import Loading from "./loading";
import { useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; // V9

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
