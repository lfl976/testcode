export const Button = () => {
  return document.createElement("button");
  console.log(12);
};

export const Link = () => {
  return document.createElement("a");
};

export const Heading = (level) => {
  return document.createElement("h" + level);
};
