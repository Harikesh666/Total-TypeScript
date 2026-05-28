// CODE

type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  type: ButtonType;
};

let type: ButtonType = "button";

// TESTS

const buttonAttributes: ButtonAttributes = {
  type,
};
