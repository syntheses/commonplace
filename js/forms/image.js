/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    getInitialState: function () {
      return {fileName: null};
    },
    handleImage: function(e) {
      if (e.target.files[0]) {
        var file = e.target.files[0];
        this.setState({fileName: file.name});
      } else {
        this.setState({fileName: null});
      }
    },

    handleForm: function(e) {
      e.preventDefault();
      this.props.handleForm(this.refs.form.getDOMNode(), 'image', this.refs.caption.getDOMNode().value.slice(0,140));
    },
    render: function () {

      var label = this.state.fileName ? this.state.fileName : 'Upload a Photo';


      return (
        <form className="post-image" onSubmit={this.handleForm} ref="form" encType="multipart/form-data">
          <div>
            <label htmlFor="image-file">Upload a Photo</label>
            <div className="image-upload-box">
              <div className="image-upload-input">
                <input type="file" ref="image" name="image" id="image-file" onChange={this.handleImage} accept="image/*"></input>
                <span>Choose a File</span>
              </div>
              <b>{label}</b>
            </div>
          </div>
          <div>
            <label htmlFor="image-caption">Caption</label>
            <textarea id="image-caption" name="caption" ref="caption" placeholder="Write a description here"></textarea>
          </div>
          <button className="post-submit">Post</button>
        </form>
      );
    }
  });