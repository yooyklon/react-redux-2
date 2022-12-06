import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import searchChange from "../actions/searchChange";

export default function Filter() {
  const { search } = useSelector((state) => state.widget);

  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(searchChange(event.target.value));
  }

  return (
    <div className="filter-box">
      <input
        className="filter-input"
        placeholder="Поиск..."
        value={search}
        onChange={handleChange}
      />
      <span className="material-symbols-outlined filter-icon">search</span>
    </div>
  );
}
