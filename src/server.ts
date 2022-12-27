import app from './app';
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(process.env.PORT)
    console.log('App is listing on port ' + PORT);
});





