import React, { useState, useEffect } from "react";
import axios from "axios";
import RemovePlayer from "./RemovePlayer";
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [featurePlayer, setFeaturePlayer] = useState(null);

  function updatePlayers() {
    axios("https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players")
      .then((response) => {
        console.log(response.data);
        setPlayers(response.data.data.players);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    updatePlayers();
  }, []);

  return (
    <div>
      <h3> Search for your Favorite Puppies:</h3>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search puppies here"
      />

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {players
          .filter((player) => {
            if (!searchText) {
              return true;
            }
            return player.name.toLowerCase().includes(searchText.toLowerCase());
          })
          .map((player) => (
            <div
              key={player.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                width: "300px",
                boxSizing: "border-box",
              }}
            >
              <h3>{player.name}</h3>
              <p>ID: {player.id}</p>
              <img
                src={player.imageUrl}
                alt={player.name}
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: "250px",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Link
                to={`/players/${player.id}`}
                style={{ padding: "10px", fontSize: "12px" }}
              >
                See more details on {player.name}
              </Link>

              <RemovePlayer onDelete={() => updatePlayers()} player={player} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlayerList;
