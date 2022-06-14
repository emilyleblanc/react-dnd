import React from "react";
import { useDrag } from "react-dnd";

const Image = ({id,data}) => {

  // const [{ isDragging }, dragRef] = useDrag(() => ({
  //   type: data.component.type,
  //   item: data,
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  return (
    <img 
      alt="cute kitten" 
      src="http://placekitten.com/200/300"
    />
    )
}

export default Image;