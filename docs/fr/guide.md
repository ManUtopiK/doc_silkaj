---
sidebar: auto
---

# Guide
<toggle-image />

## Installation

Silkaj est écrit en [Python3](https://www.python.org/).
```bash
# installation sur Debian Buster ou Ubuntu 19.04
sudo apt install silkaj
# OU installation avec PyPI
pip3 install silkaj --user
```

### Mise à jour
```bash
pip3 install silkaj --user --upgrade
```

### Pour les développeurs
[Voir ici](https://git.duniter.org/clients/python/silkaj/blob/dev/doc/install_poetry.md) pour l'installation de l'environnement de développement.

---

## Afficher l'aide
```bash
silkaj --help
# ou
silkaj -h
```
![help](../images/help.png#result)

---

## Utiliser un fichier d'authentification
Vous pouvez générer un fichier d'authentification à partir de votre identifiant secret et mot de passe.
En utilisant un fichier d'authentification, vous pourrez alors effectuer des opérations **sans devoir vous authentifier à chaque fois**.

<span style="color: red;">**Ce fichier est très sensible !**</span><br>
Il permet de vous authentifier ; ne mettez pas ce fichier au milieu de votre bureau ! Gardez-le en lieu sûr ou supprimez-le après utilisation...

### Générer un fichier d'authentification
```bash
# Créé un fichier `authfile` dans le répertoire courant
silkaj authfile
# Spécifier le nom du fichier et le répertoire
silkaj authfile --file /path/to/custom-authfile
```
![authfile](../images/authfile.png#result)
### Effectuer une opération avec le fichier d'authentification
```bash
# Exemple de transaction
# La commande est exécutée dans le répertoire contenant le fichier `authfile`
silkaj --auth-file tx --amount XX --output XXX --comment "Transaction avec authfile"
# En spécifiant le chemin du fichier d'authentification (-af = --auth-file)
silkaj -af --file /path/to/custom-authfile tx --amount XX --output XXX --comment "Transaction avec authfile"
```

### Méthodes d'authentification
Doc à compléter...
Scrypt, Seed, file, Ğannonce, (E)WIF

---

## Changer le nœud par défaut
Les nœuds officiels Ğ1 et Ğ1-Test sont utilisés par défaut. Vous pouvez spécifier un nœud différent.
```bash
silkaj --peer g1.presles.fr:443 info
# ou
silkaj -p g1.presles.fr:443 info
```
---

## Comptes et transactions

### Obtenir la clé d'un compte
```bash
silkaj id moul
```
![id](../images/id.png#result)

### Consulter le solde d'un portefeuille
```bash
silkaj balance 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8
```
![balance](../images/balance.png#result)

### Afficher l'historique des transactions
```bash
silkaj history 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8
```
![history](../images/history.png#result)

#### Afficher l'historique avec le nom des émetteurs (-u)
```bash
silkaj history 78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8 -u
```

### Effectuer une transaction
```bash
silkaj tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
# Vous devrez confirmer la transaction
```
![tx-confirm](../images/tx-confirm.png#result)

#### Transaction en DU sans confirmation (-y)
```bash
silkaj tx -y --amountUD XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
# Attention, vous n'aurez pas à confirmer la transaction !
```
![tx-success](../images/tx-success.png#result)

#### Transaction avec `authfile`
```bash
silkaj -af tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
```

---

## Information sur le réseau, la monnaie et la chaîne de blocs

### Afficher les informations sur le réseau et la monnaie
```bash
silkaj info
```
![info](../images/info.png#result)

### Ouvrir la license dans votre navigateur par défaut
```bash
silkaj license
# You will be prompted for language
```

### Afficher le niveau de difficulté de preuve de travail requis pour générer le prochain bloc
```bash
silkaj diffi
```
![diffi](../images/diffi.png#result)

### Explorer la chaîne de blocs
```bash
silkaj blocks
```
![blocks](../images/blocks.png#result)

#### Vue détaillée de la chaîne de blocs
```bash
silkaj blocks -d
```
![blocks_detailed](../images/blocks_detailed.png#result)

#### Afficher les 20 derniers blocs
```bash
silkaj blocks 20
# Force l'affichage détaillé (L'affichage est compacté au-delà de 30 blocs)
# silkaj blocks 50 -d
```
![blocks20](../images/blocks20.png#result)

---

## Gestion de la Toile de Confiance

### Consulter les certifications émises et reçues par un compte
```bash
silkaj wot moul
```
![wot](../images/wot.png#result)

### Émettre une certification
```bash
silkaj cert moul
```
