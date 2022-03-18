import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return <div>UserDetail from Params is --- {userId}</div>;
};

export default UserDetail;
