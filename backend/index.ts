import express, {NextFunction, Request, RequestHandler, Response} from "express";
import {Length, IsString, Validate, validate} from "class-validator";
import cors from "cors";
import {plainToClass} from "class-transformer";

const path = require('path');
const app = express();

class RequestBody {
    @Length(1, 30)
    @IsString()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class ResponseBody {
    @IsString()
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}


// Enable cors to be able to reach the backend on localhost:8080 while running React.js in dev mode on localhost:3000
// You might want to disbale this on production.
app.use(cors());
app.use(express.json() as RequestHandler);

app.post('/api', async function(req: Request, res: Response) {
    let body = plainToClass(RequestBody, req.body as Object);
    let validationErrors = await validate(body);
    if (validationErrors.length == 0) {
        const responseBody: ResponseBody = new ResponseBody("Hello, " + body.name);
        res.contentType('application/json');
        res.status(200);
        res.send(responseBody);
    } else {
        res.sendStatus(400);
    }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.send("hi");
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    // console.log('Press Ctrl+C to quit.');
});