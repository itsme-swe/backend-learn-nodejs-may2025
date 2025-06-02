/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections/matches", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, gender, age, bio } =
          connection;
        return (
          <div
            key={_id}
            className="flex m-4, p-4  rounded-lg bg-base-300 w-1/2 mx-auto my-2"
          >
            <div>
              <img
                alt="photo"
                className="w-24 h-24 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 my-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + " , " + gender}</p>}
              <p>{bio}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
