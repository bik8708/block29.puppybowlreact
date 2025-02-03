import React from "react";
import axios from "axios";

function RemovePlayer({ player, onDelete }) {
  async function removePlayer() {
    await axios.delete(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${player.id}`
    );
    onDelete();
  }

  return <button onClick={() => removePlayer()}>Remove from Roster</button>;
}

export default RemovePlayer;
