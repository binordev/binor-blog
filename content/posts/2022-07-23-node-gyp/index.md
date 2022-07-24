---
title: Install node-gyp on Windows 11 Home
slug: node-gyp-install
date: 2022-07-23
published: true
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - develop
    - node
    - node-gyp
    - python
    - msbuild
    - c++
---

## Intro

On Windows node-gyp often gives problems.  
You need node-gyp to compile c++ resources.  

In this blog I suggest an easiest resolution: To use different node versions until you find one, that works for you.

And along the road tries to fix the problems with the hard path.

## Verify node-gyp is (not) working

Try install any of these npm packages

* bson
* bufferutil
* kerberos
* node-sass
* sqlite3
* phantomjs
* utf-8-validate

... using `npm i -g xxxxxx`  
When they fail to install the reason might be due to node-gyp does not work

## Devbox

My devbox is running

* Windows 11 Home
* MSBuildTools 15.9.21.664 
    * `MSBuild -ver` in `C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\Bin`
* MSBuildTools 16.10.2.30804 
    * `MSBuild -ver` in `C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin>`
* MSBuildTools 17.2.1.25201 
    * `MSBuild -ver` in `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Current\Bin`
* python 3.10.5 
    * `py --version`
* nvm 1.1.7 (node version manager) 
    * `nvm version`
* node 14.20.0 
    * `node -v` [get latest node with npm 7.x.x](https://nodejs.org/en/download/releases/)
* npm 6.14.17 
    * `npm -v`
* node-gyp 
    * `npm list node-gyp` or `npm list -g node-gyp`
* git 2.24.1 
    * `git --version`

## The easy path

On Windows node-gyp is dependent on
* MSBuild
* Python - in some cases

You probaly already have [installed MSBuild](https://docs.microsoft.com/en-us/visualstudio/msbuild/walkthrough-using-msbuild?view=vs-2022#install-msbuild) for different .NET versions from the [Download Visual Studio Tools](https://visualstudio.microsoft.com/downloads/) page and installed it.
Or via Visual Studio Installer.

I have versions from VS 2017, 2019 and 2022.

So change is that some node versions already will work with the setup of your machine.

I use nvm to change between node versions.  
It turn out that node v14.20.0 already have a node-gyp, that works in the setup of my machine.

```bash
# Which node versions do you have installed?
nvm list
# Install node v14.20.0
nvm install 14.20.0
# Change to node v14.20.0
nvm use 14.20.0

# Tip: When you changed node version (above) you changed the folder, 
# where node is installed
# Print symlink for where node is installed:
npm bin -l -g
# C:\Program Files\nodejs

# Test that node-gyp is working
npm install -g utf-8-validate
```

## The 2nd easy path

OK, you have a node version where node-gyp is not working.  
Try fix it with [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools)

```bash
nvm list
# Install node v16.10.0
nvm install 16.10.0
# Change to node v16.10.0
nvm use 14.17.0
# install windows-build-tools
npm install --global windows-build-tools
# verify you have installed windows-build-tools
npm list -g windows-build-tools
# `-- windows-build-tools@5.2.2
```

## The hard path

Try Install MSBuild and Python [manually](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#environment-setup-and-configuration)  

Further guides

* [Troubleshoot](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#resolving-common-issues)  
* [GitHub - node-gyp: Install On Windows](https://github.com/nodejs/node-gyp#on-windows)
* [microsoft/nodejs-guidelines](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules)
* [Troubleshooting node-gyp Package on Windows 11](https://devkimchi.com/2021/11/26/troubleshooting-node-gyp-package-on-windows11/)
* [Npm install not installing because of node-gyp - Sarkari Job Alert](https://www.sarkarijobalert.org/discuss/10468)

## Other reasons

You realize that node-gyp is not the problem, but a module, that is using it e.g. [leveldown](https://stackoverflow.com/questions/58859338/unable-to-install-leveldown-npm-package-node-gyp-error-msbuild-exe-failed-with)


...
