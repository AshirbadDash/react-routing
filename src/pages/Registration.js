import React from "react";
import { Link } from "react-router-dom";
function Registration() {
  return (
    <div>
      <body>
        <header>
          <h1 class="h1">Welcome to Tunehub</h1>
          <h4>Register to get started</h4>
        </header>
        <main>
          <form action="register" method="post" autocomplete="off">
            <h5 class="req">
              Fields marked with an asterisk (*) are mandatory
            </h5>
            <label class="required" for="username">
              Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="enter username"
              required
              class="form-input"
            />
            <label class="required" for="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email address"
              required
              class="form-input"
            />
            <label class="required" for="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" enter password"
              required
              class="form-input"
            />

            <fieldset class="gender">
              <legend class="required">Gender:</legend>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
            </fieldset>

            <fieldset class="role">
              <legend class="required">Role:</legend>
              <input type="radio" id="admin" name="role" value="admin" />
              <label for="admin">Admin</label>
              <input type="radio" id="customer" name="role" value="customer" />
              <label for="customer">Customer</label>
            </fieldset>

            <label class="required" for="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="enter present address"
              required
              class="form-input"
            />
            <input type="submit" value="Register" class="form-input" />
            <input type="reset" value="Reset" class="form-input" />
          </form>
        </main>

        <footer class="footer">
          <div>
            <p class="logo">&copy; 2021 Tunehub</p>
          </div>
          <div>
            <a class="home" href="login">
              <input type="button" value="Login" />
              <Link to="/login">Login</Link>
            </a>
            <a class="home" href="home">
              <input type="button" value="Top" />
            </a>
          </div>
        </footer>
      </body>
    </div>
  );
}
export { Registration };
