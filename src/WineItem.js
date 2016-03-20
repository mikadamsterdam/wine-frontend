import React from 'react';
import jQuery from 'jquery';


class WineItem extends React.Component {
  constructor(){
    super();


    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.state({
      id: this.props.id,
      name:  this.props.name,
      description: this.props.description,
      origin: this.props.origin,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
      loading: !!!this.props.id
    });
  }


    updateName(newName) {
      console(newName)
      this.syncState({name:newName})
    }

    updateDescription(newDescription){
      console(newDescription)
      this
    }







}

export default WineItem;
