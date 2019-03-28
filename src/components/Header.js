import React from 'react';
console.log(this);
const Header = (props) => {
    return (

      <header className="top">
        <h1>Vulnerable Republicans 2018</h1>
        <div>{props.listId}</div>
      </header>
    )
}

export default Header
