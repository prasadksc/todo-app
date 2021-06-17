import React, { Component } from 'react';
import ListItems from './listItems';
import './App.css';



class App extends Component {
  state = {
    items: [],
    currentitem: {
      text: '',
      key: ''
    }
  }

  handleInput = e => {
    this.setState({
      currentitem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentitem
    if (newItem.text !== '') {
      const newitems = [...this.state.items, newItem]
      this.setState({
        items: newitems,
        currentitem: {
          text: '',
          key: ''
        }
      })
    }
  }


  setItemUpdate = (text, key) => {
    const items = this.state.items.map(item => {
      if (item.key === key) {
        return item.text = text
      }
      this.setState({ items: items })
    })

  }



  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({ items: filteredItems })
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>What's a Plan for Today</h1>
          <form className="todo-form" onSubmit={this.addItem}>
            <input type="text" onChange={this.handleInput} value={this.state.currentitem.text} placeholder="Add a Todo..." />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setItemUpdate={this.setItemUpdate} />
      </div>
    );
  }
}

export default App;