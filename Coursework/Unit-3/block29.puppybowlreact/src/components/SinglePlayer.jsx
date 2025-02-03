import React from "react";
import { Link } from "react-router-dom";

function SinglePlayer({ player }) {
  return (
    <div className="SinglePlayer">
      More details on {player.name}
      <p style={{ textAlign: "Center" }}>{player.name}</p>
      <img
        src={player.imageUrl}
        alt={player.name}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <p>ID: {player.id}</p>
      <p>Breed: {player.breed}</p>
      <p>Team: {player.teamId || "Unassigned"}</p>
      <Link to="/home">
        <button>Back to all Players</button>
      </Link>
    </div>
  );
}

export default SinglePlayer;
