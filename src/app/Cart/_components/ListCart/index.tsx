import React from "react";

const ListCart = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col md:flex-row  md:flex-wrap gap-2">
      {children}
    </ul>
  );
};
export default ListCart;
