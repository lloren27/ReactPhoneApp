import React, { Component } from 'react';
import PhoneLists from './PhoneLists';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <h2>Phones: </h2>
        <PhoneLists />
      </Container>
    );
  }
}

export default App;
