import React, { useEffect, useState } from "react";
import { dbService } from "../../firebase/firebase";
import Nweet from "../../components/Nweet";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState();
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        nweet,
        createdAt: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          value={nweet || ""}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet, key) => {
          return <Nweet key={key} nweetObj={nweet} />;
        })}
      </div>
    </>
  );
};

export default Home;
