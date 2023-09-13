const express= require('express');
const app = express();

const port =3000

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.listen(port,(err)=>{
    if (err) console.log(err);
    else console.log("server listening on port " + port);
})