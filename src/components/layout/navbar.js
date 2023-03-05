import React from "react";

const Navbar = () => {

    return (
         <header>
              <div className="container__logo">
        <img src="https://www.diurnay.com/media/2015/09/blanco-sony-logo.png" alt="" />
      </div>

      <div className="form__header">
        <div className="inpt__wrapper">
          <input type="text" placeholder="Search" id="inpt__search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="input-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
         </header>

    );



};

export default Navbar;