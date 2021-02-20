const express = require('express')
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const dev = app.get('env') !== 'production';

const PORT = process.env.PORT || 3000;

if (!dev) {
  // app.disable('x-powered-by');
  // app.use(express.static(path.resolve(__dirname, 'build')));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  // })
}

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// })
app.post('/auth', (req, res) => {
  console.log('auth');
  res.send('Auth');
})


server.listen(PORT, err => {
  if (err) throw err;

  console.log('Server is running...');
})