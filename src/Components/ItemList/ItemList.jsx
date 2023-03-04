import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {items} ) => {
  return (
    <div style={ {
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px 0"
    } } >
        
        {
            items.map( (element)=>{
                return <Item key={element.id} element={element} />
            } )
        }

    </div>
  )
}

export default ItemList