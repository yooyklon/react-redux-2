import React from "react";

import { useSelector } from "react-redux";

import Item from "./Item";

import Filter from "./Filter";

export default function List() {
  const { list, search } = useSelector((state) => state.widget);

  if (!list.length) return null;

  let searchList = [
    ...list.filter((el) => el.service.toLowerCase().indexOf(search) >= 0),
  ];

  return (
    <>
      <div className="m-20">
        <Filter />
      </div>
      <ul className="widget-list">
        {searchList.map((el) => (
          <Item {...el} key={el.id} />
        ))}
      </ul>
    </>
  );
}
