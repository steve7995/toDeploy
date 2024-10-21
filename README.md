
# VE3 Assigment Task management app
its a task management app when user on login can view different tasks and also can update them ,delete them and also create new tasks
deployedLink:https://frontend-yge8.onrender.com/

## API Reference

#### Get all tasks

```http
  GET /api/tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | fetches all the tasks present |

#### Get a particular task based on id

```http
  GET /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | get the task based on id|

#### CREATE NEW TASK 
```http
  POST /api/tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | create a new task |

#### UPDATE TASK

```http
  PUT /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | update the task based on id|

#### DELETE TASK
```http
  DELETE /api/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | delete the task based on id|

#### CREATE NEW USER
```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | register a new user |

#### LOGIN  USER

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to login the existing user|

#### LOGOUT  USER

```http
  GET /api/logout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | to logout  user|

#### FETCHING USER DATA WHEN PAGE GETS REFRESH
```http
  GET /api/refetch
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | verifies the jwt token and gets the user details |

flow:

first user must register and then followed by login he is redirected to the main page where he can handle tasks

![p1](https://github.com/user-attachments/assets/5c405f22-0f68-45f2-b785-0fcc81cab919)

![p2](https://github.com/user-attachments/assets/01922413-eabe-4665-8049-7a6903cfad28)

![task images](https://github.com/user-attachments/assets/44cb142d-736e-48fb-8ac4-5831c6601766)

Technologies Used:

React js ,tailwind css, moongo db , express js , render

Done by D.ANAND STEVEN CHRIS 
mrwritersteven@gmail.com
