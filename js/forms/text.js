/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    handleForm: function(e) {
      e.preventDefault();
      this.props.handleForm({
        type: 'text',
        title: this.refs.title.getDOMNode().value,
        message: this.refs.message.getDOMNode().value
      });
    },

    render: function () {
      return (
        <form className="post-text" onSubmit={this.handleForm}>
          <div>
            <label for="text-title">Title</label>
            <input type="text" id="text-title" ref="title" placeholder="Title"></input>
          </div>
          <div>
            <label for="text-message">Post</label>
            <textarea id="text-message" ref="message" placeholder="Write your post here"></textarea>
          </div>
          <button className="post-submit">Post</button>
        </form>
      );
    }
  });