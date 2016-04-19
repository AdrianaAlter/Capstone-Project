var React = require('react');
var SearchResultsStore = require('../store/search_results_store.js');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;


var Search = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function () {
		return { query: "", display: "" };
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

	goTo: function (id) {
		this.context.router.push("/boards/" + id);
	},

	hideResults: function () {
		this.setState({ display: "hidden" });
	},

	resultLis: function () {

		if (!this.state.results) { return (<li className="placeholder"></li>);}
		var toggle = this.hideResults;
		var resultItems = this.state.results.map(function (result) {
			if (result.title) {
				return (<li key={result.id}><Link to={"boards/" + result.id} onClick={toggle}>{result.title}</Link></li>);
			}
			else if (result.user_name) {
				return (<li key={result.id} onClick={toggle}>{result.user_name}</li>);
			}
		});

		return resultItems;
	},

	render: function () {
		var meta = SearchResultsStore.meta();
		var resultItems = this.resultLis();

		return (
			<div>
				<input type="text" tabIndex="0" onChange={this.handleInputChange} onSubmit={this.search}></input>
					<ul className={this.state.display}>{resultItems}</ul>
			</div>

		);
	}

});

module.exports = Search;
