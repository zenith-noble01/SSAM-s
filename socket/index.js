const app = require("express")();
const socket = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(socket, {
  origin: "*",
  method: ["GET", "POST"],
});

app.use(cors());
app.get("/", (req, res) => {
  res.send(`server is available on ${PORT}`);
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("Callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

const PORT = process.env.PORT || 5000;

socket.listen(PORT, () => console.log(`sever running on Port ${PORT}`));
