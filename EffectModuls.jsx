import { useEffect, useState } from "react";

function EffectModules() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🔵 useEffect triggered. Count changed to:", count);

    return () => {
      console.log("🟡 Cleanup: Count was:", count);
    };
  }, [count]);

  return (
    <>
      <h2>useEffect Lifecycle Example</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </>
  );
}

export default EffectModules;
