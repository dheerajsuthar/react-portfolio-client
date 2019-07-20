import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import Home from './pages/Home';
import Profile from './pages/Profile'
import './App.css';


const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      headers:{
        'x-hasura-admin-secret': 'neworder'
      }
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:userId" component={Profile}></Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
