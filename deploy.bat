@echo off
echo Building the project...
npm run build

echo Switching to gh-pages branch...
git checkout -b gh-pages

echo Removing old files...
git rm -rf .
git clean -fd

echo Copying dist files...
xcopy dist\* . /E /H /Y

echo Adding and committing...
git add .
git commit -m "Deploy to GitHub Pages"

echo Pushing to gh-pages...
git push origin gh-pages --force

echo Switching back to main...
git checkout main

echo Done!