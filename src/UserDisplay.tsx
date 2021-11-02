import React, { useState } from "react";
import { useGetUserQuery } from "./_generated";


export const UserDisplay = () => {

  const [userId, setUserId] = useState("1")
  const updateUserId = (event: React.ChangeEvent<HTMLInputElement>) => setUserId(event.target.value);

  const {
    isLoading,
    data,
    isError
  } = useGetUserQuery({id: userId})

  if (isError || !data) {
    return <span>Error. Please reload page.</span>;
  }

  const { user } = data;

  return (
    <section>
      <h3>Select a User ID between 1 and 10: </h3>
      <input type="number" min={1} max={10} value={userId} onChange={updateUserId}/>
      {isLoading ? 
        <p>Loading...</p>
      : (
        <div className="userRow">
          <h3>{user?.name}</h3>
          <p>User Id: {user?.id}</p>
        </div>
      )}
    </section>
  );
};
