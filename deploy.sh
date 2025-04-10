#!/bin/bash

# PRODUCTION
git reset --hard HEAD
git checkout master
git pull origin master

npm i
npm run build
pm2 start process.config.js --env production


# DEVELOPMENT
# git reset --hard HEAD
# git checkout develop
# git pull origin develop

# npm i
# pm2 start "npm run start:dev" --name=Furniture