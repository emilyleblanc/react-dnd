import React, { useState } from "react";
import Image from "./Image";
import Button from "./Button";

import { useDrop } from "react-dnd";
import { COMPONENTS, SIDEBAR_ITEMS } from "./constants";


const Box = (id) => { 
  
  const [board, setBoard] = useState([])

  const [{isOver}, dropRef] = useDrop(() => ({
    accept:["SIDEBAR_ITEM","COMPONENTS"],
    drop: (item, monitor) => addCardComponentToBox(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addCardComponentToBox = (item) => {
    const arrOfCardsInBoard = SIDEBAR_ITEMS.filter((card) => card.id === item.id)
    console.log(arrOfCardsInBoard[0]);
    
    setBoard((board) => [...board, arrOfCardsInBoard[0]])
  }

  return (
    <div key={id} ref={dropRef} style={{width: "80rem", height: "20rem", border: isOver ? "3px solid green" : "3px solid red"}}>
    {
      board.map((card) => {
        if(card.component.name === "image"){
          return <Image/>
        }else{
          return <Button/>
        }
      })
    }
    </div>
  )
} 
export default Box;