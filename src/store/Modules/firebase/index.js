// import { doc, setDoc } from "firebase/firestore";
// For storing data in database with unique Id generated by firestore
// use addDoc
import {
  collection,
  addDoc,
  deleteDoc,
  setDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
// import for read data
import { doc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../../services/firebase.js";
export default {
  state() {
    return {};
  },
  actions: {
    async addDataToDatabase(context, payload) {
      const enteredData = {
        ...payload,
        timeStamp: serverTimestamp(),
      };
      try {
        // Add a new document with custom id.
        // await setDoc(doc(db, "data", "one"), payload);
        // Add a new document with a generated id.
        //   await addDoc(collection(db, "data"), payload);
        const docRef = collection(db, "data");
        await setDoc(doc(docRef), enteredData);
        context.dispatch("loadPosts");
      } catch (error) {
        console.log(error.message);
      }
    },
    async deletePost(context, postId) {
      const docRef = doc(db, "data", postId);
      await deleteDoc(docRef);
      context.dispatch("loadPosts");
    },
    loadPosts(context) {
      const fetchData = [];

      // get data from collection
      const collRef = collection(db, "data");
      // Query
      const q = query(collRef, orderBy("timeStamp", "desc"));
      // const data = await getDocs(collRef);
      // data.forEach((doc) => {
      //   fetchData.push({ ...doc.data(), id: doc.id });
      // });
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          fetchData.push({ ...doc.data(), id: doc.id });
        });

        context.commit("setPosts", fetchData);
      });
    },
  },
  mutations: {},
  getters: {},
};
