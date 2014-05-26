/**
* @jsx React.DOM
*/

var React = require('react');

module.exports =
  React.createClass({
    handleClick: function(e) {
      this.props.handleClick(this.props.type);
    },
    render: function() {
      var classes = this.props.type + " is-hidden";
      return (
        <button className={classes} onClick={this.handleClick}>{this.props.text}</button>
      );
    }
  });
