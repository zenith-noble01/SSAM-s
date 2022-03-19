import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomeT = ({ teacher }) => {
  return (
    <div className="Teacher">
      <Navbar teacher={teacher} />
    </div>
  );
};

export default HomeT;
