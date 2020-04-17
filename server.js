const app = require("express");
const http = require("http").Server(app);
const io = require("socket.io")(http);

let users = [];
let messages = [];
let index = 0;

io.on("connection", socket => {
    
    socket.emit('loggedIn', {
        users: users.map(s => s.username),
        messages: messages
    });

    socket.on('newuser', username => {
        console.log(`${username} has arrived at the party`)
        socket.username =username;
        users.push(socket);

        io.emit('userOnline', socket.username);
    });

    //disconnect
    socket.on("disconnect", () => {
        console.log(`${socket.username} has left the party`)
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log("listening on port ", process.env.PORT || 3000);
})