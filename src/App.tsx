import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Player, DefaultUi, Hls } from "@vime/react";

function App() {
  return (
    <div className="App">
      <Player controls={true}>
        <DefaultUi />
        <Hls
          version="latest"
          config="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          poster="/media/poster.png"
        >
          <source data-src="/media/index.m3u8" type="application/x-mpegURL" />
        </Hls>
      </Player>
    </div>
  );
}

export default App;
