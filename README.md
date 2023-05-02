# Front-End Steps

## INSTALLATION

- [] create a client react folder
- [] public/index.html --> import the Bootstrap css link after manifest

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />

- [] src -> create 2 folders: auth and booking
- [] sr/booking -> Home.js -> basic setup
- [] src/auth -> Login.js, Register.js -> basic setup
- [] install react-router-dom (v5) 
- [] arc/App.js -> import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
- [] import all created components (Home, Login, Register)
- [] basic router setup:

  function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Home />
        <Login />
        <Register />
      </Switch>
    </BrowserRouter>
  );
}

## NAVIGATION SETUP

- [] src/components -> TopNav.js 

import { Link } from "react-router-dom";
  const TopNav = () => {
    return (
      <nav className="nav bg-light d-flex justify-content-between">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </nav>
    );
  };

- [] import this component to the <BrowserRouter></BrowserRouter> in App.js:

  <BrowserRouter>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  

## REDUX SETUP

- [] npm i redux react-redux redux-devtools-extension
- [] src/index.js -> import:

  import { createStore, combineReducers } from "redux"; 
  import { Provider } from "react-redux";
  import { composeWithDevTools } from "redux-devtools-extension";

- [] create authReducer:

  const authReducer = (state = null, action) => {
    switch (action.type) {
      case "LOGIN":
        return {...state, ...action.payload};
      case "LOGOUT":
        return action.payload;
      default:
        return state;
    }
  }

- [] create rootReducer

  const rootReducer = combineReducers({
    user: authReducer,
  });

- [] create store:

  const store = createStore(rootReducer, composeWithDevTools());

- [] wrap the <App /> with <Provider>

  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>

- [] move authReducer and rootReducer into the new files in the src/reducers folder
      authReducer -> reducers/authReducer.js 
      rootReducer -> reducers/index.js (and make all the imports)


# THEN SETUP THE BACKEND AND COME BACK HERE



