import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="icons">
        <img
          src="data:image/png;base64,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"
          alt="jordan"
          width={23}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSXjCfWHB5smfm2FnXzv85xFXaurLAhmg8g&s"
          alt="converse"
          width={44}
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Find a Store</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TopBar;
