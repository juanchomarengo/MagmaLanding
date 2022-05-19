import React from "react";

export const Container = ({ className, children, ...props }) => {
  return (
    <div className={className + " px-7 lg:px-20 xl:px-52"} {...props}>
      {children}
    </div>
  );
};
