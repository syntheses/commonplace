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
        <form class="post-quote" onSubmit={this.handleForm}>
          <div>
            <label for="quote-body">Quote</label>
            <textarea id="quote-body" ref="body" placeholder="Quote"></textarea>
          </div>
          <div class="post-attr-box">
            <span>&mdash;</span>
            <label for="quote-source">Source</label>
            <input type="text" id="quote-source" ref="src" placeholder="Source"></input>
          </div>
          <div>
            <label for="quote-notes">Notes</label>
            <textarea id="quote-notes" ref="notes" placeholder="Notes"></textarea>
          </div>
          <button class="post-submit">Post</button>
        </form>
      );
    }
  });