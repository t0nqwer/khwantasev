# Project Setup

## Installation

This project uses several dependencies for development and production. To set up the project, install the necessary packages using npm.

### Install Required Dependencies

Run the following command to install the necessary production dependencies:

```sh
npm i zod winston pino-http pino ora nodemailer multer morgan http-status-codes helmet express-rate-limit express envalid dotenv cors @types/node @types/express
```

### Install Development Dependencies

Run the following command to install the necessary development dependencies:

```sh
npm i --dev @types/cors @types/hpp @types/morgan @types/multer @types/nodemailer concurrently nodemon ts-node typescript
```

## Project Dependencies

### Production Dependencies

- **zod** - Schema validation library
- **winston** - Logging library
- **pino-http, pino** - Lightweight and fast logging
- **ora** - Terminal spinner for CLI interactions
- **nodemailer** - Email sending utility
- **multer** - Middleware for handling file uploads
- **morgan** - HTTP request logger
- **http-status-codes** - Standardized HTTP status codes
- **helmet** - Security middleware for Express
- **express-rate-limit** - Rate limiting middleware
- **express** - Web framework for Node.js
- **envalid** - Environment variable validation
- **dotenv** - Loads environment variables from `.env`
- **cors** - Middleware for enabling CORS
- **@types/node, @types/express** - TypeScript definitions for Node.js and Express

### Development Dependencies

- **@types/cors** - Type definitions for CORS
- **@types/hpp** - Type definitions for HPP middleware
- **@types/morgan** - Type definitions for Morgan
- **@types/multer** - Type definitions for Multer
- **@types/nodemailer** - Type definitions for Nodemailer
- **concurrently** - Run multiple commands simultaneously
- **nodemon** - Automatically restarts the server on file changes
- **ts-node** - Execute TypeScript files directly
- **typescript** - TypeScript compiler

## Usage

To start the project in development mode, use:

```sh
npm run dev
```

For production mode:

```sh
npm start
```

## Environment Variables

Make sure to create a `.env` file and define necessary environment variables for proper project execution.

### .env Example

```
HOST="localhost"
PORT=3306
CORS_ORIGIN="http://localhost:3000"
COMMON_RATE_LIMIT_MAX_REQUESTS=100
COMMON_RATE_LIMIT_WINDOW_MS=60000
NODE_ENV="development"
```

## Package.json Configuration

Add the following configuration to your `package.json` file:

```json
{
  "name": "khwantasev",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
  "bin": {
    "khwantasev": "bin/install.mjs"
  }
}
```

### Explanation:

- **name**: Project name (e.g., `khwantasev`)
- **version**: Project version
- **main**: Entry point for the application
- **scripts**:
  - `build`: Compiles TypeScript to JavaScript
  - `start`: Runs the compiled JavaScript file
  - `dev`: Runs the development server using `nodemon`
- **bin**: Defines a command-line executable script (`khwantasev`)

## License

This project is licensed under [MIT License](LICENSE).
