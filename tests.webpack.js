// var context = require.context('./lib', true, /-test\.js$/);
var context = require.context('./lib', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
