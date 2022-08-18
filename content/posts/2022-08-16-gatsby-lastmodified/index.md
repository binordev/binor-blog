---
title: Adding Last Modified to Gatsby
slug: gatsby-lastmodified
date: 2022-08-16
published: true
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - gatsby
    - frontmatter
    - graphql
    - yaml
---

## Intro

I wanted in this Gatsby blog to be able to write when I last updated a post.  
Google showed me some links howto let it be done automatiocally when committing a blog post.  
I wanted it to be controlled by me in the top YAML of the Gatsby blog post. Here is how it is typed (as `lastModified`) in the post:  

```yaml
# /posts/someblog/index.md
# yaml in top of our post:
date: 2022-07-30
lastModified: 2022-07-31
published: true
```

The changes to Gatsby can be found in this [commit](https://github.com/binordev/binor-blog/commit/bd0a4a852f94f8394b689fdd5006037d288b3570)

There is still a bit missing, though.  
There should be added a SEO meta tag, so crawlers will notice the change.  
That I will add later, perhaps...

## Links

* StackOverflow: [How to get 'Last Update Date' of a blog post in GATSBY](https://stackoverflow.com/questions/56025679/how-to-get-last-update-date-of-a-blog-post-in-gatsby-js)

...
