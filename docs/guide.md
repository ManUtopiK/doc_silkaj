---
sidebar: auto
---

# Guide
<toggle-image />

## Install

Silkaj is written in [Python3](https://www.python.org/).
```bash
# install for Debian Buster or Ubuntu 19.04
sudo apt install silkaj
# OR install with PyPI
pip3 install silkaj --user
```

### Upgrade
```bash
pip3 install silkaj --user --upgrade
```

### For developers
[See here](https://git.duniter.org/clients/python/silkaj/blob/dev/doc/install_poetry.md) for install development environment.

---

## Display help
```bash
silkaj --help
# or
silkaj -h
```
![help](./images/help.png#result)

---

## Using authentification file
You can generate auth file with your identifier and password.
When using this auth file, you can perform operations **without be prompted each time**.

<span style="color: red;">**This file is dangerous !**</span><br>
This is the authentification file of your account ; don't put this file everywhere in your computer! Keep-it safe or delete it after using...

### Generate auth file
```bash
# Create `authfile` in your current directory
silkaj authfile
# Create file with directory and name
silkaj authfile --file /path/to/custom-authfile
```
![authfile](./images/authfile.png#result)
### How to operate with `authfile`
```bash
# Example of transaction
# This command is executed in repertory which contains the `authfile`
silkaj --auth-file tx --amount XX --output XXX --comment "tx with authfile"
# Specifiy path file (-af = --auth-file)
silkaj -af --file /path/to/custom-authfile tx --amount XX --output XXX --comment "tx with authfile"
```

### Authentication methods
@todo doc...
Scrypt, Seed, file, Ğannonce, (E)WIF

---

## Change default peer
Official Ğ1 and Ğ1-Test nodes are requested by default. You can use custom endpoint.
```bash
silkaj --peer g1.presles.fr:443 info
# or
silkaj -p g1.presles.fr:443 info
```
---

## Accounts and transactions

### Get key of account
```bash
silkaj id moul
```
![id](./images/id.png#result)

### Wallet balance
```bash
silkaj balance 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8
```
![balance](./images/balance.png#result)

### Display transactions history
```bash
silkaj history 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8
```
![history](./images/history.png#result)

#### Display transactions history with issuers (-u)
```bash
silkaj history 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8 -u
```

### Send transaction
```bash
silkaj tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Thanks for Silkaj"
# You will be prompted to confirm sending transaction
```
![tx-confirm](./images/tx-confirm.png#result)

#### Transaction in DU without confirmation (-y)
```bash
silkaj tx -y --amountUD XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Thanks for Silkaj"
# Be careful, you will NOT be prompted!
```
![tx-success](./images/tx-success.png#result)

#### Transaction with `authfile`
```bash
silkaj -af tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Thanks for Silkaj"
```

---

## Information about network, currency and blockchain

### Display informations about network and currency
```bash
silkaj info
```
![info](./images/info.png#result)

### Open currency license in your default browser
```bash
silkaj license
# You will be prompted for language
```

### Display the current Proof of Work difficulty level to generate the next block
```bash
silkaj diffi
```
![diffi](./images/diffi.png#result)

### Explore the blockchain
```bash
silkaj blocks
```
![blocks](./images/blocks.png#result)

#### Detailed view of the blockchain
```bash
silkaj blocks -d
```
![blocks_detailed](./images/blocks_detailed.png#result)

#### Get last 20 blocs
```bash
silkaj blocks 20
# Force detailed view (Compact view happen over 30 blocks)
# silkaj blocks 50 -d
```
![blocks20](./images/blocks20.png#result)

---

## Web of Trust management

### Check sent and received certifications
```bash
silkaj wot moul
```
![wot](./images/wot.png#result)

## Submit certification
```bash
silkaj cert moul
```
