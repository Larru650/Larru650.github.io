import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Albert Administration</h1>
      <p>Trying to master React</p>
      <a href="/about">About</a>
    </div>
  );
}

// Default allows the importers to rename the module. There can onl be one default export per module.
export default HomePage;
