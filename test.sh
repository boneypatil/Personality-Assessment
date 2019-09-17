#!/usr/bin/env bash

npm install

docker run                  \
    --rm                    \
    --name=personality-assesment-service-test       \
    --env "APP_HOST=localhost" \
    --env "APP_PORT=8092" \
    --env "MONGO_DB_NAME=stubed" \
    --env "MONGO_DB_URL=stubedb" \
    -v "${PWD}":/ps \
    -w "/ps"  \
    -p 8093:8092 \
    node:9.11.2-alpine  \
    npm run test
