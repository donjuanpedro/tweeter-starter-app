const Backbone = require('backbone');
const UserModel = require('./models/UserModel');
const UserView = require('./views/UserView');
const NavBarView = require('./views/NavBarView');
const TweetsCollection = require('./collections/TweetsCollection');
const AboutView = require('./views/AboutView');


let currentView;

const Router = Backbone.Router.extend({
  routes: {
    "": "tweets",
    "user/:id" : "user",
    "*tweets" : "tweets"
  },

  initialize() {
    $('#nav').html(
      new NavBarView().render().el
    );
    $('#aboutMe').html(
      new AboutView().render().el
    );
  },

  tweets() {
    const TweetListView = require('./views/TweetListView');
    const collection = new TweetsCollection();
    const view = new TweetListView({ collection });
    collection.fetch();

    setView(view);
  },

  user(id) {
    const model = new UserModel({ _id: id });
    const collection = new TweetsCollection();
    const view = new UserView({ model, collection });
    collection.url = `/users/${id}/tweets`;
    collection.fetch();
    model.fetch();

    setView(view);
  }

});

function setView(view) {
  if(currentView) {
    currentView.remove();
  }
  currentView = view;

  const app = document.querySelector('#app');
  app.innerHTML = '';
  $(app).html(view.render().el);
};

module.exports = Router;
