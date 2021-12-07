const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const blocksRouter = require('./routes/blocks');
const transactionsRouter = require('./routes/transactions');
const walletsRouter = require('./routes/wallets');

app.use('/blocks', blocksRouter);
app.use('/transactions', transactionsRouter);
app.use('/wallets', walletsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
