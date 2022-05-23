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
      }
      // () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      // }
    );
  }
  async downloadImage() {
    const storeRef = this._storageRef;
    const response = await getDownloadURL(storeRef);
    console.log(response);
    return response;
  }
}
