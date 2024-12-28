# `E2 E-commerce Mini Backend`

#### In order to run the app locally

- please create a `.env` file and place with values these variables - `PORT` , `DATABASE_URL` , `DATABASE_USERNAME` , `DATABASE_PASSWORD`, `PRODUCTS_DATABASE`
- run command `npm i` or `yarn` according to the choice to install all the dependency packages
- the to run the app use

```bash
npm run dev
or
yarn dev
```

#### APP building for production command

```bash
"build": "tsc && xcopy public dist\\public /E /I /Y",
```

command explanation:

- /E: Copies all directories and subdirectories, including empty ones.
- /I: Assumes the destination is a directory if it doesn’t exist.
- /Y: Suppresses prompts to overwrite files.
