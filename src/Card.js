import React from "react";
import { useDrag } from "react-dnd";

const Card = ({data}) => {

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: data.component.type,
    item: data,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (<div
        ref={dragRef}
        className="box"
        style={{
          backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
        }}
      >
        {data.component.name}
      </div>)
}
export default Card;