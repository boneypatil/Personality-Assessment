#!/usr/bin/env bash

function createNetworkIfNecessary() {
    echo "Checking for network..."
    docker network ls | grep "personality-assesment-local" >/dev/null
    if [[ ! $? -eq 0 ]]
    then
        echo "Installing network for personality-assesment-local containers..."
        docker network create personality-assesment-local
    fi
}

function startDependencies() {
    createNetworkIfNecessary
    docker run -d --rm --name=personality-assesment-mongodb --network=personality-assesment-local -p 27017:27017 mongo
}

function stopDependencies() {
    createNetworkIfNecessary
    docker ps | grep personality-assesment-mongodb
    if [[ $? -eq 0 ]]
    then
    createNetworkIfNecessary
        docker stop personality-assesment-mongodb
    fi
}
