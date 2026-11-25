# Where Is My Time?

Une application de gestion de tâches simple pour mieux organiser son temps.  
Les données sont stockées directement dans le navigateur : aucun compte n’est nécessaire.

🔗 **Essayer l’application :** [COMING SOON]()

## Fonctionnalités

- Gérer ses tâches depuis une interface web.
- Retrouver ses données dans le navigateur utilisé.
- Utiliser l’application sans créer de compte.

> Les données étant stockées dans le navigateur, elles ne sont pas automatiquement synchronisées entre plusieurs appareils ou navigateurs. Pensez à ne pas effacer les données du navigateur si vous souhaitez les conserver.

## Technologies

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [PrimeVue](https://primevue.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Déploiement sur [Vercel](https://vercel.com/)

## Lancer le projet en local

### Prérequis

- [Node.js](https://nodejs.org/)
- npm

### Installation

Clonez le dépôt, puis installez ses dépendances :

```bash
git clone https://github.com/GuGules/whereismytime.git
cd whereismytime
npm install
```

Démarrez le serveur de développement :

```bash
npm run dev
```

Vite affichera l’adresse locale à ouvrir dans votre navigateur.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Vérifie les types TypeScript et construit l’application |
| `npm run preview` | Prévisualise la version de production en local |

Pour créer une version de production :

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier `dist/`.

## Déploiement

Le projet est déployé sur Vercel. Pour publier votre propre instance, vous pouvez importer le dépôt dans Vercel et utiliser les paramètres de build par défaut de Vite.

## Auteur

Projet créé par [Jules Pillot](https://jules-pillot.fr/).

## Licence

Licence MIT