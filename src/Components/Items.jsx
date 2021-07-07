import React from "react";
import data from "../data";
import NewModal from "./NewModal";

const Items = () => {
  const { products } = data;
  return (
    <div className="allbox">
      {products.map((list) => (
        <NewModal key={list.id} id={list.id}>
          <div className="bbox">
            <img className="fimgs" alt={list.name} src={list.image}></img>
            <div className="box2">
              <h6>
                <b>{list.name}</b>
              </h6>
              <h6>
                <b>{"$" + list.price}</b>
              </h6>
            </div>
          </div>
        </NewModal>
      ))}
    </div>
  );
};

export default Items;
