import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SinglePlayer from "./SinglePlayer";
import { useState } from "react";

function SinglePlayerPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    axios(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
    )
      .then((response) => {
        console.log(response.data);
        setPlayer(response.data.data.player);
      })
      .catch((err) => console.error(err));
  }, []);

  return <>{player ? <SinglePlayer player={player} /> : "Loading player..."}</>;
}

export default SinglePlayerPage;
