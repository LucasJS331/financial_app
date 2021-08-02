const port = 3000;
const app = require("./app");

app.listen(port, ()=>{
    console.log("a aplicação está rodando na porta " + port);
});