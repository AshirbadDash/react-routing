import React from "react";
function Login() {
  return (
    <div>
      <body>
        <h1>WELCOME</h1>
        <form action="/login" method="post">
          <div class="headingsContainer">
            <h3>Please Login to Your Account</h3>
          </div>

          <div class="mainContainer">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Here"
              name="email"
              required
            />

            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password Here"
              name="password"
              id="password"
              required
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </body>
    </div>
  );
}
export { Login };
