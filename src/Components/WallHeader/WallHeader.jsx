import './WallHeader.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function WallHeader() {
    return (
        <div className="wall-header">
            <div className="title">
                <h2>Men's Shoes & Sneakers (843)</h2>
            </div>
            <div className="filter-options">
                <div>
                <a href="#">Hide Filters</a>
                <img 
                    src="https://static-00.iconduck.com/assets.00/filter-icon-2048x1719-bydhv3ls.png" 
                    alt="filter" 
                    width={20} 
                />
                </div>
                <div>
                <a href="#">Sort By</a>
                <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
}

export default WallHeader;
