import  express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app =express();
const port =3000;

app.use(express.static(`${__dirname}/public`));


app.get("/",(req,res)=>{
    res.sendfile(`${__dirname}/views/index.html`);
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
