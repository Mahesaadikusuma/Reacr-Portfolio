import React, { useState } from "react";

const JokeComponent = () => {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(null);

  const getJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className='flex justify-center h-screen gap-7'>
      <button onClick={getJoke}>Get Joke</button>
      {loading ? (
        <p className='flex justify-center items-center flex-col'>Loading...</p>
      ) : joke ? (
        <div className='flex justify-center items-center flex-col'>
          <h4>{joke.setup}</h4>
          <p>{joke.punchline}</p>
        </div>
      ) : null}
    </div>
  );
};

export default JokeComponent;
