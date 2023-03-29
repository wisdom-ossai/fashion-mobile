import "./search-box.css";

const SearchBox = () => {
  return (
    <div id="searchBox" className="mobile-form">
      <div className="search-wrapper" id="searchform">
        <span id="noEasy">
          <span className="ri-search-line"></span>
        </span>
        <input
          id="sbox"
          name="q"
          placeholder=""
          type="text"
          x-webkit-speech=""
        />
      </div>
    </div>
  );
};

export default SearchBox;
