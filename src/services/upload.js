import store from "../store/index.js";
import { storage } from "./firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export class storageService {
  constructor(fileInfo) {
    this.file = fileInfo.file;
    (this.fileName = fileInfo.userId),
      (this._storageRef = ref(
        storage,
        `/images/${this.fileName}/${this.file.name}`
      ));
  }
  // set profileImage(data) {
  //   this.file = data.file;
  // }
  uploadImage() {
    const uploadTask = uploadBytesResumable(this._storageRef, this.file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("progress", progress);
      },
      (error) => {
        console.log("error has occured", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          localStorage.setItem("photoUrl", url);
          store.commit("setPhotoUrl", url);
        });
      }
    );
  }
}

export class downloadCl {
  constructor(userId) {
    this.userId = userId;
    this.path = ref(storage, `/images/${this.userId}/image`);
  }
  async downLoad() {
    const response = await getDownloadURL(this.path);
    return response;
  }
}
