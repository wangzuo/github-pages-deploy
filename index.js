var shell = require('shelljs/global');

cd('.publish');
exec('git checkout gh-pages');
exec('git pull');
exec('git rm -r .');
exec('cp -R ../gh-pages/* .');
exec('git add -A .');
exec('git commit -m "update gh-pages"');
exec('git push');
