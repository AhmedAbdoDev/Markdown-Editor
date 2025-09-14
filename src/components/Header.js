import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Markdown Editor</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://ahmedabdodev.github.io/Portfolio"
                className="hover:text-blue-400 transition-colors"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
