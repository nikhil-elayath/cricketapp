import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { getSearch } from "../../actions/SerachAction";
import { connect } from "react-redux";

export class Navbar extends Component {
  state = {
    active: true,
    searchInput: "",
  };

  handleSearchInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleHamburgerClick = e => {
    e.target.className = { display: "none" };
    console.log("event", e.target.className);
  };
  handleEnter = e => {
    console.log("from handle enter function");
    let search_term = {
      search: this.state.searchInput,
    };
    console.log("STATE VALUE", search_term);
    if (e.key === "Enter") {
      console.log(this.props);
      this.props.getSearch(search_term, this.props.history);
      console.log("search history", this.props.search);

      console.log("hit enter");
    }
  };
  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    let search_term = {
      search: this.state.searchInput,
    };
    this.props.getSearch(search_term, this.props.history);
  };

  render() {
    console.log(this.state.active);

    return (
      <div className="nav-parent">
        <nav>
          <Link className="link" to="/">
            <span className="nav-brand">CricketAlpha</span>
          </Link>
          <div className="nav-links">
            <ul>
              <Link className="link" to="/matches">
                <li>Matches</li>
              </Link>
              <Link className="link" to="/teams">
                <li>Teams</li>
              </Link>
              <Link className="link" to="/players">
                <li>Players</li>
              </Link>
              <Link className="link" to="/stats">
                <li>Stats</li>
              </Link>
              <li className="no-li-hover">
                <input
                  name="searchInput"
                  className="search-box"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInputChange}
                  placeholder="Search for Team or Player"
                  // onKeyDown={this.handleEnter}
                  onChange={this.OnChange}
                />
                {/* {this.props.search.map(search => (
									<div
										className="singlePlayerDiv"
										onKeyDown={() => {
											this.props.history.push(
												"/playerInfo/" +
													search[0]["player_id"]
											);
										}}
									></div>
								))} */}
                {/* <button
									className="search-button"
									onChange={this.OnChange}
									onClick={this.onSearchButtoWnClcik}
								>
									Search
								</button> */}

                <div>
                  <div
                    className="search-result"
                    style={{
                      display: this.state.searchInput ? "block" : "none",
                    }}
                  >
                    {this.props.search.length != 0
                      ? this.props.search.player.length != 0
                        ? this.props.search.player.map(mapped_search => (
                            <div>
                              <div className="search-suggestion">
                                <Link
                                  to={{
                                    pathname:
                                      "/playerInfo/" + mapped_search.player_id,
                                    // state:{
                                  }}
                                >
                                  {mapped_search.player_name}
                                </Link>
                              </div>
                            </div>
                          ))
                        : null
                      : null}

                    {this.props.search.length != 0
                      ? this.props.search.team.length != 0
                        ? this.props.search.team.map(mapped_search => (
                            <div>
                              <div className="search-suggestion">
                                <Link
                                  to={{
                                    pathname:
                                      "/teamdetails/" + mapped_search.team_id,
                                  }}
                                >
                                  {mapped_search.team_name}
                                </Link>
                              </div>
                            </div>
                          ))
                        : null
                      : null}
                  </div>
                </div>
              </li>
              <Link className="link" to="/login">
                <i className="fas fa-user"></i>
              </Link>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.SearchReducer.search,
});

export default connect(
  mapStateToProps,
  { getSearch }
)(Navbar);
