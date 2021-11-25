---
title: Create a custom Cosmos Chain
slug: cosmos-custom-chain
date: 2099-01-01
published: false
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - develop
    - blockchain
    - cosmos
    - starport
    - golang
---

## Intro

I'll be creating a custom Cosmos chain from this [Starport blog](https://docs.starport.com/guide/hello.html).  
To avoid problems with Windows I'll be running in WSL2.  
Cosmos is running on GoLang, so that will be installed, too.

The blog is based on starport v0.18.0. I'll be using the [current latest which is v0.18.5](https://github.com/tendermint/starport/releases).  

## Install Starport including GO

```bash
# Check that starport is not yet installed
starport version

cd ~

# Install GO - Guides
# * https://go.dev/doc/install
# * https://medium.com/@benzbraunstein/how-to-install-and-setup-golang-development-under-wsl-2-4b8ca7720374
# Download GO
wget https://go.dev/dl/go1.17.3.linux-amd64.tar.gz
# Extract folder
sudo tar -xvf go1.17.3.linux-amd64.tar.gz
# Move folder
sudo mv go /usr/local

cd ~
# Open windows explorer and edit .bashrc
explorer.exe .
```
```ini
# Add to .bashrc
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```

```bash
# Do we have Go?
go version
# go version go1.17.3 linux/amd64

```
With GO installed you might also want the [VSCode Go plugin](https://marketplace.visualstudio.com/items?itemName=golang.Go)

```bash
# Install starport into /usr/local/bin/
curl https://get.starport.network/starport@v0.18.5! | bash
# ######################################################################## 100.0%
# mv: cannot move './starport' to '/usr/local/bin/starport': Permission denied
# ============
# Error: mv failed

# If you get above mv error you should move the program
sudo mv /tmp/tmpinstalldir/starport /usr/local/bin/

# All ok now?
starport version
# panic: error while running command go: : exec: "go": executable file not found in $PATH

# If you get above mv error you should install GO - see above

# All ok now?
starport version
# Starport version:       v0.18.5
# Your go version:        go version go1.17.3 linux/amd64
```

## Scaffold a chain



..