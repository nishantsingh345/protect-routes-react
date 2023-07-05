import { useState } from "react";

const About = () => {
  const [count, setCount] = useState("Nishant");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About page</h1>
      <p>You can Add my name on one click {count}</p>
      <button onClick={() => setCount(count + " Singh")}>Get My full Name</button>
    </div>
  );
};
export default About;
