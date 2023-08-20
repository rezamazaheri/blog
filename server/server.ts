import App from "./app";

const port = 5000
const database = 'mongodb://127.0.0.1:27017/blogs';
new App({port: port, db: database})