/**
* @jsx React.DOM
*/

var React = require('react');

var Launcher = require('./launcher');

var Forms = {
  text: require('./forms/text'),
  quote: require('./forms/quote'),
  video: require('./forms/video'),
  link: require('./forms/link'),
  image: require('./forms/image')
};

var App = React.createClass({
  getInitialState: function() {
    return {
      type: null
    };
  },

  selectType: function(type) {
    this.setState({
        type: type
    });
  },

  handleForm: function(form) {
    console.log(form);

  },

  goBack: function() {
    console.log('go back');

    this.setState({type: null});
    document.body.addEventListener('animationend', function(){
      document.body.className = '';
      this.removeEventListener('animationend');
    }, true);

    document.body.className = 'is-returning';
  },

  render: function() {
    if (this.state.type === null) {

      return (
          <Launcher handleClick={this.selectType} />
      );

    } else {

        document.body.className = 'is-posting';
        Form = Forms[this.state.type]

        return (
          <section className="post-box">
            <button className="post-back" onClick={this.goBack}>Back</button>
            <Form handleForm={this.handleForm} />
          </section>
        );
    }
  }
});


React.renderComponent(<App />, document.getElementById('main'));