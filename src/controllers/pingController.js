function pingController(req, res) {
  console.log("Calling PIng Controller");
  return res.json({ message: "Hey Babes" });
}

module.exports = pingController;
