import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Item from "./Item";

export default function List() {
  const { list, search } = useSelector((state) => state.widget);

  let searchList = [
    ...list.filter((el) => el.service.toLowerCase().indexOf(search) >= 0),
  ];

  return (
    <ul className="workout-list">
      {searchList.map((el) => (
        <Item {...el} key={el.id} />
      ))}
    </ul>
  );
}
