This blog is started as a clone of [gatsby-starter-morning-dew](https://github.com/maxpou/gatsby-starter-morning-dew)

It is running on node v14.20.0  

Setup:
```bash
gatsby new binor-blog https://github.com/maxpou/gatsby-starter-morning-dew
gatsby clean # clear cache for old metadata from docs
npm start

# start http://localhost:8000/

# To push:
git push -u origin master
# When deploy (below) has been setup then 'git push' will autodeply :-)
```

### Deploy

To Netlify:

* [Instructions](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-netlify/)
* [Quick deploy](https://app.netlify.com/start/deploy?repository=https://github.com/binordev/binor-blog)
* Choose a domain via [domain settings](https://app.netlify.com/sites/binor/settings/domain)
* Trigger [deploys](https://app.netlify.com/sites/binor/deploys)
* Browse to your [site](https://binor.netlify.app)

### Tools

* Online Generator: [TOC Table of Contents](http://ecotrust-canada.github.io/markdown-toc/) from Markdown

...