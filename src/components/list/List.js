import React, { Component } from 'react';
import './List.css';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    const listClass = 'List';
    const itemClass = 'Item';

    return (
      <div className={listClass}>
        {data?.hits.map((item, index) => (
          <div className={itemClass} key={index}>
            <h3>📗Title: {item.title}</h3>
            <p>👤Author: {item.author}</p>
            <p>🔗URL:<a href={item.url} target='_blank' rel="noreferrer">{item.url}</a></p>
          </div>
        ))}
      </div>
    );

  }
}

export default List;