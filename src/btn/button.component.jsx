import React from "react";

export const ComponentButton = ({ state, keep }) => {
  return <button className={` mt-5 mr-3 ${state}`}>文字が変わるボタン</button>;
};
