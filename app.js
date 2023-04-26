const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4100;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to Ronaldo School');
});

app.post('/webhook/studentAdded', (req, res) => {
    
   /* if (req.method === 'GET' && !req.is('json')) {
        return res.status(400).json({ message: 'Invalid Data' });
      }
    
      // Check if the secret token is provided in the request header
      const token = req.headers['CL-X-TOKEN'];
      if (!token) {
        console.log(token)
        return res.status(401).json({ message: 'Unauthenticate' });
      }
      else{*/
        let data = req.body;
      console.log("name: "+data.name);
      console.log("age: "+data.age);

    res.send('Webhook data recieved');
      //}
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
