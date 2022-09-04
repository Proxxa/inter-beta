module.exports = {
  name: 'echo',
  type: 1,
  desc: "A general NOOO command.",
  options: [
    {
      type: 3,
      name: 'text',
      description: 'Text to echo',
      required: true,
      min_length: 1,
      max_length: 2000
    }
  ],

  
  exec: (req, res) => {
    res.statusCode = 200;
    const respond = JSON.stringify({
      type: 4,
      data: {
        content: req.body.data.options[0].value
      }
    })


    console.log(req.body.data.options);
    res.end(Buffer.from(respond));
  }

}