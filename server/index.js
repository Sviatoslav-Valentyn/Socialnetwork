const express = require ('express');
const cors = require ('cors');

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(cors());

const userRouter = require('./routes/user.js');
const feedbackRouter = require('./routes/feedback.js');
const avatarRouter = require('./routes/avatar.js');
const photoRouter = require('./routes/photo.js');

app.use('/user', userRouter);
app.use('/feedback', feedbackRouter);
app.use('/avatar', avatarRouter);
app.use('/photo', photoRouter);

module.exports = app;