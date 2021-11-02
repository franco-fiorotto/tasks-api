## Installation & Local Run

1. `npm install`
2. `npm start`

### `npm start`

Runs the app in the development mode.\

### Usage

Make a GET request to [http://localhost:3001/v1/task](http://localhost:3001/v1/task) to view the default response.

Replace {custom_number} with a number to retrieve the amount of data you want [http://localhost:3001/v1/task?quantity={custom_number}](http://localhost:3001/v1/task?quantity={custom_number})?

Make a PUT request to [http://localhost:3001/v1/task/{id}](http://localhost:3001/v1/task) with the body sample { isDone: true } to log a response in the console.
