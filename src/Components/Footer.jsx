import React from "react";

function Footer() {  
  const year = new Date().getFullYear()
  return (
    <footer className="bg-orange-200 rounded-lg shadow-sm m-4 dark:bg-black-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className=" text-l text-center text-gray-500 sm:text-center dark:text-gray-400">
          © {year} My Shopy™. All Rights Reserved.                   
        </span>       
      </div>
    </footer>
  );
}

export default Footer;
