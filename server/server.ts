import App from "./app";

const port = 5000
const database = 'mongodb://localhost:27017/blogs';
new App({port: port, db: database})