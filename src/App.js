import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import _ from "underscore";
function ProfileCard() {
  return (
    <div className="card">
      <img
        src="https://dummyimage.com/300x300/999/fff"
        className="card-img-top"
      />
      <div class="card-body text-center">
        <h5 class="card-title">Username</h5>
        <p class="card-text">Bio</p>
      </div>
    </div>
  );
}

function MediaCard() {
  return (
    <div className="col-4 mb-4">
      <img
        src="https://dummyimage.com/300x300/999/fff"
        className="card-img-top"
      />
    </div>
  );
}

function MediaPage() {
  return (
    <div className="container">
      <HeadPanel />
      <div className="row">
        <div className="col-3">
          <ProfileCard />
        </div>
        <div className="col-9">
          <h5>Media Page</h5>
          <div className="row">
            {_.range(7).map(() => (
              <MediaCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterUser() {
  return (
    <div className="shadow-lg p-4">
      <h1>Registration form</h1>
      <form>
        <div className="form-group">
          <label className="lead" htmlFor="username">
            Username:
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                @
              </div>
            </div>
            <input
              className="form-control"
              id="username"
              placeholder="Enter Username"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="rpassword"
            placeholder="Re-enter Password"
          />
        </div>
        <input className="btn btn-dark" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

function HeadPanel() {
  return (
    <>
      <header className="shadow-lg mb-5">
        <nav className="navbar navbar-expand navbar-light bg-light d-flux align-content-center">
          <h1>Pixogram</h1>
          <div className="ml-auto">
            <button className="btn btn-outline-dark mr-2">Account</button>
            <button className="btn btn-outline-dark">Logout</button>
          </div>
        </nav>
      </header>
    </>
  );
}

function SignIn() {
  return (
    <div className="shadow-lg p-4">
      <h2>Enter Credentials</h2>
      <form>
        <div className="form-group">
          <label className="lead" htmlFor="username">
            Username:
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                @
              </div>
            </div>
            <input
              className="form-control"
              id="username"
              placeholder="Enter Username"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <input className="btn btn-dark" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

function SignInPage() {
  return (
    <div className="container">
      <HeadPanel />
      <SignIn />
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="container">
      <HeadPanel />
      <RegisterUser />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignInPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/media" component={MediaPage} />
    </BrowserRouter>
  );
}

export default App;
