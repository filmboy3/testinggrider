import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks if CommentBox is in there
  expect(div.innerHTML).toContain("Comment Box");

  // Cleanup
  ReactDOM.unmountComponentAtNode(div);
});
