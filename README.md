# NEWSPAPER BACKEND

## STRUCTURE:
  structure


    src

      config

        -- Files to config the enviroment to use, there are two
          -- test
          -- development
      controllers:
        -- Files with controllers function, the functions where it gets data, or remove or puts data to mongoDB
      middleware:
        -- auxiliars functions in these case to verify if there are no errors.
        -- In these case there are two one as I said on the previous paragraf and other (isPresentAtleastOne) to verify that there are almost one.
      model:
        -- Models and schemas of database
      routes:
        -- Routes of end-points to get, post, put or delete data.
        -- In these case, all end-points have checkers ('middlewares'), I useed express-validator to make a lot of validations
      db.js:
        -- file to config the conexion to db
      index.js:
        -- file to expose the server

    test:
      -- there some tests of the project to be sure that everything runs well

    bablerc: 
      -- some babel configuration to run well the enviroments for dev and test enviroment

## Configuration
Be sure please that you have evrithing istalled:

  - mongoDB
  - express
  - node
  - nodemon

If not you only need to do that:
```sh
  npm install
```
### Important 
  Be sure that you have mongoDB on port 27017, if not go to config files and change the route of mongoDB and set your route with the correct port

### End-points

#### GET/newspaper/all

  Returns all newspapers:
  

#### DELETE /newspaper/:id


  Delete a newspapaer that have the same provided id


  Response:
  ```json
  {
    "_id": "644e8ea6b545146a2068d151",
    "title": "Vue proyecto piloto",
    "image": "pepe por su casa",
    "abstract": "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.... Vue can be used in different ways ",
    "creation_date": "2018-08-05T12:12:44Z",
    "languages": [
        "en",
        "es",
        "fr",
        "ar"
    ],
    "publisher": "b8a34054-d836-4c5a-9801-682e11aeaaa4",
    "link": "https://www.britannica.com/place/Michigan",
    "__v": 0
}
  ```

  Not found response:
  ```json
  {
    "msg": "Not found newspaper with provided id"
  }
  ```

#### PUT /newspaper/:id

  Update a newspaper that have the same provided id
  Expected payload: !IMPORTANT: You should provide at least one of the properties :
  ```json
  {
    "title": "string"·
    "image": "string"
    "abstract:" "string",
    "languages": "Array of strings",
    "link":  "String",
    "creation_date": "Date represented as string"
  }
  ```
  You must not provide property "publisher", that property is not accepted to update it.

  Success response:
  ```json
  {
    "msg": "updated",
    "old": {
        "_id": "644e1ee2c3f45665af2789a6",
        "title": "Información sobre vue3 3",
        "image": "https://www.arsys.es/blog/file/uploads/2020/12/featured-vue3.jpg",
        "abstract": "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. ...  Depending on your use case, Vue can be used in different ways ",
        "creation_date": "2018-08-05T12:12:44Z",
        "languages": [
            "en",
            "es",
            "fr",
            "ar"
        ],
        "publisher": "58575174-57bd-4044-8a4a-19675d52a7c9",
        "link": "https://www.britannica.com/place/Michigan",
        "__v": 0
    }
}
  ```

  Response when not provide any property:
  ```json
  {
    "msg": "It is necessary to send at least one of the following properties",
    "properties": [
        "title",
        "image",
        "abstract",
        "languages",
        "link",
        "creation_date"
    ]
  }
  ```

  Not found response:
  ```json
  {
    "msg": "Not found newspaper with provided id"
  }
  ```

#### GET /newspaper/id/:id
  Returns the newspaper that have the provided id.
  ```json
  {
    "_id": "644e1ee2c3f45665af2789a6",
    "title": "Información sobre vue3 3",
    "image": "https://www.arsys.es/blog/file/uploads/2020/12/featured-vue3.jpg",
    "abstract": "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. ...  Depending on your use case, Vue can be used in different ways ",
    "creation_date": "2018-08-05T12:12:44Z",
    "languages": [
        "en",
        "es",
        "fr",
        "ar"
    ],
    "publisher": {
        "_id": "58575174-57bd-4044-8a4a-19675d52a7c9",
        "name": "Don Juan Manuel",
        "joined_date": "Sun Apr 30 2023 02:26:57 GMT+0200 (Central European Summer Time)",
        "__v": 0
    },
    "link": "https://www.britannica.com/place/Michigan",
    "__v": 0
  }
  ```

  Not found response:
  ```json
  {
    "msg": "Not found newspaper with provided id"
  }
  ```

#### POST /newspaper
  Create a newspaer with the provided data:
  ```json
    {
      "title": "string"·
      "image": "string",
      "abstract:" "string",
      "languages": "Array of strings",
      "link":  "String",
      "creation_date": "Date represented as string"
      "publisher":  "String"
  }
  ```

  Example of response: 
  ```json
  {
    "data": {
        "title": "Pruebas del proyecto",
        "image": "No image",
        "abstract": "Abstract body",
        "creation_date": "2018-08-05T12:12:44Z",
        "languages": [
            "en",
            "es",
            "fr",
            "ar"
        ],
        "publisher": "c7bf626e-9926-4e42-a55d-e1c7289932e3",
        "link": "https://www.britannica.com/place/Michigan",
        "_id": "6450027062c1d84b00ebe854",
        "__v": 0
    },
    "message": "Document created correctly"
    }
  ```

## Scripts
  ### Intall all dependencies
```sh
  npm install
```

### Run server
```sh
npm run dev
```

### Run tests
```sh
npm run test
```