import React from "react";

function item(props) {
  return (
    <>
      <p>
        {props.name}  <button onClick={(e) => props.remove(props.id)}>X</button>
        {/* id: {props.id} */}
      </p>
    </>
  );
}

export default item;
