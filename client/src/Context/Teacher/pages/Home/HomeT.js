import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomeT = ({ teacher }) => {
  return (
    <div className="Teacher">
      <Navbar teacher={teacher} />
      the isthe home teacher page
    </div>
  );
};

export default HomeT;
