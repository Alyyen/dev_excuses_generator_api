# Dev Excuses Project

## Introduction
### Description
This project is a generator of excuses for developers. It will fetch an excuse thanks to a related http_code. 
Once showed, the excuse will be stored into the local storage in order to not be displayed in the future. 
The project also allow a user to add new excuses.

### Technologies
The project includes a **NestJS** api and a **NextJS** client available on Github.

### Repositories
* Client repository : [Github](https://github.com/Alyyen/dev_excuses_generator_client)
* Api repository : [Github](https://github.com/Alyyen/dev_excuses_generator_api)

## Project setup

First, add a **.env** file with the provided variables from the **.env.example**.

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## About the database
The database is a mongo cluster, a script has been created to add datas from **src/scripts/excuses/excuses.json**.
To run script : `npm run seed` 

## See website
The website is deployed via Railway and Vercel.
* 🚀  [Railway](https://devexcusesgeneratorapi-production.up.railway.app)
* 🚀  [Vercel](https://dev-excuses-generator-client.vercel.app/)

#### Thank you
© Alyssia Colomar, 2024