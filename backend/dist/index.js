"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var cors_1 = __importDefault(require("cors"));
var fs = __importStar(require("fs-extra"));
var fs_1 = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var RequestBody = /** @class */ (function () {
    function RequestBody(name) {
        this.name = name;
    }
    __decorate([
        (0, class_validator_1.Length)(1, 30),
        (0, class_validator_1.IsString)()
    ], RequestBody.prototype, "name", void 0);
    return RequestBody;
}());
var ResponseBody = /** @class */ (function () {
    function ResponseBody(message) {
        this.message = message;
    }
    __decorate([
        (0, class_validator_1.IsString)()
    ], ResponseBody.prototype, "message", void 0);
    return ResponseBody;
}());
// Enable cors to be able to reach the backend on localhost:8080 while running React.js in dev mode on localhost:3000
// You might want to disbale this on production.
app.use((0, cors_1.default)());
app.use(express.json());
// app.post('/api', async function(req: Request, res: Response) {
//     let body = plainToClass(RequestBody, req.body as Object);
//     let validationErrors = await validate(body);
//     if (validationErrors.length == 0) {
//         const responseBody: ResponseBody = new ResponseBody("Hello, " + body.name);
//         res.contentType('application/json');
//         res.status(200);
//         res.send(responseBody);
//     } else {
//         res.sendStatus(400);
//     }
// });
app.post("/enterData", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var stringify;
        return __generator(this, function (_a) {
            stringify = JSON.stringify(req.body);
            fs.writeFileSync("./persistence/" + req.body.date, stringify);
            res.send("hello");
            return [2 /*return*/];
        });
    });
});
app.use(express.static(path.join(__dirname, 'build')));
// app.get("/", (req, res) => {
//     res.send("hi");
// })
app.get("/getData/01-21-2024", function (req, res) {
    res.json(JSON.stringify((0, fs_1.readFileSync)('./persistence/01-24-2024')));
    console.log(res.json);
    console.log("sending hi");
});
// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening on port ".concat(PORT));
    // console.log('Press Ctrl+C to quit.');
});
