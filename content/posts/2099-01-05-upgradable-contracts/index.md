---
title: Upgradable Contracts with UUPS proxies using ERC1967Proxy
slug: upgradable-contracts
date: 2099-01-01
published: false
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - develop
    - blockchain
    - ethereum
    - uups
    - erc1967proxy
    - hardhat
    - truffle
---
### Intro

I want to follow guide [OpenZeppelin Upgrades: Step by Step Tutorial for Truffle](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579).  
It implements a contract via a [UUPS proxy](https://docs.openzeppelin.com/contracts/4.x/api/proxy).  
UUPS proxies are cheaper to deploy than Transparant proxies.  

### Links

* Upgradable contracts:
    * [OpenZeppelin Upgrades: Step by Step Tutorial for Truffle](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579)
    * [Upgrades Plugins - OpenZeppelin Docs](https://docs.openzeppelin.com/upgrades-plugins/1.x/)
    * [Upgrading a contract via a multisig - OpenZeppelin Docs](https://docs.openzeppelin.com/defender/guide-upgrades)
    * Initialization - [Upgrading smart contracts - OpenZeppelin Docs](https://docs.openzeppelin.com/learn/upgrading-smart-contracts#initialization)
    * [Proxies - OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/4.x/api/proxy)
    * [The transparent proxy pattern - OpenZeppelin blog](https://blog.openzeppelin.com/the-transparent-proxy-pattern/)
* Hardhat or Truffle?
    * Hardhat or Truffle? [Developing smart contracts - OpenZeppelin Docs](https://docs.openzeppelin.com/learn/developing-smart-contracts?pref=hardhat#setting-up-a-solidity-project)
    * [Setting up a project | Ethereum development environment for professionals by Nomic Foundation](https://hardhat.org/hardhat-runner/docs/guides/project-setup)

...