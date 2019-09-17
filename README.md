# Personality Assesment Service
Store Personality Assesments

## Service Architecture:

* Node.js Epxress backend.
* Mongodb

## Build Steps:
./start.sh

## Run Tests:
./test.sh


## Environment Variables:

1.  APP_HOST = **localhost**
2.  APP_PORT = **8090**
3.  MONGO_DB_NAME = **MONGO_DB_NAME**
4.  MONGO_DB_URL = **MONGO_DB_URL**

## Ports Used:

1.  **8090**
2.  **27017**

## Populate MongoDB

Following endpoint will populate the DB with categories and questions

GET - `/category/question/populate`

# APIs
**1. Get categories list**

GET - `/category`

```json
[
  {
    "_id": "hard_fact",
    "name": "hard_fact"
  },
  ...
]
```
**2. Get Questions list**

GET - `/question`

```json
[
  {
    "question_type": {
      "options": [
        "male",
        "female",
        "other"
      ],
      "type": "single_choice"
    },
    "_id": "5d7e3a25dddb33ce5bc472af",
    "question": "What is your gender?",
    "category": "hard_fact"
  },
  ...
]
```

**2. Get Categories with Question**

GET - `/category/questions`

```json
{
  "categories": [
    "hard_fact",
    "lifestyle",
    "introversion",
    "passion"
  ],
  "questions": [
    {
      "question_type": {
      "options": [
      "male",
      "female",
      "other"
      ],
      "type": "single_choice"
      },
      "_id": "5d7e3a25dddb33ce5bc472af",
      "question": "What is your gender?",
      "category": "hard_fact"
      },
    ...
  ]
}
```