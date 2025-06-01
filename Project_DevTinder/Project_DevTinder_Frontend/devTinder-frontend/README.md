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
- Addd redux devtool extension on chrome
- Login and see if the data is coming properly in redux store
- NavBar should update as soon as the user logs in.
- Refactor the code to add constants file + create components folder
- We need to write the logic for if user is not loged in, the user cannot access other routes
- If token is not present redirect user to login page
- Build logout feature
- Get the feed and add feed in the redux store
- Build the UserCard on feed page
- Build EditProfile page -- Create another component **EditProfile.jsx**
- Build functionality for notification or toast after editing the profile by using DaisyUI inside **EditProfile.jsx**
- Creating login page
- Create all connection page --- where i can see my all connections
