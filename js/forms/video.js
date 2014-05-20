/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    render: function () {
      return (
        <form class="post-video">

          <div>
            <label for="video-embed">Video Source</label>
            <textarea id="video-embed" placeholder="Enter a Youtube / Vimeo URL or embed code"></textarea>
          </div>

          <div class="post-attr-box">
            <span>&mdash;</span>
            <label for="video-source">Title</label>
            <input type="text" id="video-source" placeholder="Title / Creator"></input>
          </div>

          <div>
            <label for="video-notes">Notes</label>
            <textarea id="video-notes" placeholder="Notes"></textarea>
          </div>
          <button class="post-submit">Post</button>
        </form>
      );
    }
  });