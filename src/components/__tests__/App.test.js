import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { BrowserRouter as Router } from "react-router-dom";

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Router>
      <App />
    </Router>
  );
});

xit("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

xit("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
