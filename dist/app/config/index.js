"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
const port = process.env.PORT;
const database_username = process.env.DATABASE_USERNAME;
const database_password = process.env.DATABASE_PASSWORD;
const database_name = process.env.PRODUCTS_DATABASE;
const database_url = process.env
    .DATABASE_URL.replace("<USERNAME>", encodeURIComponent(database_username))
    .replace("<PASSWORD>", encodeURIComponent(database_password))
    .replace("<DATABASE_NAME>", encodeURIComponent(database_name));
exports.default = {
    port,
    database_url,
    database_username,
    database_password,
};
