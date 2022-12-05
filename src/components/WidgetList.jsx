import React from "react";

import List from "./List";

import Filter from "./Filter";

import { useSelector } from "react-redux";

export default function WidgetList() {
  const { list } = useSelector((state) => state.widget);

  if (!list.length) return null;

  return (
    <div className="workout-body">
      <div className="m-10">
        <Filter />
      </div>
      <div className="workout-header">
        <div className="workout-header-item">Дата(ДД.ММ.ГГ)</div>
        <div className="workout-header-item">Пройдено км</div>
        <div className="workout-header-item">Действия</div>
      </div>
      <List />
    </div>
  );
}
