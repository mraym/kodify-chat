# Kodify Chat

## Status

I couldn't finish and now I have to go to Seville :(

Had trouble with:

- Once second user replies to the chat, all chat bubbles turn green

The main files are:

For the React client app:
- https://github.com/mraym/kodify-chat/blob/master/kodify-chat-client/src/App.js

For the Socket.IO server app:
- https://github.com/mraym/kodify-chat/blob/master/socket-io-server/server.js

## Setup

1. Install create-react-app
```
npm install -g create-react-app
```

2. Install packages
```
npm install express --save
npm install socket.io --save
```

## Start the server

This will start the server on port 8890
```
cd socket-io-server
node server.js
```

## Start the client

This will start the web app client on port 3000

```
cd kodify-chat-client
npm start
```

