const io = require("socket.io")(4000, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.emit("fromserver", `hello client ${data}`);
  });
});
