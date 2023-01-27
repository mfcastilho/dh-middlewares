// ************ Require's ************

const express = require('express');
const path = require('path');
const homeRoutes = require("./routes/homeRoutes");
const userLogs = require("./middlewares/userLogs");

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necessário para arquivos estáticos na pasta /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Definição da localização da pasta "views".

app.use(userLogs);


app.use(homeRoutes);



app.listen(4000, ()=>{
  console.log("O servidor está rodando na porta 4000");
})
