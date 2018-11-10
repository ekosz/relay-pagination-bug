import React from "react";
import ReactDOM from "react-dom";

import ModernPagination from './Components/ModernPagination';
import CompatPagination from "./Components/CompatPagination";

const App = () => {
  return (
    <div style={{ display: 'flex', width: '900px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#ccc', flex: '1' }}>
        <h2>Modern</h2>
        <ModernPagination />
      </div>
      <div style={{ backgroundColor: '#aaa', flex: '1' }}>
        <h2>Compat</h2>
        <CompatPagination />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("index"));