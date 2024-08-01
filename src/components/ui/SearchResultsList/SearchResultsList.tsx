import "./SearchResultsList.css";
import SearchResult from "./SearchResult";
import { PropTypes } from 'prop-types';


export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list max-h-80 md:max-w-[650px]  md:max-h-[400px]">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.node,
}