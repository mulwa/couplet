import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as config from '../../env.json';

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey:config.private.key.replace(/\\n/g, '\n'),
        projectId: config.project.id,
        clientEmail: config.client.email
    }),
    databaseURL: `https://${functions.config().project.id}.firebaseio.com`
});

const db = admin.firestore();
export {admin,db}