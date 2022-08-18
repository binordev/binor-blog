---
title: Git tips
slug: git-tips
date: 2022-08-16
published: true
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - develop
    - git
---

## Intro

Some git stuff I often have to return to ... and don't remember if if don't do them often enough ...

### Where is my repo?

```bash
# bash:
git remote -v
# origin  git@github.com:binordev/binor-blog.git (fetch)
# origin  git@github.com:binordev/binor-blog.git (push)
```

### Rename a folder - so git history remains intact

```bash
# git bash:
# goto some commen parent folder
cd ../..
# move folders somewhere below
git mv ./child1/old-folder ./child2/new-folder
```

### Compare commits

* Browse to your [commits](https://github.com/binordev/binor-blog/commits/master)
* Select two to compare by copying commitid
* paste the commitid into a url like in  
[https://github.com/binordev/binor-blog/compare/f2f2356a92f6294c8b7813bff2473649a034492e...bd0a4a852f94f8394b689fdd5006037d288b3570](https://github.com/binordev/binor-blog/compare/f2f2356a92f6294c8b7813bff2473649a034492e...bd0a4a852f94f8394b689fdd5006037d288b3570)

Ref: [Comparing commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)  

...