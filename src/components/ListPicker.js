import React from 'react';

class ListPicker extends React.Component {

  goToList(event) {
    event.preventDefault();

    const listId = this.listInput.value;
    console.log(this);
    this.context.router.transitionTo(`/list/${listId}`);
  }

  render() {
    return (
      <form className="list-selector" onSubmit={(e) => this.goToList(e)}>
        <h2>Please Enter A List</h2>
        <input type="text" required placeholder="List Name" ref={(input) => { this.listInput = input}}/>
        <button type="submit">Visit List →</button>
      </form>
    )
  }
}

ListPicker.contextTypes = {
  router: React.PropTypes.object
}

export default ListPicker;
