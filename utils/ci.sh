#!/bin/bash

# Подтягиваем тэги
git fetch --prune --unshallow
git fetch --tags

# Смотрим, были ли добавлены новые иконки
LATEST_TAG=$(git describe --tags --abbrev=0)
CHANGED_ICONS=$(git diff --name-only $LATEST_TAG HEAD | grep "icons/")
DELETED_ICONS=$(git diff --name-only $LATEST_TAG HEAD --diff-filter=D | grep "icons/")

# Если были добавлены новые иконки, релизим новую версию пакета
if [ -z "$CHANGED_ICONS" ]
then
    echo "No new icon commits found"
else
    echo "New icon commits found, publish..."
    npm i

    git config --global user.email "ds@alfabank.ru"
    git config --global user.name "alfa-bot"
    git add package-lock.json
    git commit -m 'chore(*): update package-lock.json'

    # Если какие-то иконки были удалены, релизим мажорную версию пакета
    if [ -z "$DELETED_ICONS" ]
    then
        npm run release-minor
    else
        npm run release-major
    fi
fi
