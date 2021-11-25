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
To edit the cosmos project in WSL2 you can use [Remote WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) VSCode plugin.  
Cosmos is running on GoLang, so that will be installed, too.

The blog is based on starport v0.18.0. I'll be using the [current latest which is v0.18.5](https://github.com/tendermint/starport/releases).  

## Install Starport including GO

From a WSL terminal:

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

From a WSL terminal:

```bash
# goto homedir
cd ~

# What options do we have?
starport help
# Available Commands:
#   scaffold    Scaffold a new blockchain, module, message, query, and more
#   chain       Build, initialize and start a blockchain node or perform other actions on the blockchain
#   generate    Generate clients, API docs from source code
#   account     Commands for managing accounts
#   relayer     Connect blockchains by using IBC protocol
#   tools       Tools for advanced users
#   docs        Show Starport docs
#   version     Print the current build information
#   help        Help about any command
#   completion  generate the autocompletion script for the specified shell

# What scaffold options do we have?
starport scaffold --help
# Available Commands:
#   chain       Fully-featured Cosmos SDK blockchain
#   module      Scaffold a Cosmos SDK module
#   list        CRUD for data stored as an array
#   map         CRUD for data stored as key-value pairs
#   single      CRUD for data stored in a single location
#   type        Scaffold only a type definition
#   message     Message to perform state transition on the blockchain
#   query       Query to get data from the blockchain
#   packet      Message for sending an IBC packet
#   band        Scaffold an IBC BandChain query oracle to request real-time data
#   vue         Vue 3 web app template

# What options do we have for scaffolding a new chain?
starport scaffold chain --help
# Scaffold a new Cosmos SDK blockchain with a default directory structure
# Usage:
#   starport scaffold chain [github.com/org/repo] [flags]
# Flags:
#       --address-prefix string   Address prefix (default "cosmos")
#       --no-module               Prevent scaffolding a default module in the app

starport scaffold chain github.com/binordev/cosmos-binor1
# ⭐️ Successfully created a new blockchain 'cosmos-binor1'.
# 👉 Get started with the following commands:
#  cd cosmos-binor1
#  starport chain serve
# Documentation: https://docs.starport.network
```

Now with the project created:
* You should exit the wsl terminal and 
* open the `~/cosmos-binor1` folder in VSCode via `Remote WSL` left-menu.  

```bash
# Build and run your chain
starport chain serve
# Cosmos SDK's version is: stargate - v0.44.3
# 🛠️  Building proto...
# 📦 Installing dependencies...
# 🛠️  Building the blockchain...
# 💿 Initializing the app...
# 🙂 Created account "alice" with address ***
# 🙂 Created account "bob" with address ***
# Genesis transaction written to ***
# 🌍 Tendermint node: http://0.0.0.0:26657
# 🌍 Blockchain API: http://0.0.0.0:1317
# 🌍 Token faucet: http://0.0.0.0:4500
```

Nice - we a node running - with two addresses. I assume they are also funded.  
** Important: Remember to make a note of the seeds - and the addresses **  

## Stop the chain

We stop a chain with ctrl-c. This will also save its state.

```bash
# Ctrl-C:
# ^C💿 Saving genesis state...
# 💿 Genesis state saved in /home/binor/.starport/local-chains/cosmosbinor1/exported_genesis.json
# aborted
```

Close VSCode.  

Turn of WSL to see if state can be recovered.  

```bash
# show wsl state
wsl -l -v
# turn off wsl
wsl --shutdown
```

Boot your PC.  

In VSCode reopen the stargate project `~/cosmos-binor1` folder in VSCode via `Remote WSL` left-menu.  

From the VSCode terminal restart the chain.   
It will only display:  

```bash
starport chain serve
# ▶️  Restarting existing app...
# 🌍 Tendermint node: http://0.0.0.0:26657
# 🌍 Blockchain API: http://0.0.0.0:1317
# 🌍 Token faucet: http://0.0.0.0:4500
```

..