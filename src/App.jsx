import React from "react";
import Grid from "./Grid";
import Grid2 from "./Grid2";

function App() {
  return (
    <div className="App text-white flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10">Text Pattern Grid</h1>
      <Grid2 />
    </div>
  );
}

export default App;
