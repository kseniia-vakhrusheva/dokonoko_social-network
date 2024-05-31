import React, { useEffect } from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../image/photo_default.png';

let Users = (props) => {
  const { users, setUsers } = props;
  useEffect(() => {
    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          setUsers(response.data.items);
        });
    }
  }, [users.length, setUsers]);

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small || userPhoto} alt="profile" className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
