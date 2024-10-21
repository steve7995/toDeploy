
# VE3 Assigment Task management app
its a task management app when user on login can view different tasks and also can update them ,delete them and also create new tasks


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

