import React from "react";
function Index() {
  return (
    <body>
      <header>
        <h1>TUNEHUB</h1>
      </header>

      <div class="container">
        <button class="button-52" onclick="location.href='login'">
          LOGIN
        </button>
        <button class="button-52" onclick="location.href='registration'">
          REGISTER
        </button>
      </div>
    </body>
  );
}
export { Index };
