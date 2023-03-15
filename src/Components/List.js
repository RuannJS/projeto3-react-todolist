import React from 'react'

import ListItem from './ListItem'


function List(props) {
    return (
        <ul>
            {props.items.map(item => <ListItem key={item.id} onDone={props.onDone} onItemDeleted={props.onItemDeleted} item={item}></ListItem>)}
        </ul>

    )
}

export default List