import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Data:[]
    }
  }
 
  componentDidMount = async() =>{
      
       const responce = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
      // console.log(responce.data);
       const Data =responce.data;
       this.setState({Data})
    
  }
  render(){
    const result = this.state.Data.map((d)=>{
      return d.title;
    })
    return (
    <div >
      <hr/>
      <div className="data">
     {result }
      </div>
      <hr/>
    </div>
  );
}
}
export default App;
