import React from "react";
import axios from "axios";
import { useState } from "react";

function Form({ onSubmit }) {
  const initialFormState = {
    name: "",
    breed: "",
    imageUrl: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function submitForm() {
    const { newPlayer } = await axios.post(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players`,
      formData
    );
    onSubmit();
  }

  return (
    <div
      id="form"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        padding: "10px",
        margin: "30px",
      }}
    >
      <h3>Add a Player here:</h3>
      <form
        onSubmit={(event) => {
          console.log("submit");
          event.preventDefault();
          submitForm();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: ".5em",
          gap: "10px",
        }}
      >
        <label>
          Enter Puppy Name:
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={formData?.name}
          />
        </label>
        <label>
          Enter Puppy Breed:
          <input
            type="text"
            name="breed"
            onChange={handleInput}
            value={formData?.breed}
          />
        </label>
        <label>
          Enter Puppy Image URL:
          <input
            type="text"
            name="imageUrl"
            onChange={handleInput}
            value={formData?.imageUrl}
          />
        </label>
        <button type="submit" style={{ alignSelf: "center" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
