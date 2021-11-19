import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../action/index';
import s from "./searchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  }

  return (
    <div className={s.searchBar}>
      <input
        className={s.input}
        type="text"
        value={name}
        placeholder="Search Breed..."
        onChange={(e) => handleInputChange(e)}
      /> 
      <button type="submit" onClick={(e) => handleSubmit(e)} className={s.btn}>
      Search
     </button>
     
    </div>
  );
}