import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(100)}>Set Jadi 100</button>
      <button onClick={() => setCounter(counter + 1 )}>Tambah</button>
      <button onClick={() => setCounter(counter - 1)}>Kurang</button>
    </>
  );
}
