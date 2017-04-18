module.exports = (args) => {
  const cmd = args._[0]

  if (cmd) {
    require('./run-all')(cmd, args)
  } else {
    require('packages/core-app').start()
  }
}


/**
TODO

starting app
deployment
break up core-app
- root of monorepo
- core-server
- core-driver
tests
- unit/integration in each package
- e2e should be in root
work out script running UX
- preserve coloring of individual output
  * nodemon's colors are coming through, so see what it does
- bring back panes
  * need to be able to scroll

*/