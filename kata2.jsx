let React = require('react')

// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>; 

var CodewarsLink = React.createClass({
  render: function() {
    return (// a link to the user's profile! 
   <a href={
  `http://www.codewars.com/users/${this.props.user}`} 
   key={this.props.user}>
   {this.props.user}
   </a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    
    return (// an abridged version of the leaderboard
    // be sure to use the leaderboard variable preloaded for you
      <div>
        {this.props.leaders.map((leader) => (
          <CodewarsLink user={leader} key={leader} />
        ))}
      </div>
    );
  }
  });