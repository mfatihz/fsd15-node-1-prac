// Suggested code may be subject to a license. Learn more: ~LicenseLog:2186922291.
const express = require('express');
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2830552266.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:475669188.
const router = require('./routes/routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});