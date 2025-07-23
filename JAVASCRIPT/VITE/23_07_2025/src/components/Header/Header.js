import "./Header.css";

const Header = (title) => {
  return `
    <header>
        <h1>${title}</h1>
        <nav>
            <ul>
                <li>
                    <a href="#null">Home</a>
                </li>
                <li>
                    <a href="#null">Contact</a>
                </li>
                 <li>
                    <a href="#null">About</a>
                </li>
            </ul>
        </nav>
    </header>
    `;
};

export default Header;
