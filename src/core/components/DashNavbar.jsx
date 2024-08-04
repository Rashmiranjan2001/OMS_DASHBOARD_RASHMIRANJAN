import './Menu.css';
 
const DashNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 mb-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="">
          <form action="#" method="GET" className="w-1/2 lg:pl-2" style={{ paddingLeft: '1.5rem' }}>
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    {" "}
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />{" "}
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="custom-form bg-white text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4 p-4">
            <button className="text-white">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="none" />
                <path
                  d="M3 8.5V17.5C3 18.3284 3.67157 19 4.5 19H19.5C20.3284 19 21 18.3284 21 17.5V8.5L12 13L3 8.5Z"
                  fill="white"
                />
                <path d="M12 11L3 6H21L12 11Z" fill="white" />
              </svg>
            </button>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M47.16,21.221l-5.91,-0.966c-0.346,-1.186 -0.819,-2.326 -1.411,-3.405l3.45,-4.917c0.279,-0.397 0.231,-0.938 -0.112,-1.282l-3.889,-3.887c-0.347,-0.346 -0.893,-0.391 -1.291,-0.104l-4.843,3.481c-1.089,-0.602 -2.239,-1.08 -3.432,-1.427l-1.031,-5.886c-0.084,-0.478 -0.499,-0.828 -0.985,-0.828h-5.5c-0.49,0 -0.908,0.355 -0.987,0.839l-0.956,5.854c-1.2,0.345 -2.352,0.818 -3.437,1.412l-4.83,-3.45c-0.399,-0.285 -0.942,-0.239 -1.289,0.106l-3.887,3.887c-0.343,0.343 -0.391,0.883 -0.112,1.28l3.399,4.863c-0.605,1.095 -1.087,2.254 -1.438,3.46l-5.831,0.971c-0.482,0.08 -0.836,0.498 -0.836,0.986v5.5c0,0.485 0.348,0.9 0.825,0.985l5.831,1.034c0.349,1.203 0.831,2.362 1.438,3.46l-3.441,4.813c-0.284,0.397 -0.239,0.942 0.106,1.289l3.888,3.891c0.343,0.343 0.884,0.391 1.281,0.112l4.87,-3.411c1.093,0.601 2.248,1.078 3.445,1.424l0.976,5.861c0.079,0.481 0.496,0.834 0.985,0.834h5.5c0.485,0 0.9,-0.348 0.984,-0.825l1.045,-5.89c1.199,-0.353 2.348,-0.833 3.43,-1.435l4.905,3.441c0.398,0.281 0.938,0.232 1.282,-0.111l3.888,-3.891c0.346,-0.347 0.391,-0.894 0.104,-1.292l-3.498,-4.857c0.593,-1.08 1.064,-2.222 1.407,-3.408l5.918,-1.039c0.479,-0.084 0.827,-0.5 0.827,-0.985v-5.5c0.001,-0.49 -0.354,-0.908 -0.838,-0.987zM25,32c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <button className="relative text-white">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.8954 2 10 2.89543 10 4V5.367C7.55139 6.35301 6 8.9754 6 12V16L4 18V19H20V18L18 16V12C18 8.9754 16.4486 6.35301 14 5.367V4C14 2.89543 13.1046 2 12 2ZM12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22ZM8 11H16V12.9999H8V11Z"
                  fill="currentColor"
                />
              </svg>

              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-blue-500 rounded-full"></span>
            </button>
            <button className="text-white">
            <img
                src= "https://randomuser.me/api/portraits/men/77.jpg"
                alt= "image"
                className="profile-image"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
