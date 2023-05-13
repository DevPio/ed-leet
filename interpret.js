const interpret = (command = "") => {
  const regex = /\(\)/g;

  command = command.replace(regex, "o");
  command = command.replace(/\(|\)/g, "");

  return command;
};
