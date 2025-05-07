import { Link } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Client() {
  const [randomNumber, setRandomNumber] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const newRandom = getRandomInt(2000);
      setRandomNumber(newRandom);
    }, 2000); // runs after 2 seconds

    // Optional cleanup (good practice)
    return () => clearTimeout(timer);
  }, [randomNumber]); // Empty dependency array → run only once on mount

  return (
    <>
      <Link to="/">
        <HiHomeModern size={30} />
      </Link>
      <div className="headline"></div>
      <h3>
        Drawing of <br />
        <em>Earthrise</em>
      </h3>
      <h1>{randomNumber !== null ? randomNumber : "Generating..."}</h1>
      <section className="moses">
        <img className="earthrise" src="https://mimo.app/i/cat.png" />
        <img className="earthrise" src="https://mimo.app/i/dog.png" />
        <img className="earthrise" src="https://mimo.app/i/lion.png" />
        <img className="earthfall earthrise" src="https://mimo.app/i/tiger.png" />
      </section>
    </>
  );
}
