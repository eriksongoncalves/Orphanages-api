import express from 'express';

import './database/connection';

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(3333);
