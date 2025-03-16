import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <div>
      <h1>this is header</h1>
      <div>{children}</div>
      <h1>this is footer</h1>
    </div>
  );
};

export default ProfileLayout;
