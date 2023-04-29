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

  -- mongoDB
  -- express
  -- node
  -- nodemon

If not you only need to do that:
```
  npm install
```
### Important 
  Be sure that you have mongoDB on port 27017, if not go to config files and change the route of mongoDB and set your route with the correct port

## Scripts
  ### Intall all dependencies
```
  npm install
```

### Run server
````
npm run dev
````

### Run tests
```
npm run test
```