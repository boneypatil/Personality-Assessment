#!/usr/bin/env bash

npm install

./start-dependencies.sh

docker run                  \
    --rm                    \
    --name=personality-assesment       \
    --env "APP_HOST=localhost" \
    --env "APP_PORT=8090" \
    --env "MONGO_DB_NAME=personality-assesment-db" \
    --env "MONGO_DB_URL=mongodb://personality-assesment-mongodb:27017/personality-assesment-db" \
    --network=personality-assesment-local \
    -v "${PWD}":/ps \
    -w "/ps"  \
    -p 8092:8090  \
    node:9.11.2-alpine \
    npm run dev
