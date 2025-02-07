const express = require('express');
const cookieParser = require('cookie-parser');

const connectDB = require('./connection');
const userRoutes = require('./routes/user.routes');
const PORT = 3000;
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
});
