import React, { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { dbService } from "../firebase/firebase";

const Nweet = ({ nweetObj }: any) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.nweet);

  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);

  const onDelete = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      // delete 부분
      await deleteDoc(NweetTextRef);
    }
  };

  const toggleEdit = async () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e: any) => {
    console.log("수정버튼");
    e.preventDefault();
    await updateDoc(NweetTextRef, {
      nweet: newNweet,
    });
    setEditing(false);
  };

  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    setNewNweet(value);
  };

  return (
    <>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet || ""}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEdit}>취소</button>
        </>
      ) : (
        <div>
          <h4>{nweetObj.nweet}</h4>
          <button onClick={onDelete}>삭제</button>
          <button onClick={toggleEdit}>수정</button>
        </div>
      )}
    </>
  );
};

export default Nweet;
