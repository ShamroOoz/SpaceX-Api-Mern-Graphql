import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-gray-800 w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
        <a className="_o6689fn" href="/">
          <div className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="32"
              viewBox="394.847 1264.878 2478.014 305.642"
            >
              <path
                d="M972.503 1377.719H763.261l-7.474 5.979v186.075h57.542v-70.246l5.23-5.23h153.942c38.858 0 56.794-10.461 56.794-37.363v-42.596c.002-26.157-17.934-36.619-56.792-36.619m0 68.75c0 12.703-8.221 14.945-26.903 14.945H819.308l-5.979-5.23v-39.606l5.23-5.231h127.039c17.936 0 26.902 2.242 26.902 14.945l.003 20.177zM1135.412 1412.841l50.068 73.234-2.989 6.726h-110.599l-28.397 35.123h164.403l11.957 6.725 25.408 35.123h66.509l-145.721-194.295M1795.268 1532.407v-52.309l5.979-5.232h111.347v-32.881h-176.362v127.787h260.058v-32.881h-194.296M1736.232 1377.719h262.299v35.87h-262.299zM1444.043 1412.094h211.482c-2.989-26.902-20.177-34.375-62.025-34.375h-151.699c-47.826 0-62.772 8.968-62.772 45.584v101.631c0 35.871 14.946 45.586 62.772 45.586H1593.5c42.596 0 59.036-8.221 60.531-35.871h-209.988l-5.979-5.979v-112.092M613.803 1452.448H460.609l-4.484-5.23v-32.881l4.484-3.736h206.999l2.989-6.726c-6.726-17.936-25.408-26.902-59.036-26.902H467.334c-47.826 0-62.772 8.967-62.772 45.583v21.672c0 35.871 14.946 45.586 62.772 45.586h153.195l4.483 4.482v34.375l-3.736 5.232H400.078s-5.23 2.988-5.23 3.736c3.736 25.408 20.924 32.133 62.024 32.133h156.932c47.826 0 63.52-8.967 63.52-45.584v-26.156c-.001-35.869-15.694-45.584-63.521-45.584M2163.682 1376.972h-86.686l-4.483 8.967 95.652 70.246c17.936-10.463 38.112-20.924 59.036-31.387M2241.4 1508.495l84.444 61.277h86.686l3.736-8.221-125.545-91.916c-16.44 12.703-33.627 25.408-49.321 38.86"
                fill="#005288"
              />
              <path
                d="M2150.978 1569.772h-78.465l-6.727-10.463c53.059-51.562 290.696-271.265 807.074-294.431.001 0-432.681 14.945-721.882 304.894"
                fill="#a7a9ac"
              />
            </svg>
          </div>
          <div className="block md:hidden">
            <svg
              width="30"
              height="32"
              fill="currentcolor"
              className=" text-white"
            >
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path>
            </svg>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
