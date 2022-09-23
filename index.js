import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import listingsRoutes from './routes/listings.js';
import authRoutes from './routes/AUTH.js';
import commentsRoutes from './routes/comments.js';

const app = express();
const __dirname = path.resolve();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/listings', listingsRoutes);
app.use('/auth', authRoutes);
app.use('/comments', commentsRoutes);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const DATABASE_URL =
  "mongodb+srv://plushbaby:yoobee2022@cluster0.xw1rqum.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `production stage is connected to MongoDB & is running on Port: http://localhost:${PORT}`
      )
    )
  )
  .catch((error) => console.log(`${error} production stage did not connect`));
