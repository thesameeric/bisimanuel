import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
export default app.listen(port, () => {
  console.log(`server started on port:: ${port}`);
});
