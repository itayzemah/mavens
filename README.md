## Server

1. Go to the _server_ directory `cd server/`
2. Run the following commands to start the server:

- `docker run --env=POSTGRES_PASSWORD=123456 -p 5432:5432 --runtime=runc -d --name pg postgres:latest`
- `npm install`
- `npm run migrate:dev`
- `npm run dev`

3. Every change of entity structure in the `prisma.schema` file, make sure to run `npm run migrate:dev`.

## Client

1. cd into the `client` directory
2. Run the following commands to start the client:
3. create an `.env` file and add `VITE_TIMEOUT_IN_MS` with the relevant timeout number in milliseconds

- `npm install`
- `npm run dev`

## What do we have?

1. A TS Node server running on port `8091`
   - Can be changed in the `nodemon.json` file.
2. A "postgresql" Docker running on port `5432`
   - Can be change in the docker run command and also in the `nodemon.json` file.
3. A React Client app running on port `5173`
