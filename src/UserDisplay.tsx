import React, { useState, ChangeEvent } from "react";
import { useGetUserQuery } from "./_generated";

export const UserDisplay = () => {

  const [userId, setUserId] = useState("1")
  const updateUserId = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  }

  const {
    isLoading,
    data,
    isError
  } = useGetUserQuery({id: userId})

  if (isError) {
    return <span>Error. Please reload page.</span>;
  }

  return (
    <section>
      <h3>Select a User ID between 1 and 10: </h3>
      <input type="number" min={1} max={10} value={userId} onChange={updateUserId} />
      {isLoading ? 
        <p>Loading...</p>
      : (
        <div className="userRow">
          <h3>{data?.user?.name}</h3>
          <p>User Id: {data?.user?.id}</p>
        </div>
      )}
    </section>
  );
};
