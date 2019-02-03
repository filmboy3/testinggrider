import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  wrapped = mount(<CommentBox />);

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  // Force re-render
  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("empties the textarea when the input is submitted", () => {
  wrapped.find("form").simulate("submit");

  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
