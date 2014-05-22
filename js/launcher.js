/**
* @jsx React.DOM
*/

var React = require('react');

var LauncherButton = require('./button');

module.exports =
  React.createClass({
    handleClick: function(form) {
      this.props.handleClick(form);
    },
    render: function() {
      return (
        <section className="launcher">
          <h1><b>Commonplace</b></h1>
          <span className="launcher-line"></span>
          <section className="launcher-btns">
            <LauncherButton text="Text" type="text" handleClick={this.handleClick} />
            <LauncherButton text="Image" type="image" handleClick={this.handleClick} />
            <LauncherButton text="Quote" type="quote" handleClick={this.handleClick} />
            <LauncherButton text="Link" type="link" handleClick={this.handleClick} />
            <LauncherButton text="Video" type="video" handleClick={this.handleClick} />
          </section>
        </section>
      );
    }
  });