import React from "react";
import { useParams } from "react-router-dom";

const IdPrecieuse = () => {
  const { idPrecieuse } = useParams();
  return (
    <>
      <div>ID Dynamics Dashboard - ID : {idPrecieuse}</div>
    </>
  );
};

export default IdPrecieuse;
