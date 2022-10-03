import type { Component } from "solid-js";
import Location from "./components/Location";

const App: Component = () => {
  return (
    <div class="h-screen bg-ash-black p-24">
      <header>
        <Location name="Bad Guy's Dungeon" />
      </header>
    </div>
  );
};

export default App;
