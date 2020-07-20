const express = require('exress');
const app = express();
app.get('*', (req, res) => res.sendFile(__dirname, 'client', 'index.html'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running  on port ${PORT}`));
