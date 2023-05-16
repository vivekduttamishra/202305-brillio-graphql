@echo off

git checkout -b %1
git add .
git commit -m "branch creation"
git push -u origin %1


