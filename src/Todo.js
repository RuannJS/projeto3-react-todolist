import React, { useState } from 'react'
import './Todo.css'
import List from './Components/List'
import CreateForm from './Components/CreateForm'
import Item from './Components/Item'
import Modal from './Components/Modal'


function Todo() {

    const [showModal, setShowModal] = useState(false)

    const [items, setItems] = useState([])


    function onAddItem(text) {

        let newItem = new Item(text)

        setItems([...items, newItem])
        onHideModal()
    }

    function onItemDeleted(item) {

        let filteredItems = items.filter(it => it.id !== item.id)

        setItems(filteredItems)
    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }

            return it
        })

        setItems(updatedItems)

    }

    function onHideModal(event) {

        setShowModal(false)
    }

    return (
        <div className="container fontFaceGm">
            <header className='header'>
                <h1>Todo</h1>
                <button onClick={() => { setShowModal(true) }} className='addButton'>
                    +
                </button>
            </header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}>
                <CreateForm onAddItem={onAddItem}></CreateForm>
            </Modal>
        </div>
    )
}

export default Todo