import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather as fetchWeatherActionCreator } from "../actions/fetchWeatherActionCreator";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="input-group">
        <input
          className="form-control"
          onChange={this.onChangeHandler}
          placeholder="Search for a City"
          value={this.state.searchTerm}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWeather: fetchWeatherActionCreator },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
