import React from 'react';
import WineList from './WineList'


class App extends React.Component {
  constructor (){
    super();
  }

    render() {
        return (
            <div className="todos-app">
            <WineList />
            </div>
        );
    }
}

export default App;
