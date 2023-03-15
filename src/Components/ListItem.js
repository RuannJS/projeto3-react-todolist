import React from 'react'
import Card from './Card'

function DoneImage(props) {
    if (props.done) {
        return (
            <img alt='done' src='./assets/undone.svg' width="25px"></img>
        )
    } else {
        return (<img alt='undone' src='./assets/done.svg' width="25px" ></img >
        )
    }
}


function ListItem(props) {
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img alt='bin' src='./assets/bin.svg' width="25px"></img></button>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImage done={props.item.done}></DoneImage></button>
                </div>
            </Card>
        </li>)
}


export default ListItem