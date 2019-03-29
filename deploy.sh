#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git config user.name deploy
git config user.email deploy@deploy
git add -A
git commit -m 'deploy'

git push -f git@github.com:abalozz/filefire.git master:gh-pages

cd -
