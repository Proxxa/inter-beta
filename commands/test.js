module.exports = {
  name: 'test',
  type: 1,
  desc: "A general tester.",
  options: [],
  
  exec: (req, res) => {
    res.statusCode = 200;
    const respond = JSON.stringify({
      type: 4,
      data: {
        content: "TEST, WOO!"
      }
    })
    res.end(Buffer.from(respond));
  }
}