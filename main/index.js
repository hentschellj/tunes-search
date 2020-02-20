import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from '../components/SearchApp';

function App() {
  return (
    <div>
      <SearchApp />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)