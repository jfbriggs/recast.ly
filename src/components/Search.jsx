var Search = (props) => {
  var runSearch = function() {
    props.search(document.getElementById('searchData').value);  
  };


  return (<div className="search-bar form-inline">
    <input className="form-control" type="text" id="searchData" />
    <button className="btn hidden-sm-down" onClick={runSearch}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>);
};
//search needs:
  //submit event handler
  //needs to receieve search method from app


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
