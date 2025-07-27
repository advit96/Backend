const express = require('express');
const app = express();
const UserRoutes = require('./Routes/UserRoutes');

app.use('/Users' , UserRoutes);

app.listen(3000 , () => {
   console.log("server is running on port 3000");
});