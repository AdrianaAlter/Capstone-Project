var React = require('react');
var SearchResultsStore = require('../store/search_results_store.js');
var ApiUtil = require('../util/api_util');

var Search = React.createClass({

	getInitialState: function () {
		return { query: "" };
	},

	componentDidMount: function () {
		this.storeListener = SearchResultsStore.addListener(
			this._onChange
		);
	},

	componentWillUnmount: function () {
		this.storeListener.remove();
	},

	_onChange: function () {
		this.setState({results: SearchResultsStore.all()});
	},

	handleInputChange: function (e) {
		var query = e.currentTarget.value;
		this.setState({ query: query }, function () {
			this.search();
		}.bind(this));
	},

	search: function (e) {
		ApiUtil.search(this.state.query, 1);
	},

	nextPage: function () {
		var meta = SearchResultsStore.meta();
		ApiUtil.search(meta.query, meta.page + 1);
	},

	resultLis: function () {
		return SearchResultsStore.all().map(function (result) {
			return (<li key={result.id}>{result.title}</li>);
		});
	},

	render: function () {
		var meta = SearchResultsStore.meta();
		return (
				<input type="text" tabIndex="0" onChange={this.handleInputChange} onSubmit={this.search}></input>
		);
	}

});

module.exports = Search;

// <article className="search group">
//   <ul>
//     {this.resultLis()}
//   </ul>
// </article>

//
// <nav>
// 	Page {meta.page} of {meta.total_pages}
// 	<button onClick={this.nextPage}>Next</button>
// </nav>
