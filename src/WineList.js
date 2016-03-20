import React from 'react';
import jQuery from 'jquery';

class WineList extends React.Component{
   constructor() {
      super();

      this.state = {
         winedatas: [{id: 0, name: "", description: "", origin:"", }]
      };
   }

   loadTheWineList(event){
      let component = this;

      jQuery.getJSON("http://winereviews.herokuapp.com/", function(jsondata){
         console.log(jsondata);

         component.setState({
            winedatas: jsondata
         });
      });
   }

      componentDidMount() {
       console.log("componentDidMount");
       this.loadTheWineList();
      }

   render(){
      return(
       <div>
         <h1>List of wine</h1>
         {this.state.winedatas.map(function(winedata, i) {
            console.log(winedata.id, 'index:' + i)
            return(
               //<WineItem Key={winedata.id} id={winedata.id} name={winedata.name} description={winedata.description} origin={winedata.origin} createdAt={winedata.created_at} updatedAt={winedata.updated_at} reloadTheWineListAfterDestroy={this.loadTheWineList.bind(this)} />
            )
         }, this)}
      </div>
      );
   }
}


export default WineList;
