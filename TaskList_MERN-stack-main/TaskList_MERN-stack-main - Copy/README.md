# Connecting backend and frontend

It is simple MERN project where you can learn how to connect backend and frontend with simple task list app. You will learn using axios and cors libraries to connect frontend with backend


## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** MongoDB


## Screenshots

![App Screenshot](https://github.com/satyamjaysawal/TaskList_MERN-stack/assets/108862706/1f114ad4-a3e0-45e2-a059-cb2d372b4eed)


## Run Locally

Clone the project

```bash
  git clone https://github.com/satyamjaysawal/TaskList_MERN-stack.git
```

### Add configurations for **Backend** 🖧
**1.** Create MongoDB database \
**2.** Create **.env** file then add mongodb connection url as:

```bash
  MONGO_URL = mongodb://localhost:27017/tasklist
```

**3.** Go to backend folder

```bash
  cd backend
```

**4.** Install dependencies

```bash
  npm install
```
**5.** Change **serverUrl** in **index.js** file to your custom url 
```bash
  const serverUrl = 4000
```
**6.** Start the server

```bash
  npm start
```

### Add configurations for **Frontend** 🖥 
**1.** Go to frontend folder

```bash
  cd frontend
```

**2.** Run:

```bash
  npm install
```

**3.** Change **backendUrl** in **App.js** 

```bash
  const backendUrl = 'http://localhost:4000/api'
```

**4.** Start the server

```bash
  npm start
```



