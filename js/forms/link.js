/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    handleForm: function(e) {
      e.preventDefault();
      this.props.handleForm({
        type: 'link',
        title: this.refs.title.getDOMNode().value,
        url: this.refs.url.getDOMNode().value,
        notes: this.refs.notes.getDOMNode().value
      });
    },

    render: function () {
      return (
        <form className="post-link" onSubmit={this.handleForm}>
          <div>
            <label htmlFor="link-url">URL</label>
            <input type="text" id="link-url" ref="url" placeholder="URL"></input>
          </div>
          <div>
            <label htmlFor="link-title">Title</label>
            <input type="text" id="link-title" ref="title" placeholder="Title"></input>
          </div>
          <div>
            <label htmlFor="link-notes">Notes</label>
            <textarea id="link-notes" ref="notes" placeholder="Notes"></textarea>
          </div>
          <button className="post-submit" >Post</button>
        </form>
      );
    }
  });