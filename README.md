# bugTracker

```
create .env file in the root folder and add

PORT = 5000
MONGODB_URL =
JWT_KEY=
```

```
if you are using npm, modify package.json in your root folder

 "scripts": {
    "server": "nodemon app.js",
    "client": "cd client && npm start",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```
