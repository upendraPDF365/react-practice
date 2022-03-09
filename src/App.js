import React from "react";
import "./style.css";

class App extends React.Component{
  render(){
    return (<div><App1 />Hello React</div>);
  }
}
class App1 extends React.Component{
  render(){
    return(<div>Heelo 2</div>)
  }
}
export default App;