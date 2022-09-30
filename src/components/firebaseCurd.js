import "./App.css";
import { useEffect, useState } from "react";
import { app, database } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { addDoc, collection, getDoc, doc, updateDoc,deleteDoc } from "firebase/firestore";

function firebaseCurd() {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  };
  const handleSubmit = () => {
    // ------------------sign and create with firebase
    // signInWithEmailAndPassword(auth, googleProvider)
    //   .then((response) => {
    //     console.log(response.user);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    // ---------------Add DOC------------
    // addDoc(collectionRef, {
    //   email: data.email,
    //   password: data.password,
    // })
    //   .then(() => {
    //     alert("Data Added");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  // --------------------Get data----------------------------

  // const getData = () => {
  //   getDoc(collectionRef).then((response) => {
  //     console.log(
  //       response.data.map((item) => {
  //         return item.doc();
  //       })
  //     );
  //   });
  // };


  // -----------------------Update Data----------------------
  // const updataData = () => {
  //   const docToUpdate = doc(database, "users", `AFVwHtSaP5tsAehLd9op`);
  //   updateDoc(docToUpdate, {
  //     email: "test1@test.com",
  //     password: "test123456",
  //   })
  //     .then(() => {
  //       alert("Data Updated");
  //     })
  //     .catch((err) => {
  //       console.log("not updated");
  //     });
  // };

  // ---------------------Delete Data-------------------------
  // const deleteData = () => {
  //   const docToUpdate = doc(database, "users", `AFVwHtSaP5tsAehLd9op`);
  //   deleteDoc(docToUpdate)
  //     .then(() => {
  //       alert("Data Delete");
  //     })
  //     .catch((err) => {
  //       console.log("not delete");
  //     });
  // };

  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInput(event)}
      />
      {/* <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInput(event)}
      /> */}

      {/* <button onClick={handleSubmit}>Log In</button> */}
      <button onClick={deleteData}>Submit</button>
    </div>
  );
}

export default firebaseCurd;
