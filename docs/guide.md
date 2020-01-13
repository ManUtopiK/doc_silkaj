---
sidebar: auto
---

# Guide

## Install

Silkaj is written in [Python3](https://www.python.org/).
```bash
# install for Debian Buster or Ubuntu 19.04
sudo apt install silkaj
# OR install with PyPI
pip3 install silkaj --user
```

### Upgrade
    pip3 install silkaj --user --upgrade

### For developers
[See here](https://git.duniter.org/clients/python/silkaj/blob/dev/doc/install_poetry.md) for install developement environment.

## Currency information

Currency information stand Network view

    silkaj info

### Current Proof-of-Work difficulty level overview to generate next block
```bash
silkaj diffi
```
![](https://silkaj.duniter.org/images/silkaj/diffi.png)

### Explore the blockchain block by block
```bash
silkaj blocks
# 20 last blocks
silkaj blocks 20
```
![](https://silkaj.duniter.org/images/silkaj/blocks.png)

## Money management

### Transaction submission multi-output support
![](https://silkaj.duniter.org/images/silkaj/tx.png)

### Wallet balance
![](https://silkaj.duniter.org/images/silkaj/balance.png)

## Web of Trust management

Find corresponding public key or identity

### Check sent and received certifications
and consult the membership status of any given identity in the Web of Trust
![](https://silkaj.duniter.org/images/silkaj/wot.png)

## Certificate submission
![](https://silkaj.duniter.org/images/silkaj/cert.png)

## Authentication methods
Scrypt, Seed, file, Ğannonce, (E)WIF

## Request
Official Ğ1 and Ğ1-Test nodes requested by default.
Ğ1-Test by specifying a flag. Ability to specify a custom endpoint.