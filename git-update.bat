@echo off

set message=%*

git add .

echo committing to branch %branch%  : %message%
git commit -m "%message"
git push -u origin HEAD
