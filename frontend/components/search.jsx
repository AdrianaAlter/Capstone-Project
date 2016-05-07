var React = require('react');
var SearchResultsStore = require('../store/search_results_store.js');
var ApiUtil = require('../util/api_util');



var Search = React.createClass({

	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function () {
		return { query: "", display: "hidden" };
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
		this.setState({ query: query, display: "displayed group" }, function () {
			this.search();
		}.bind(this));
	},

	search: function (e) {
		ApiUtil.search(this.state.query, 1);
		this.setState({ query: "" });
	},

	nextPage: function () {
		var meta = SearchResultsStore.meta();
		ApiUtil.search(meta.query, meta.page + 1);
	},

	goToBoard: function (id) {
		this.hide();
		this.context.router.push("/boards/" + id);
		this.setState({ query: "" });
	},

	goToUser: function (id) {
		this.hide();
		this.context.router.push("/users/" + id);
		this.setState({ query: "" });
	},

	toggleResults: function () {
		this.state.display == "displayed group" ? this.setState({ display: "hidden" }) : this.setState({display: "displayed group" });
	},

  show: function () {
	    this.setState({ display: "displayed group" });
	},

  hide: function () {
    this.setState({ display: "hidden" });
  },

	resultLis: function () {

		if (!this.state.results) { return (<div></div>);}
		var toggle = this.toggleResults;

		var resultItems = this.state.results.map(function (result, idx) {
			if (result.title) {
				return (<li key={idx} className={"board-result"} onClick={this.goToBoard.bind(this, result.id)}>{result.title}</li>);
			}
			else if (result.user_name) {
				return (<li key={idx} className={"user-result"} onClick={this.goToUser.bind(this, result.id)}>{result.user_name}</li>);
			}
		}.bind(this));

		return resultItems;
	},

		render: function () {

			var meta = SearchResultsStore.meta();
			var resultItems = this.resultLis();
			var ul = resultItems.length > 0 ? <ul className={this.state.display} onMouseLeave={this.hide}>{resultItems}</ul> : null;

			return (
				<div>
					<input type="text" tabIndex="0" onClick={this.toggleResults} onChange={this.handleInputChange} onSubmit={this.search}></input>
						{ul}
				</div>

			);

	}

});

module.exports = Search;
