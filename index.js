var shell = require('shelljs');

shell.exec('git branch -f gh-pages');
shell.exec('git checkout gh-pages');
shell.exec('git reset --hard master');
shell.exec('mv gh-pages .publish');
shell.exec('rm -rf *');
shell.exec('mv .publish/* .');
shell.exec('rm -rf .publish');
shell.exec('git add -A .');
shell.exec('git commit -a -m "update gh-pages"');
shell.exec('git checkout master');
shell.exec('git status');
