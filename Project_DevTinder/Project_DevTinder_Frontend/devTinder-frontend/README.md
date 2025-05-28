## DevTinder

### Step ⇒

- Create Vite + React application using --- **< npm create vite@latest devTinder-fronteend -- --template react >**
- Remove unecessary code
- Install tailwindcss
- Along with tailwind we'll be using daisyUI
- Install daisyUi
- Now after installing daisyUi copy code of **nav bar** from daisyUi and paste it in **App.jsx** and inside nav-bar code base set **bg color to 300**
- Use ' **rafce** ' shorthand code snippet to generate a boilerplate for a functional component with export. [ **React Arrow Function Component Export** ]
- Create a **NavBar.jsx** seprate component file
- Install React Router for creating the routes. Use command -- **npm install react-router-dom**
- Create BrowserRouter > Routes > Route= /Body> > RouteChildren
- Create Outlet component in body component
- Create the Footer
- Create Login Page
- Install axios for API calls instead of fetch
- CORS ⇨ Install **CORS** in backend ⇨ add middleware to the configuration: origin, credentials: true
- Whenever we're making an API call using **axios** ⇨ { withCredentials: true } -- If we do not pass this property server will not send back the tokens to browser.
- Install redux-toolkit ⇨ [MustReadAbout_redux-tookit](https://redux-toolkit.js.org/tutorials/quick-start)
- Create redux-store inside the folder utils by the file_Name **appStore.jsx** ⇒ src / utils / appStore.jsx
- After creating store provide it to the application. Means wrap the whole code of root file **App.jsx** inside the component **< Provider store={appStore} > </ Provider>**. But first, **import {Provider} from "react-redux"**
- 


- Creating login page
