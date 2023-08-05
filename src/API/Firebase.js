import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCy2W3J0MehuPjYS3YGNNC4LJOFFJctMXA",
  authDomain: "shoppy-45e82.firebaseapp.com",
  databaseURL:
    "https://shoppy-45e82-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-45e82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null; //비동기 함수처리 한 후 콜백 함수 호출
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admin")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(console.error);
}

export async function addNewProduct(product, image) {
  const id = uuid();
  set(ref(database, `products/${id}}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: image,
    options: product.options.split(","),
  });
}

export async function getProducts() {
  const productRef = ref(database, "products");
  return get(productRef).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
