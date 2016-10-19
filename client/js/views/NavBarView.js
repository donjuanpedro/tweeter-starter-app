const Backbone = require('backbone');

const NavBarView = Backbone.View.extend({
  el: `

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header" id="title">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand navBarLinks" href="#">Walker Lyle</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a class="navBarLinks" href="#">About </a></li>
        <li>
          <a href="http://donjuanpedro.github.io/" target="_blank">Projects </a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <form class="navbar-form navbar-right" method="POST" id="logout" action="/logout">
            <button type="submit" class="btn btn-default"> Logout</button>
          </form>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  `,

  render() {
    return this;
  }
});

module.exports = NavBarView;
