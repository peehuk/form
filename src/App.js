import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const calc = (sign) => {
    let tmp = 0;
    if (sign === -1) tmp = 0;
    else if (sign === 0) tmp = count - 1;
    else if (sign === 1) tmp = count + 1;
    else if (sign === 2) tmp = count * 2;
    else if (sign === 3) tmp = count / 2;
    if (tmp < 0) return;
    setCount(tmp);
  };
  return (
    <div>
      <button onClick={() => calc(-1)}> RESET </button>
      <button onClick={() => calc(0)}> - </button>
      {count}
      <button onClick={() => calc(1)}> + </button>
      <button onClick={() => calc(2)}> * </button>
      <button onClick={() => calc(3)}> / </button>
    </div>
  );
};
export default App;
