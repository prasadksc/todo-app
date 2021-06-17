import React, { Component } from 'react';
import './listItems.css'
import { RiCloseCircleLine } from 'react-icons/ri';


class ListItems extends Component {
    render() {
        const { items, deleteItem, setItemUpdate } = this.props
        return items.map(item => (
            <div className="list" key={item.key}>
                <p> <input type="text" id={item.key} onChange={(e) => setItemUpdate(e.target.value, item.key)} value={item.text} />
                    <span> <RiCloseCircleLine
                        onClick={() => deleteItem(item.key)}
                        className='delete-icon'
                    /></span>
                </p>
            </div>
        ))
    }
}


export default ListItems;