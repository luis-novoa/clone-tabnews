const status = (request, response) => {
  response.status(200).json({ foo: "ã ê ü" });
};

export default status;
