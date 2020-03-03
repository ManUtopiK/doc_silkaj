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

---

## Utiliser un fichier d'authentification
Vous pouvez générer un fichier d'authentification à partir de votre identifiant secret et mot de passe.
En utilisant un fichier d'authentification, vous pourrez alors effectuer des opérations **sans devoir vous authentifier à chaque fois**.

:::warning <span style="color: red;">Ce fichier est très sensible !</span><br>
:warning: Il permet de vous authentifier ; ne mettez pas ce fichier n'importe où ! Gardez-le en lieu sûr ou supprimez-le après utilisation...
:::

### Générer un fichier d'authentification
Créer un fichier `authfile` dans le répertoire courant :
```bash
silkaj authfile
```
Spécifier le nom du fichier et le répertoire :
```bash
silkaj authfile --file /path/to/custom-authfile
```
![authfile](../images/authfile.png#result)

### Effectuer une opération avec le fichier d'authentification
Exemple de transaction, la commande est exécutée dans le répertoire contenant le fichier `authfile` :
```bash
silkaj --auth-file tx --amount XX --output XXX --comment "Transaction avec authfile"
```
Exemple, en spécifiant le chemin du fichier d'authentification (-af = --auth-file):
```bash
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
![id](../images/history-u.png#result)

### Effectuer une transaction
```bash
silkaj tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
```
:::tip Info
Vous devrez confirmer la transaction
:::
![tx-confirm](../images/tx-confirm.png#result)

#### Transaction en DU sans confirmation (-y)
```bash
silkaj tx -y --amountUD XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
```
:::danger Attention
Il n'y aura pas à confirmer la transaction ! Cette commande est utile pour des transactions automatisées dans un programme.
:::
![tx-success](../images/tx-success.png#result)

#### Transaction avec `authfile`
```bash
silkaj -af tx --amount XX --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP --comment "Merci pour Silkaj"
```

#### Transaction vers plusieurs comptes
Les comptes doivent être séparés par `:`
```bash
silkaj tx --amount 10 --output GfKERHnJTYzKhKUma5h1uWhetbA8yHKymhVH2raf2aCP:78ZwwgpgdH5uLZLbThUQH7LKwPgjMunYfLiCfUCySkM8
```

### Automatiser les transactions
Créez un fichier `recipients.txt` avec la liste des clés publiques :
```bash
2ny7YAdmzReQxAayyJZsyVYwYhVyax2thKcGknmQy5nQ
FEkbc4BfJukSWnCU6Hed6dgwwTuPFTVdgz5LpL4iHr9J
D9D2zaJoWYWveii1JRYLVK3J4Z7ZH3QczoKrnQeiM6mx
...
```
Vous devez vous authentifier avec un fichier d'authentification (`--auth-file`).
Lancez la commande suivante pour envoyer 20 DU à tous les comptes :
```bash
silkaj --auth-file tx --yes --amountUD 20 --output `cat recipients.txt | tr '\n' ':' | sed -e 's/:*$//'`
```
:::tip Info
L'option `--yes` permet d'omettre la confirmation.
:::
Vous pouvez automatiser la transaction avec un `crontab` configuré sur votre machine. Exemple :
```bash
0 0 1 * * silkaj --auth-file tx --yes --amountUD 20 --output `cat recipients.txt | tr '\n' ':' | sed -e 's/:*$//'`
```

---

## Information sur le réseau, la monnaie et la chaîne de blocs

### Afficher les informations sur le réseau et la monnaie
```bash
silkaj info
```
![info](../images/info.png#result)

### Ouvrir la licence dans votre navigateur par défaut
```bash
silkaj license
```
:::tip Info
Vous pourrez choisir le langage de la licence
:::

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
