import React from 'react';
import TableContainer from './TableContainer';
import {DEFAULT_STATE} from '../constants';

class App extends React.Component {
  render() {
    const CURRENT_PLAYER_ID = 0;

    return (
      <div className="App">
        <TableContainer gameState={DEFAULT_STATE} currentPlayerID={CURRENT_PLAYER_ID} />
      </div>
    );
  }
}

export default App;
