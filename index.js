import  express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app =express();
const port =3000;

app.use(express.static(`${__dirname}/Public`));


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
});


app.listen(process.env.port || port, () => {
    console.log(`Server started on port ${port}`);
});
