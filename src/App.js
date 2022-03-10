import React from 'react';
import Users from './users/Users';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <LoadHeaderName />
        </h1>
        <Users title="List of Users">Test</Users>
      </div>
    );
  }
}
function LoadHeaderName() {
  return <div>Hello Users App</div>;
}
export default App;
