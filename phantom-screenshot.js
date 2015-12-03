#!/usr/bin/env phantomjs


var page = require('webpage').create(),
  system = require('system'),
  address;

if (system.args.length != 3) {
  console.log('Usage: ' + system.args[0] + ' <some URL> <width in pixels>');
  phantom.exit();
}

page.viewportSize = {
  width: system.args[2],
  height: 768
};

address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    page.render(address.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.png');
  }
  phantom.exit();
});
