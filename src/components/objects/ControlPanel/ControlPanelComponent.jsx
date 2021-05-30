import React from "react";
import "./styles/ControlPanelComponent.css";
import AddTeamForm from '../formAddTeam/AddTeamForm'
class ControlPanelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }
  render() {
    return (
   
      <div>
        <div className="alignTitle">
          <h1>Control Panel</h1>
        </div>
        <div className="columnsMenu">
          <div className="centerForm">
          <h3>Add team</h3>
          <AddTeamForm/>
          </div>
          <div>H1</div>
        </div>
      </div>
  
    );
  }
}

export default ControlPanelComponent;
