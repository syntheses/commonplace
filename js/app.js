/**
* @jsx React.DOM
*/

var React = require('react');
var reqwest = require('reqwest');

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
    var self = this;
    reqwest({
      url: 'posts',
      method: 'post',
      data: form
    }).then(function(resp){
      if (resp.posted)
        self.goBack();
    });

  },

  goBack: function() {

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