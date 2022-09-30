import "./App.css";
import {  useState } from "react";
import { app, storage } from "./firebaseConfig";
import { ref,
  uploadBytesResumable,
  getDownloadURL} from "firebase/storage";
import { onSnapshot } from "firebase/firestore";

function App() {
 const [data,setData]=useState({});

const handleSubmit = () => {
   const storageRef=ref(storage,data.name);
   const uploadTask =uploadBytesResumable(storageRef,data);
   uploadTask.on(
    "state_change",
    (snapshot)=>
    {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
      console.log("upload is "+ progress + "% done");
    },
    (error)=> {
      console.log(error.message);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>
      {
        console.log("file available at ", downloadURL);
      });
    }
   )
  }
  return (
    <div className="App-header">
      <input
        name="email"
        type="file"
        className="input-fields"
        onChange={(event) => setData(event.target.files[0])}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
