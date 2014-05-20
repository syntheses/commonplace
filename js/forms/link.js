/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    render: function () {
      return (
        <form class="post-link">
          <div>
            <label for="link-url">URL</label>
            <input type="text" id="link-url" placeholder="URL"></input>
          </div>
          <div>
            <label for="link-title">Title</label>
            <input type="text" id="link-title" placeholder="Title"></input>
          </div>
          <div>
            <label for="link-notes">Notes</label>
            <textarea id="link-notes" placeholder="Notes"></textarea>
          </div>
          <button class="post-submit">Post</button>
        </form>
      );
    }
  });