import express from 'express';
const app = express();
// const port = 5000;


import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";

import cors from "cors";
import cookieParser from "cookie-parser";
//middlewares
app.use(express.json());
app.use(cors( ))
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);




const server = app.listen(54793,() => {
console.log("Api Working!")
const port = server.address().port;
  console.log(port);
// console.log(`Server started on port ${port}`);
});