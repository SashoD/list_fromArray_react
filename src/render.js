import React from "react";

function listRendering() {
    let list = [
        {
            id: 1,
            title: 'Item1',
        },
        {
            id: 2,
            title: 'Item2',
        },
        {
            id: 3,
            title: 'Item3',
        },
        {
            id: 4,
            title: 'Item4',
        },

    ]

    return (
        <div className="container">
            {list.map((item, index) => {
                return <li key={index} className={item.id % 2 ? 'red' : 'blue'}>{item.title}</li>
            })}
        </div>
    )
}

export default listRendering