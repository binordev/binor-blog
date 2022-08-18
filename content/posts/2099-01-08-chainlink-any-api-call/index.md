---
title: Any API call with Chainlink
slug: chainlink-any-api-call
date: 2099-01-01
published: false
cover: ./881ade6-Simple_Architecture_Diagram_1_V1.png
disqus: false
generate-card: false
language: en
tags:
    - develop
    - blockchain
    - chainlink
---

### Intro

I want to make an web2 api call from my .sol web3 contract.  
Our .sol code lives in **ChainLinkClient**  
[![881ade6-Simple_Architecture_Diagram_1_V1](https://docs.chain.link/files/881ade6-Simple_Architecture_Diagram_1_V1.png)](https://docs.chain.link/docs/architecture-request-model)
_Image [on Chainlink](https://docs.chain.link/files/881ade6-Simple_Architecture_Diagram_1_V1.png)_  

The web2 API call is done off-chain via an Oracle Node.  

For that usecase Chainlink offers two solutions:
1. [Any API calls](https://docs.chain.link/docs/any-api/introduction/)
2. Custom API calls via [External Adapters](https://docs.chain.link/docs/external-adapters/)

Option 2 requires you to deploy some custom code to a Chainlink Node.  
Option 1 does not - there you are just using existing code on a Chainlink Node.  

In this blog I'll try out option 1 with a chainlink node connected to the ethereum goerli testnet.  
Option 1 will call a chainlink contract on the goerli testnet to access the chainlink node.  
For that we need **ETH** to pay for the goerli transaction.  
We also need **LINK** to pay for the chainlink node service.  

Our .sol contract address or the user calling it (with metamask) needs having those funds depending on who we our code desides has to pay.    
We will use [Remix browser IDE](https://docs.chain.link/docs/conceptual-overview/#what-is-remix) for developing our .sol code and interact with it using metamask.  

### Process

Any onchain processing costs... 
In an Any API call some processing is moved to the off-chain Oracle node.  
This processing is passing API response, so only needed data is returned.  



### Links

* Intro:
    * Docs: [Basic Request Model](https://docs.chain.link/docs/architecture-request-model/)
    * Docs: [Chainlink Overview](https://docs.chain.link/docs/conceptual-overview/)
* Any API:
    * Tutorial: [Using Any API](https://docs.chain.link/docs/advanced-tutorial/)
    * Docs: [Testnet Oracles](https://docs.chain.link/docs/any-api/testnet-oracles/)
* External Adapters:
    * Docs: [External Adapters](https://docs.chain.link/docs/external-adapters/)

...