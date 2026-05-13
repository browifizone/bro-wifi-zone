# BRO WIFI ZONE

Site officiel BRO WIFI ZONE — Internet CPE, Starlink, MikroTik, WiFi et Forum Réseaux.

## Déploiement

1. Uploade tout le contenu de ce dossier dans GitHub.
2. Connecte le repository à Vercel.
3. Clique Deploy.

## Images

Les images optimisées sont dans le dossier `public`.

## WhatsApp

Le numéro configuré est : +261 38 87 957 83.

## Forum Réseaux

Le bouton "Rejoindre le Forum Réseaux" pointe actuellement vers WhatsApp.
Quand le groupe WhatsApp sera créé, remplace dans `app/page.js` :

```js
const FORUM_GROUP_LINK = WHATSAPP_LINK;
```

par :

```js
const FORUM_GROUP_LINK = "https://chat.whatsapp.com/TON_LIEN";
```
