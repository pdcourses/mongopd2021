const { Router } = require('express');
const userRouter = require('./routers/userRouter');
const router = Router();
router.use('/users', userRouter);
module.exports = router;
