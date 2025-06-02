/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { _id, firstName, lastName, photoUrl, age, gender, bio } = user;

  console.log(user);

  const dispatch = useDispatch();

  const handleRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " , " + gender}</p>}
        <p>{bio}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequest("interested", _id)}
          >
            Interested
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleRequest("ignored", _id)}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
