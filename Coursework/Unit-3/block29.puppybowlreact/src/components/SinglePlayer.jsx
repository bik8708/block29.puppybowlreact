import React from "react";
import { Link } from "react-router-dom";
import RemovePlayer from "./RemovePlayer";

function SinglePlayer({ player }) {
  return (
    <div className="SinglePlayer">
      <p style={{ textAlign: "Center" }}>
        <strong>{player.name}</strong>
      </p>
      <img
        src={player.imageUrl}
        alt={player.name}
        style={{
          display: "block",
          width: "300px",
          height: "auto",
          margin: "0 auto",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <p>ID: {player.id}</p>
      <p>Breed: {player.breed}</p>
      <p>Team: {player.teamId || "Unassigned"}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Link to="/home">
          <button>Back to all Players</button>
        </Link>
        <RemovePlayer />
      </div>
    </div>
  );
}

export default SinglePlayer;
