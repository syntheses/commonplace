/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    handleForm: function(e) {
      e.preventDefault();
      this.props.handleForm({
        type: 'quote',
        title: this.refs.body.getDOMNode().value.slice(0, 140),
        body: this.refs.body.getDOMNode().value,
        notes: this.refs.notes.getDOMNode().value,
        src: this.refs.src.getDOMNode().value
      });
    },

    render: function () {
      return (
        <form className="post-quote" onSubmit={this.handleForm}>
          <div>
            <label htmlFor="quote-body">Quote</label>
            <textarea id="quote-body" ref="body" placeholder="Quote"></textarea>
          </div>
          <div className="post-attr-box">
            <span>&mdash;</span>
            <label htmlFor="quote-source">Source</label>
            <input type="text" id="quote-source" ref="src" placeholder="Source"></input>
          </div>
          <div>
            <label htmlFor="quote-notes">Notes</label>
            <textarea id="quote-notes" ref="notes" placeholder="Notes"></textarea>
          </div>
          <button className="post-submit">Post</button>
        </form>
      );
    }
  });