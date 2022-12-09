import { addDoc, collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { dbService } from "../../firebase/firebase";
import { DocumentData } from "firebase/firestore";

interface SnapshotData {
  id: string;
}

const Home = () => {
  const [nweet, setNweet] = useState();
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await getDocs(collection(dbService, "nweets"));
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      setNweets((nweets) => [...nweets, nweetObject]);
    });
  };

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

  useEffect(() => {
    getNweets();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          value={nweet}
          onChange={onChange}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet, key) => {
          console.log("nweet: ", nweet);
          return (
            <div key={key}>
              <h4>{nweet.nweet}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
