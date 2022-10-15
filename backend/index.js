const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

const UsersRoutes = require('./routes/users.routes');
app.use('/', UsersRoutes)

const InformationsRoutes = require('./routes/informations.routes');
app.use('/', InformationsRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})