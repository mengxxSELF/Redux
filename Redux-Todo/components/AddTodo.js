import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.handleClick= this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={this.handleClick()}>
          Add
        </button>
      </div>
    );
  }

  handleClick() {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    let text ='nn'
    this.props.onAddClick(text);
    node.value = '';
  }
}
