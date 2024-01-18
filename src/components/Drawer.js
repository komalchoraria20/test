import React from "react";

const Drawer = ({ children, isOpen, closeDrawer }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="backdrop" />
      <div className="drawer">
        <div className="drawer-content">{children}</div>
        <button
          onClick={closeDrawer}
          className="close"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default Drawer;
