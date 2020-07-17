#!/bin/bash

# Подтягиваем тэги
git fetch --prune --unshallow
git fetch --tags

# Смотрим, были ли добавлены новые иконки
git_commits_diff=`git --no-pager log $(git describe --tags --abbrev=0)..HEAD --oneline | grep "feat(icons)"`

# Если были добавлены новые иконки, релизим минорную версию пакета
if [ -z "$git_commits_diff" ]
then
      echo "No new icon commits found"
else
      echo "New icon commits found, publish..."
      npm i

      git config --global user.email "ds@alfabank.ru"
      git config --global user.name "alfa-bot"
      git add package-lock.json
      git commit -m 'chore(*): update package-lock.json'

      npm run release-minor
fi
