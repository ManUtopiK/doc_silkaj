---
sidebar: auto
---

# Guide

## Installation

Silkaj est écrit en [Python3](https://www.python.org/).
```bash
# installation sur Debian Buster ou Ubuntu 19.04
sudo apt install silkaj
# OU installation avec PyPI
pip3 install silkaj --user
```

### Mise à jour
    pip3 install silkaj --user --upgrade

### Pour les développeurs
[Voir ici](https://git.duniter.org/clients/python/silkaj/blob/dev/doc/install_poetry.md) pour l'installation de l'environnement de développement.

## Information sur la monnaie

Information monétaire en temps réel et vue du réseau

    silkaj info

### Vue du niveau de difficulté de preuve de travail requis pour générer le prochain bloc
```bash
silkaj diffi
```
![](https://silkaj.duniter.org/images/silkaj/diffi.png)

### Explorer la chaîne bloc par bloc
```bash
silkaj blocks
# 20 derniers blocs
silkaj blocks 20
```
![](https://silkaj.duniter.org/images/silkaj/blocks.png)

## Gérer ses comptes

### Transactions
Transactions vers plusieurs destinataires
![](https://silkaj.duniter.org/images/silkaj/tx.png)

### Soldes de portefeuilles

![](https://silkaj.duniter.org/images/silkaj/balance.png)

## Gestion de la Toile de Confiance

Trouver une clé publique ou une identité correspondante

### Consulter les certifications émises et reçues
et consulter le statut de membre de n'importe quelle identité dans la Toile de Confiance
![](https://silkaj.duniter.org/images/silkaj/wot.png)

## Certifications
![](https://silkaj.duniter.org/images/silkaj/cert.png)

## Méthodes d'authentication
Scrypt, Seed, file, Ğannonce, (E)WIF

## Requêtes
Les nœuds officiels de la Ğ1 et de la Ğ1-Test sont requetés par défaut.
La Ğ1-Test est accessible en spécifiant un flag. Possibilité de personnaliser le point de sortie.
