import React, { Component } from 'react';
import Map from './components/Map';
import Header from './components/Header';
import SearchQuery from './queries/SearchQuery';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider }  from 'react-apollo';
import { Property } from './components/Property';

const client = new ApolloClient({ uri : process.env.GRAPHQL_API_URL || 'http://localhost:4000/graphql' })

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      address: '',
      citystatezip: ''
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch( address , citystatezip ){
    this.setState({ address, citystatezip })
  }

  render() {
    const { address, citystatezip } = this.state

    return (
      <ApolloProvider client={client}>
        <div className="App">
            <header className="App-header">
              <Header onSearch={this.onSearch}/>
            </header>
            <div className="App-map">
              <SearchQuery address={address} citystatezip={citystatezip}>
                { result  => 
                    <React.Fragment>
                      <Map {...result}/>
                      <Property className="App-results" {...result}/>
                    </React.Fragment>
                  } 
              </SearchQuery>
            </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
