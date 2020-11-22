import React from "react";

const Page404 = () => {
  return (
    <section class="body-page">
      <div class="container">
        <div class="content">
          <h1 class="page404">404</h1>
          <h3 class="h3-404">Look like it's empty here!</h3>
          <p class="p-404">
            There are so many other interesting rooms that are much easier to be
            accessed, I bet. Enjoy them in
            <a href="#" title="">
              {" "}
              the box below
            </a>
          </p>
          <form class="navbar-form" role="search">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search page"
              />
            </div>
            <button type="submit" class="btn btn-default">
              SEARCH
            </button>
          </form>
          <p class="p-404 size">
            or go back to{" "}
            <a href="#" title="">
              Home Page{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page404;
