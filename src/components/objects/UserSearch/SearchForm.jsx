import React from "react";
import AlertSnack from "./AlertSnack";
import UserSearchInput from "./UserSearchInput";
import UserGrid from "./UserGrid";
import UserCard from "./UserCard";
import githubFetch from "../../functions/fetch.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./styles/SearchForm.css";

class UserSearch extends React.Component {
  state = {
    open: false,
    alertMessage: "",
    dataFilled: [],
    repos: [],
    loading: false,
  };
  cleanState = () => {
    this.setState({
      open: false,
      alertMessage: "",
      dataFilled: [],
      repos: [],
      loading: false,
    });
  }
  componentDidMount() {
    this.cleanState();
  }

  searchUser = async (user) => {
    if (user !== "") {
      try {
        this.setState({ ...this.state, loading: true });
        let dataFilled = await githubFetch.github.readUser(user);
        let repos = await githubFetch.github.read(dataFilled.repos_url);
        this.setState({ ...this.state, dataFilled, repos, loading: false });
      } catch (error) {
        this.cleanState();
        this.sendAlert("An error has ocurried.");
      }
      return;
    }
    this.sendAlert("Please add an user for the search");
  };
  sendAlert = (msg) => {
    this.setState({ ...this.state, open: true, alertMessage: msg });
  };

  handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ ...this.state, alertMessage: "", open: false });
  };
  render() {
    return (
      <div className="responsivePattern">
        <UserSearchInput searchUser={this.searchUser} />
        {this.state.open && (
          <AlertSnack
            msg={this.state.alertMessage}
            open={this.state.open}
            handleCloseAlert={this.handleCloseAlert}
          />
        )}
        <div className="filledData">
          {this.state.loading ? (
            <CircularProgress />
          ) : (
            this.state.repos.length !== 0 && (
              <div className="infoContainer">
                <div className="infoSeparation">
                  <UserCard
                    data={this.state.dataFilled}
                    repos={this.state.repos}
                  />
                </div>
                <div className="infoSeparation">
                  <UserGrid repos={this.state.repos} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
