import * as firebase from 'firebase';

const prodConfig = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-AUTH-DOMAIN',
  databaseURL: 'YOUR-DATABASE-URL',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET (not required)',
  messagingSenderId: 'YOUR-MESSAGING-SENDER-ID',
};

const devConfig = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-AUTH-DOMAIN',
  databaseURL: 'YOUR-DATABASE-URL',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET (not required)',
  messagingSenderId: 'YOUR-MESSAGING-SENDER-ID',
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
