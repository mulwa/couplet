import * as functions from "firebase-functions";
import * as express from 'express';
import { deleteUserData } from "./controllers/userContoller";

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'root'
    });
});
app.post('/deleteUserData',deleteUserData);



exports.app = functions.https.onRequest(app);
