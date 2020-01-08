import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(process.env.PORT)
    console.log('App is listing on port ' + PORT);
});