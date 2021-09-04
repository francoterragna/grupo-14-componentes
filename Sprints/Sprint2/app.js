let express = require ('express');
let app = express();

let path = require('path');
app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"));
app.use(express.static('./public'));

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html'))) 