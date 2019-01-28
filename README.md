# [Full-Stack Todo App](https://todo-node-react.herokuapp.com/)

## Features

- Able to create account and sign in.
- Able to create, read, update, and delete todos.
- Actions sync with database, so data is persistent.

## Tech Stack (notable mentions)

- React

  - create-react-app (boilerplate)
  - Redux (state management)
  - React Router
  - Ant Design (UI Library)
  - styled components (CSS-in-JS)
  - axios (fetch data from api)
  - React Cookies

- Node/Express

  - Postgres (DBMS)
  - Knex (SQL query builder)
  - Passport (authentication middleware)
  - Bcrypt (hash passwords)
  - jsonwebtoken

<!-- ## To-Do (no pun intended)

- Use redis to manage sessions.
- Use http-only cookies and remove React Cookie.
- Improve landing page.
- Change password is implemented on backend, but need to create views for it.
- Fix log-in/register modals.
  - Since it shares the same component as routed AuthForms, there are duplicate forms.
- Add password reset option.
- Implement more middleware to limit repeating code.
  - Implement synchronous redux actions: request, success, failure.
- Offline mode that will eventually sync to database.
  - Currently all-or-nothing response. If database connection cannot be established, or there is error, then there will be no client-side changes.
- Add loading screen while fetching from api.
- Use morgan/winston/etc for logging. -->

<!-- ## To run locally

1. Prerequisites:

   - Postgresql
   - Node

2. Change directory to directory of choice. In this example, I will choose Downloads directory. If you do not want to download the project in Downloads directory, replace it with your directory of choice.
3. In command line (such as Terminal), copy/paste/enter the following:

```
cd ~/Downloads && git clone https://github.com/kevinlee6/todo-fullstack.git && cd todo-fullstack && npm install && ./client npm install
```

4. I have not git-ignored my .env file for this project, as this project is for demonstration purposes. Replace values of DB, DB_NAME, DB_PASSWORD/DB_USER with your own postgres credentials as needed. -->
