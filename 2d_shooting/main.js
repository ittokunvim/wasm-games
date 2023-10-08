import "./restart-audio-context.js";

import init from './wasm/2d_shooting.js';

init().catch((err) => {
  if (!err.message.startsWith("Using exceptions for control flow,")) {
    throw err;
  }
});
