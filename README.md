### Ng app bootstrapper - A frontend application bootstrapper utilising best of the technologies to create web application using [AngularJS](http://angularjs.org/), [angular-material](https://github.com/angular/material), [Material CSS](materializecss.com), [Angular Mocks](https://github.com/angular/angular.js/tree/master/src/ngMock)


### Quick links
- [Demo](#demo)
- [Features](#features)
- [Depedenies](#dependencies)
- [Core files](#Core-files)
- [Installation](#installation)
    - [Manual](#manual-download)
- [Support](#support)
    - [FAQ](#faq)
    - [Supported browsers](#supported-browsers)
    - [Need help?](#need-help)
    - [Found a bug?](#found-a-bug)
- [Contributing to the project](#contributing-to-the-project)


# Demo

Do you want to see sample app writtne using this bootstrapper? Visit http://www.vijaytanwar.com/!


# Features

- Light weight application framework.
- Using angular js as front end framework.
- Using Material CSS as design framework.
- Support mocking of real services using ngMock. It is very helpful, you even dont need any real service while developing your application, you can just intercept any url and return the suitable response. For more help see. (https://github.com/angular/angular.js/tree/master/src/ngMock)
- Using lite server for viewing changes in real time when doing developent, it helps in reducing time in refreshing the browsers again and again after making a small changes.
- It support cache busting for your own files, if you make any new production build, the client files replaced with new files when browser loads the application.
- Template precompilation helps to precompile ng tempates at server to reduce the compilation time and loading time on client browser thus improve the application load time.
- Load third party script from cdn server.
- Using scss for modularizing the css files.
- Development is faster as it don't keep watch on every file except scss files, so any change in js files is watch for only jslint specific issues only, they are not copied to dist folder every time they are changed.
 
# dependencies
- [AngularJS](http://angularjs.org/) 
- [angular-material](https://github.com/angular/material)
- [Material CSS](materializecss.com)
- [Angular Mocks](https://github.com/angular/angular.js/tree/master/src/ngMock)
- [lite-server](https://www.npmjs.com/package/lite-server)
- [grunt-html2js](https://www.npmjs.com/package/grunt-html2js)

# Core-files

- index-dev.html: This is the main index files which copied to index.html for development and dist/index.html for production build.
- bs-config.js: This is the lite server configuration file, generally contains the root path configuration.
- mock_services: This folder contains all the mock services.
- main.js: This is require js main file.

# Installation

# manual-download
As for now you can checkout the code from git branch or you can download the code manully from git.

## Need help?
[Need help using ng app bootstrapper?](http://ngappbootstrapper.blogspot.in/)

**Please do not create new issues in this repository to ask questions about using ng app bootstrapper**

## Found a bug?
Please take a look at [CONTRIBUTING.md](CONTRIBUTING.md#you-think-youve-found-a-bug) and submit your issue [here](https://github.com/vijaytanwar/ngAppBootstrapper/issues).


# Contributing to the project

We are always looking for the quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution guidelines.
