/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    handleForm: function(e) {
      e.preventDefault();
      this.props.handleForm({
        type: 'video',
        title: this.refs.title.getDOMNode().value,
        notes: this.refs.notes.getDOMNode().value,
        src: this.refs.src.getDOMNode().value
      });
    },

    render: function () {
      return (
        <form className="post-video" onSubmit={this.handleForm}>

          <div>
            <label htmlFor="video-embed">Video Source</label>
            <textarea id="video-embed" ref="src" placeholder="Enter a Youtube / Vimeo URL or embed code"></textarea>
          </div>

          <div className="post-attr-box">
            <span>&mdash;</span>
            <label htmlFor="video-source">Title</label>
            <input type="text" id="video-source" ref="title" placeholder="Title / Creator"></input>
          </div>

          <div>
            <label htmlFor="video-notes">Notes</label>
            <textarea id="video-notes" ref="notes" placeholder="Notes"></textarea>
          </div>
          <button className="post-submit">Post</button>
        </form>
      );
    }
  });