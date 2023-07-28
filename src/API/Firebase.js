import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCy2W3J0MehuPjYS3YGNNC4LJOFFJctMXA",
  authDomain: "shoppy-45e82.firebaseapp.com",
  databaseURL: "https://shoppy-45e82-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-45e82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user
    })
    .catch(e => console.log(e))
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
