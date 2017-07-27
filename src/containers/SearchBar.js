import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getWeatherActionCreator from "../actions/getWeatherActionCreator";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state
      .searchTerm},us&appid=0c0d5451b069323bb6170294b1655f20`;

    axios.get(url, response => {
      console.log(response);
    });
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
          <button
            onClick={this.props.getWeather}
            type="submit"
            className="btn btn-secondary"
          >
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather: getWeatherActionCreator }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
