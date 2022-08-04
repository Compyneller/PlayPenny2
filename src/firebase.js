import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYERLxR3tUNgz9TtODovbtsxwnMvYdLi4",
  authDomain: "play-penny.firebaseapp.com",
  projectId: "play-penny",
  storageBucket: "play-penny.appspot.com",
  messagingSenderId: "417967852730",
  appId: "1:417967852730:web:7771265ea364053551c683",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// export const googleAuth = getAuth(app);
// export const emailAuth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(googleAuth, provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
