const express = require('exress');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '.', 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '.', 'dist', 'index.html'));
});

app.listen(process.env.PORT || 4567, () => console.log('Running on Port 4567'));
