import React from "react";
import PlayerList from "./PlayerList";
import Form from "./Form";
import { useState } from "react";

function Home() {
  const [submitIndex, setSubmitIndex] = useState(0);

  return (
    <>
      <Form onSubmit={() => setSubmitIndex(submitIndex + 1)} />
      <PlayerList key={submitIndex} />
    </>
  );
}

export default Home;
