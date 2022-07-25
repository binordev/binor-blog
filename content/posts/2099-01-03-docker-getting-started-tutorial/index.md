---
title: Docker Getting Started Tutorial 
slug: docker-getting-started-tutorial
date: 2099-01-01
published: false
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - devops
    - docker
---

## Intro

In Docker Desktop there is a tutorial.

I´ve pasted the content into here for a quick reference.  

![docker-getting-started-tutorial](./docker-getting-started-tutorial.png)
_Image from Docker Desktop_

## 1. First, clone a repository

The _Getting Started_ project is a simple GitHub repository which contains everything you need to build an image and run it as a container.

Clone the repository by running Git in a container.

```
docker run --name repo alpine/git clone \
https://github.com/docker/getting-started.git
docker cp repo:/git/getting-started/ .
```

## Links

* [get-started](https://docs.docker.com/get-started/)

...