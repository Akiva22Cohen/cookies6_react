import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UserInfo() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    doApi();
    console.log(info);
  }, []);

  const doApi = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get("http://localhost:3001/users/myInfo");
      if (data.id) {
        setInfo(data);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("You need to logged in to be here");
    }
  };

  return (
    <div className="container">
      <h1>User info:</h1>
      {info.id ? (
        <div>
          <h2>Your name: {info.name}</h2>
          <h2>Your Email: {info.email}</h2>
          {/* <h2>Date sign up: {info.createdAt.substring(0, 10)}</h2> */}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
