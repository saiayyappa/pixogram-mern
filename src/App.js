import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import _ from "underscore";

function ProfileCard() {
  return (
    <div className="card">
      <img
        alt=""
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
        alt=""
        src="https://dummyimage.com/300x300/999/fff"
        className="card-img-top"
      />
    </div>
  );
}

function Update() {
  return (
    <>
      <div className="shadow-lg p-4">
        <BrowserRouter>
          <ul className="nav nav-pills mb-4">
            <li className="nav-item">
              <Link
                className="nav-link text-secondary"
                to="/settings/update/username"
              >
                Update Username
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-secondary"
                to="/settings/update/password"
              >
                Update Password
              </Link>
            </li>
          </ul>
          <Route path="/settings/update/username" component={Notfound} />
          <Route path="/settings/update/password" component={Notfound} />
        </BrowserRouter>
      </div>
    </>
  );
}

function Followers() {
  return (
    <>
      <div className="row">
        {_.range(3).map(() => (
          <MediaCard />
        ))}
      </div>
    </>
  );
}

function Followings() {
  return (
    <>
      <div className="row">
        {_.range(2).map(() => (
          <MediaCard />
        ))}
      </div>
    </>
  );
}

function Blocked() {
  return (
    <>
      <div className="row">
        {_.range(4).map(() => (
          <MediaCard />
        ))}
      </div>
    </>
  );
}

function Settings() {
  return (
    <>
      <div className="container">
        <HeadPanel />
        <div className="row">
          <div className="col">
            <BrowserRouter>
              <ul className="nav nav-pills mb-4">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/settings/update"
                  >
                    Update User Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/settings/followers"
                  >
                    Followers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/settings/followings"
                  >
                    Followings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/settings/blocked"
                  >
                    Blocked users
                  </Link>
                </li>
              </ul>
              <Route path="/settings/update" component={Update} />
              <Route path="/settings/followers" component={Followers} />
              <Route path="/settings/followings" component={Followings} />
              <Route path="/settings/blocked" component={Blocked} />
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

function UploadFile() {
  return (
    <>
      <div className="container">
        <HeadPanel />
        <div className="row">
          <div className="col-3">
            <ProfileCard />
          </div>
          <div className="col-9">
            <h5>Upload Files</h5>
            <img alt="" className="mb-4" width="100%" height="350px" />
            <form>
              <div class="card-text d-flex mb-2">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="validatedCustomFile"
                    required
                  />
                  <label class="custom-file-label" for="validatedCustomFile">
                    Choose file...
                  </label>
                  <div class="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <button type="submit" class="btn btn-outline-dark ml-2">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
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
            {_.range(8).map(() => (
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

function Notfound() {
  return <h1>Page not found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/media" component={MediaPage} />
        <Route path="/upload" component={UploadFile} />
        <Route path="/settings" component={Settings} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
