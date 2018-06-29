import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'

export default class SearchBar extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      citystatezip: ''
    }

    this.updateAddress = this.updateAddress.bind(this);
    this.updateCityStateZip = this.updateCityStateZip.bind(this);
    this.onSearch = this.onSearch.bind(this);
  };
  
  updateAddress(e) {
    this.setState({address: e.target.value});
  }

  updateCityStateZip(e) {
    this.setState({citystatezip: e.target.value});
  }

  onSearch(e) {
    e.preventDefault();
    this.props.onSearch({...this.state})
  }

  render() {
    return (
      <div className="searchBar">
        <form className="pure-form">
          <fieldset>
            <input type = "text" value={this.state.address} 
              onChange = {this.updateAddress} placeholder="Address"/>
            <input type = "text" value={this.state.citystatezip} 
              onChange = {this.updateCityStateZip} placeholder="City, State and Zip" />
            <button className="searchBtn pure-button pure-button-primary" 
              onClick={this.onSearch}>Search</button>
          </fieldset>
        </form>
      </div>
    )
  }
}