# Welcome to my Marvel app! 👋

I created this application to practice React with TypeScript, SASS, Zustand, and React Router Dom v6. It simulates login and logout functionalities. Additionally, we configured public and private routes, applying custom hooks for user authentication and using Zustand to manage user state.

## The challenge

This app has been developed for the purpose of practicing typing events, typing requests, typing responses, typing hooks, typing components etc...

Your users should be able to:

- Search characters
- List characters
- View detail of characters

### Links

- Solution URL: [Github](https://github.com/jhosuapp/react-ts-api-marvel)

- Live Site URL: [Github Pages](https://jhosuapp.github.io/react-ts-api-marvel)
- Live Site URL: [Netlify](https://comfy-twilight-eb02bb.netlify.app)

## Installation

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/jhosuapp/react-ts-api-marvel.git

2. **Install Dependencies (Node version greater than 1.20.0 required):**: 
   ```bash
   npm install 

3. **Run Project:**: 
   ```bash
   npm run dev

## Deploy

1. **Build Project:**: 
   ```bash
   npm run build

2. **Build Project:**: 
   ```bash
   npm run deploy

## View the Application

Open your browser and visit  `http://localhost:3000` when server are started;

## Technologies Used

- React.js
- Typescript
- Sass

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
