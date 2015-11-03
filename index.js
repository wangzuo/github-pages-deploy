var shell = require('shelljs');


var cmds = [
  'mkdir -p .publish',
  'cd .publish',
  'git checkout gh-pages',
  'git pull',
  'git rm -r .',
  'cp -R ../gh-pages/* .',
  'git add -A .',
  'git commit -m "update gh-pages"',
  'git push'
];

cmds.forEach(function(cmd) {
  shell.exec(cmd);
});
