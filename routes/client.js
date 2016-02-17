var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var match = require('react-router').match;
var RoutingContext = require('react-router').RoutingContext;

var routes = require('../client/config/routes.jsx');


router.get('*', function(req, res) {
  match({ routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
    var reactComponent = ReactDOMServer.renderToString(React.createElement(RoutingContext, renderProps));
    var component = '<div>' + reactComponent + '</div>';

    res.render('layout', { reactComponent: component });
  });
});


module.exports = router;
