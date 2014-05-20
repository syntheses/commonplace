/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    render: function () {
      return (
        <form class="post-image">
          <div>
            <label for="image-file">Upload a Photo</label>
            <div class="image-upload-box">
              <div class="image-upload-input">
                <input type="file" id="image-file"></input>
                <span>Choose a File</span>
              </div>
              <b>Upload a Photo</b>
            </div>
          </div>
          <div>
            <label for="image-caption">Caption</label>
            <textarea id="image-caption" placeholder="Write a description here"></textarea>
          </div>
          <button class="post-submit">Post</button>
        </form>
      );
    }
  });