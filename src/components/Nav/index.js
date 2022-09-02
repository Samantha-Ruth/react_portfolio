import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";

function Nav(props) {
  const [categories] = useState([
    { name: "SQL", description: "Project created with SQL database." },
    { name: "Express", description: "Backend manipulated using Express." },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const { contactSelected, setContactSelected } = props;

  //     const { categories = [],
  //             setCurrentCategory,
  //             currentCategory,
  //             contactSelected,
  //             setContactSelected
  //         } = props;

  //   const handleClick = (item) => {
  //     console.log(item);
  //     return item;
  //   };

  return (
    <header className="flex-row py-2">
      <h2 className="mx-2">
        <a data-testid="link" href="/">
          <span role="img">Samantha Haberman</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a
              data-testid="link"
              href="https://drive.google.com/file/d/1Jv49DPxcDWK2oMKFm6BENhREwt5niStC/view"
            >
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
