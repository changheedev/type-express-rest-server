import app from '@/app';

const port: string = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
