---
home: true
heroImage: /logo.png
heroText: Silkaj
tagline: CLI performant et léger pour Duniter
actionText: Guide →
actionLink: /fr/guide/
features:
- title: Membres
  details: Effectuez des transactions et consultez le solde des comptes membres et portefeuilles.
- title: Toile de confiance
  details: Explorez les certifications émises et reçues, consultez le statut d'une identité de la toile de confiance.
- title: Réseau
  details: Affichez les informations en temps réel de la monnaie et du réseau. Explorez la chaîne de blocs.
footer: AGPLv3 - Licence Ğ1 - Moul
pageClass: home
---

## Démarrage rapide

Silkaj est écrit en [Python3](https://www.python.org/).
```bash
# Installation sur Debian Buster ou Ubuntu 19.04
sudo apt install silkaj
# OU installation avec PyPI
pip3 install silkaj --user

# Afficher l'aide
silkaj -h
```

## Qu'est-ce que c'est ?

Silkaj fait partie du [projet Duniter](https://duniter.org) qui a pour but la création d’une monnaie considérant tous ses membres comme égaux.

Dans le cadre de la [Théorie Relative de la Monnaie](https://en.trm.creationmonetaire.info/), tous les membres de la communauté émettent la même somme de monnaie. Cette égalité monétaire est assurée par le Revenu de Base ou Dividende Universel (DU) qui est émis quotidiennement par les membres certifiés. C’est grâce au mécanisme de la Toile de Confiance que les individus sont en mesure de se certifier mutuellement et ainsi créer le DU.

Pour la méthodologie, le projet Duniter a choisi la crypto-monnaie comme fondation pour son concept. À ce titre, Duniter utilise les technologies telles que la cryptographie, la chaîne de bloc et la preuve de travail. Le DU est réévalué selon la masse monétaire en circulation et le nombre de membres certifiés afin de maintenir la symétrie spatiale et temporelle.

La première [monnaie libre](https://monnaie-libre.fr/), nommée Ğ1 et prononcée ”June”, a été lancée en 2017 en même temps que la Ğ1-Test à des fins de tests.

---
## Dons
[![g1button](https://silkaj.duniter.org/images/g1_button.svg)](https://g1.duniter.fr/#/app/wot/GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP/Moul)

    silkaj tx --amount N --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"

[![g1button](https://silkaj.duniter.org/images/g1_button.svg)](https://g1.duniter.fr/#/app/wot/78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8/)

    silkaj tx --amount N --output 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8 --comment "Don au projet Duniter"

Développé et maintenu par Moul.