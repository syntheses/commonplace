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

  handleUpload: function(form, type, title) {
    var self = this;

    var xhr = new XMLHttpRequest();

    var formData = new FormData(form);

    formData.append('type', type);
    formData.append('title', title);

    xhr.onload = function() {
      try {
        var resp = JSON.parse(this.responseText);
        if (resp.posted)
          self.goBack();
      } catch (e) {
        console.log(e);
      }

    };

    xhr.open('POST', 'posts');

    xhr.send(formData);
  },

  handleForm: function(data) {
    var self = this;

    reqwest({
      url: 'posts',
      method: 'post',
      type: 'json',
      data: data
    }).then(function(resp){
      if (resp.posted)
        self.goBack();
    });

  },

  goBack: function() {

    this.setState({type: null});
    document.body.addEventListener('animationend', function(){
      document.body.className = '';
      document.body.removeEventListener('animationend', this);
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
        var Form = Forms[this.state.type]
        var formHandler = this.state.type === 'image' ? this.handleUpload : this.handleForm

        return (
          <section className="post-box">
            <button className="post-back" onClick={this.goBack}>Back</button>
            <Form handleForm={formHandler} />
          </section>
        );
    }
  }
});


React.renderComponent(<App />, document.getElementById('main'));