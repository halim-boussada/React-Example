import { useState } from "react";

function Home() {
  var [counter, setCounter] = useState(0);

  function icrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          icrement();
        }}
      >
        inc
      </button>
    </div>
  );
}

export default Home;
