/* eslint jsx-a11y/anchor-is-valid:0*/
import React, { useEffect, useState } from "react";

import Default from "../templates/Default";

import UserListWrapper from "../molecules/UserListWrapper";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        //setisLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <Default>
      <div className="users">
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
