# Full-Stack Todo App

## Tech Stack (notable mentions)

- React

  - create-react-app (boilerplate)
  - Redux (state management)
  - React Router
  - Ant Design (UI Library)
  - styled components (CSS-in-JS)

- Node/Express

  - Postgres (DBMS)
  - Knex (SQL query builder)
  - Passport (authentication middleware)
  - Bcrypt (hash passwords)

## To run locally

1. Prerequisites:

   - Postgresql
   - Node

2. Change directory to directory of choice. In this example, I will choose Downloads directory. If you do not want to download the project in Downloads directory, replace it with your directory of choice.
3. In command line (such as Terminal), copy/paste/enter the following:

```
cd ~/Downloads && git clone https://github.com/kevinlee6/todo-fullstack.git && cd todo-fullstack && npm install && ./client npm install
```

4. I have not git-ignored my .env file for this project, as this project is for demonstration purposes. Replace values of DB, DB_NAME, DB_PASSWORD/DB_USER with your own postgres credentials as needed.
