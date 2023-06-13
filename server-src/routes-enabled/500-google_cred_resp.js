import Express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import verify from "../verify_google_token.js";

const router = Express.Router();

router.use('/google_cred_resp$',
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
    async (req, res) => {
        console.log(req.body);
        console.log(req.cookies);
        const payload = await verify(req.body.credential).catch(console.error);
        console.log(payload);
    }
);

export default router;
