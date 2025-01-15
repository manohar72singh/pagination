import React from 'react'

export default function ShowData({itemToDisplay}) {
  return (
    <div>
      {itemToDisplay && itemToDisplay.length > 0
        ? itemToDisplay.map((item, index) => {
            return (
              <h3 key={item.id}>
                {item.id} {item.title}
              </h3>
            );
          })
        : ""}
    </div>
  )
}
