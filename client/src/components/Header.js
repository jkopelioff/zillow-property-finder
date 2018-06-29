import React, {Component} from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/logo.png'
import './Header.css'
import SearchBar from './SearchBar';

export default class Header extends Component {

  static propTypes = {
    onSearch: PropTypes.func
  }

  render() {
    return (
      <React.Fragment> 
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SearchBar onSearch={this.props.onSearch}/>
      </React.Fragment>
    )
  }
}
