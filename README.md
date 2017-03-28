# Frontentenda - Frontend development automation and task management

> This project inspired heavy inspired by [Gulp Starter](https://github.com/vigetlabs/gulp-starter).

This tool is created for developing the site template for marketplace like: ThemeForest. I do not want to start everything by scratch and that's why this tool is created to save time and learning a lot.

## Features
Frontentenda is came with many exciting and existing features in the Gulp Stater and few more to kick start.

Here is few:

- Sass
	- SCSS/SASS
	- AutoPrefixer
	- Minify with CSSNano
- JS
	- Modular JavaScript and compile in single (Check `assets/js/config.json`)
	- Minify for production
- HTML
	- Using Nunjucks templating engine
	- HTML minify for production
	- Combine and replace assets with gulp-useref
	- Replace minified project assets (Coming soon)
- SVG
	- SVG Icon Sprite
	- SVG to icon font
- Bower
	- Bower components as dependencies
	- Bower with bower normalize to organize

## Get start within a minute
Just clone this is repo to your project directory then run `yarn install` or `npm install`. After the install success just run `gulp` or `npm start` or  `yarn start`.

For production build, You need to run `gulp production`. That's it.

## Directory Structure
```
├── README.md
├── app
│   ├── assets
│   │   ├── fonts
│   │   ├── icons <- Your SVG icons to generate svg sprite and icon fonts. SVG icon size will be 500x500px
│   │   │   ├── facebook.svg
│   │   │   ├── twitter.svg
│   │   │   ├── ...
│   │   ├── img <- Your project images like logo, custom sprite or anything ship with the project.
│   │   │   ├── logo.png
│   │   │   ├── logo-contrast.png
│   │   │   ├── ...
│   │   ├── js <- Store your JavaScript file to concatenated as single file app.js
│   │   │   ├── config.json <- Mange order and watchable files
│   │   │   ├── example.js
│   │   │   └── example2.js
│   │   └── sass  <- The Sass folder to store your Sass or SCSS file to compile.
│   │       ├── app.sass 
│   │       ├── base
│   │       │   └── _bootstrap.sass
│   │       └── generated
│   │           └── _app-icons.scss <- This file is automatic generated by gulp task to make work iconfont.
│   ├── html <- Store HTML files as nunjucks template engine format to compile as html.
│   │   ├── data
│   │   │   └── app.json <- The json file to pass to the nunjucks compiler
│   │   ├── index.html
│   │   ├── layouts
│   │   │   └── app.html <- The base layout file to extend.
│   │   ├── macros
│   │   │   └── helpers.html <- A example macros file is included to compile.
│   │   ├── sections
│   │   │   ├── content.html
│   │   └── shared
│   │       ├── app-icons.html
│   │       ├── social-icons-font.html
│   │       └── social-icons-svg.html
│   └── media <- Store your third party assets like images, video, scripts or php files.
│       ├── php
│       │   └── example.php <- Just for example not executed by NodeJS :D
│       └── static
│           ├── audios
│           ├── images
│           ├── site-icons
│           │   ├── favicon.icon
│           │   ├── favicon.png
│           │   ├── ...
│           └── videos
├── bower.json <- You know this file is for bower dependency. By default jQuery, Bootstrap and Font Awesome is installed.
├── gulpfile.js <- All magics are happen from this folder.
│   ├── config.json <- Task management and configs
│   ├── index.js
│   ├── lib
│   │   ├── banner.js
│   │   ├── getEnabledTasks.js
│   │   ├── handleErrors.js
│   │   └── pathToUrl.js
│   └── tasks
│       ├── bower.js
│       ├── ....
│       └── ....
├── public <- The output folder
│   ├── assets <- Compiled version of js and css. Also, Images and fonts are included from app/assets/ directory.
│   ├── dependencies <- All dependencies from the bower components. All are organized as expected. 
│   ├── static <- From the media directory.
│   │   ├── banner.js
│   │   ├── getEnabledTasks.js
│   │   ├── handleErrors.js
│   │   └── pathToUrl.js
│   ├── index.html
│   └── ....
├── package.json
└── yarn.lock
```