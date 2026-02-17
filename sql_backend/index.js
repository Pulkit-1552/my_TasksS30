import dotenv from "dotenv";

dotenv.config();
import { initDatabase } from "./src/database/init.js";

const PORT = process.env.PORT || 3000;

await initDatabase();

app.listen(PORT , ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});

