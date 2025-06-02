/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1>No Request Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Request</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, gender, age, bio } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-between items-center p-4  rounded-lg bg-base-300 w-2/3 mx-auto my-2"
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

            <div>
              <button className="btn btn-active btn-primary mx-2">
                Accept
              </button>
              <button className="btn btn-active btn-secondary mx-2">
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
