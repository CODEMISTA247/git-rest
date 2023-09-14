const port = 8000;
const exporess = require('express');
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }))








app.listen(port, () => console.log(`🎉Party on port: ${port}`))