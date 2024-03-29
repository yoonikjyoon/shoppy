import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  query,
  remove,
  limitToFirst,
  startAfter,
  equalTo,
  orderByChild,
  orderByKey,
  startAt,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  return signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUsert = user ? await adminUser(user) : null;
    callback(updateUsert);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

const databaseRef = ref(database, "products");
const PAGE_SIZE = 12;

export async function getAllProducts(lastKey = null) {
  let getAllQuery = "";
  if (lastKey) {
    getAllQuery = query(
      databaseRef,
      orderByKey(),
      startAfter(lastKey),
      limitToFirst(PAGE_SIZE + 1)
    );
  } else {
    getAllQuery = query(databaseRef, limitToFirst(PAGE_SIZE + 1));
  }
  const snapshot = await get(getAllQuery);
  if (snapshot.exists()) {
    const itemList = Object.values(snapshot.val());
    const hasNextPage = itemList.length > PAGE_SIZE;
    if (hasNextPage) {
      itemList.pop();
    }
    return {
      itemList,
      hasNextPage,
      lastKey: hasNextPage ? itemList[itemList.length - 1].id : null,
    };
  }
  return { itemList: [], lastKey: null, hasNextPage: null };
}

export async function getCategoryProducts(category, lastKey = null) {
  let productsQuery = "";
  if (lastKey) {
    productsQuery = query(
      databaseRef,
      orderByChild("category"),
      startAt(category, lastKey),
      limitToFirst(PAGE_SIZE + 1)
    );
  } else {
    productsQuery = query(
      databaseRef,
      orderByChild("category"),
      equalTo(category),
      limitToFirst(PAGE_SIZE + 1)
    );
  }
  const snapshot = await get(productsQuery);
  if (snapshot.exists()) {
    const itemList = Object.values(snapshot.val()).filter(
      (item) => item.category === category
    );
    const hasNextPage = itemList.length > PAGE_SIZE;
    let nextPageKey = "";
    if (hasNextPage) {
      nextPageKey = itemList[itemList.length - 1].id;
      itemList.pop();
    }

    return {
      itemList,
      hasNextPage,
      lastKey: hasNextPage ? nextPageKey : null,
    };
  }
  return { itemList: [], lastKey: null, hasNextPage: null };
}

export async function addNewProduct(product, image) {
  // 제품마다 고유한 아이디를 위해
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product, // 기존에 있는 product는 그대로 가져오고
    id,
    price: parseInt(product.price), // string으로 받아왔으므로
    image,
    options: product.options.split(","),
  });
}
export async function removeFromProduct(id) {
  return remove(ref(database, `products/${id}`));
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
