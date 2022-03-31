import React from "react";

function CakeContainer() {
  return (
    <div>
      <h3>Number of Cakes</h3>
      <button>Buy Cake</button>
    </div>
  );
}
const mapStateToProp= state =>{
  return {
    NumberOfcakes:state.NumberOfcakes
  }
}

export default CakeContainer;
