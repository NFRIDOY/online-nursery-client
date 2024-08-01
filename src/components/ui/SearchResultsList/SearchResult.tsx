import { Link } from "react-router-dom";
import "./SearchResult.css";
import { PropTypes } from 'prop-types';

export default function SearchResult({ result }) {
  return (
    <Link
      to={`/products/${result?._id}`}
      className="search-result w-full rounded-lg flex gap-x-10"
      // onClick={(e) => alert(`You selected ${result}!`)}
    >
      <div>
        <img src={result?.imageUrl} alt={result?.P_name} className="w-16" />
      </div>
      <div className="flex flex-col ">
        <span className="text-xl font-bold">
          {result?.P_name}
        </span>
        <span className="space-x-4 text-gray-400">
          <span>
            <strike>{result?.P_price}</strike>
          </span>
          <span className="text-warning font-bold">
            {result?.P_displayPrice}
          </span>
        </span>
      </div>
    </Link>
  )
}

SearchResult.propTypes = {
  result: PropTypes.node,
}

