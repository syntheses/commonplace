/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    render: function () {
      return (
        <form class="post-quote">
          <div>
            <label for="quote-body">Quote</label>
            <textarea id="quote-body" placeholder="Quote"></textarea>
          </div>
          <div class="post-attr-box">
            <span>&mdash;</span>
            <label for="quote-source">Source</label>
            <input type="text" id="quote-source" placeholder="Source"></input>
          </div>
          <div>
            <label for="quote-notes">Notes</label>
            <textarea id="quote-notes" placeholder="Notes"></textarea>
          </div>
          <button class="post-submit">Post</button>
        </form>
      );
    }
  });