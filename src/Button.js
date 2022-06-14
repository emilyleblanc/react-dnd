import React from "react";
import { useDrag } from "react-dnd";

const Button = ({id, data}) => {

  // const [{ isDragging }, dragRef] = useDrag(() => ({
  //   type: data.component.type,
  //   item: data,
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  return(
    <button 
      key={id} 
      // ref={dragRef}
      // style={{
      //   border: isDragging ? "5px solid #fbb" : "5px solid palegoldenrod",
      // }}
      >click me!!</button>
  )
}

export default Button;