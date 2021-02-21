# BUGGY

The aim of the application is to maintain an efficient bug reporting system by receiving reports from clients and fixing them.The app allows clients to report bugs to the admin and admin handles processes in fixing the bug by assigning the task to his employees.

### How to access app locally

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

## Technologies and libraries used

- React
- Node + Express
- MongoDB
- React icons
- Sass
- Heroku

## Deployed on Heroku

## Collaborators

Bishal Aryal

- [LinkedIn Profile](https://www.linkedin.com/in/bisarl/)

Florence Anipa

- [LinkedIn Profile](https://www.linkedin.com/in/florence-mawu-femo-anipa/)
