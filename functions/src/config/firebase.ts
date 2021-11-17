import * as admin from 'firebase-admin';
// import * as functions from 'firebase-functions';

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey:"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCdp3t5P6OTJNpZ\\nkhrVE5ScMJOkOt0e/LJ3JSiSB8F31lq+lG9zk/QtR+dA+R5qCtCtU9ASSNnG4TXQ\\n40FzWFc0P+2RoCumEg3xWNHuNgLAR+08rj6uQR+ws0gwRSEy/dX7MZy6fXwCG+ei\\n4XkGG6kh7DzTVV36HJH9PgUEzfg5/gRwPnrSqBJgRAA+/dP3uIMu71sruOIzr3xy\\nX/s0xkw93feQQoPdgSFMPzFTu5hAMTuKzHZAyK3M7SKS1yJlnv5y9B9wUvnLgpJm\\nTFG5gaqgjjsitHc5zRjSGfoTcS6tGKsg1WB2IdeuWEjd+VyvIWXWnvmwwKXtGwCO\\nwXU3C+CZAgMBAAECggEAGbA3Qk5y94BDGTfhVLmCtuCDbiMunI9NqnRM5Ak3e7Cw\\ndeqh2RH78NTigt0Uw5qiM1vmGinyB6HyrugYu2li7DSZH+gatKNZz5WgFKc1qOG6\\nGkUaGYgAWJPIk3TwL+rZzxBfxVNlEsLmlM0VzJT9PiB22Mie2NOG8N4GMKjkZYO+\\nERE5Cs60KjSLginwL8qr2mvJAoeMb0iVTHovU5/B76uY3NdJ2MgcIKevPl/BtTyE\\nHrhEROEd72jen+wJUEXMswilcxtsw5nbhdwRdFiY1NxoChiCY2Rbfvunj37QFVzP\\nHjevovFNuXoIkv3z9W4x0OcokUN/ElbxQtJL8nvwcQKBgQDbDZjd6BdZKlJRTLAf\\nKrfFgOyxXQKj3tZy3fJxtxtZhPQs9lUNbgBAjbd8H0mYpkXpEDHCzmfrnGTzLfLx\\na5GOQNlWZk2MBOlx/DlhWOtf9H8OH57lT+5TOEb6yyJ++ZIaJMCCmax1RW5wo43b\\n/pubvwpKnu4JapzVHm5KqaYAzwKBgQC4PsSyAwYevRpdTzA2BZtLq3ZCSM0XNBeb\\n6u9ZBaH+Ja6c+mQ1YxYg0Fata5NFYwwuQAFEDn0z+AxW8lUXNNLbWeZJ7I+1VauX\\nQ3BzQpZsW/WtzJKJq1CO/Xn69KodE/jDKNweNKggl9er/1JfRRqRcQZYPsM6hySu\\nEMNTWgjSFwKBgQCofR/s5701x1jD0fHSN0BdORpWHk2OkDNw7QizsPzncV2DTAIF\\nr2ugO6E7ZrFsKdCyQNOVnL/QOV5oshog2fV+bqD9VPkmzwxksXXNS+DX0K79xRKq\\nHT4aYrot45toAT0AwO4WRm+hUENvfk36Pi+gr2QSG4bKVWfGgX6iDTVzfwKBgQCR\\nQgNnaRTpJSPlDuqunKr79JmO1sDDG3HFnmrHn7ZAncrVvl9E6/LlOfwsS5TXbqiK\\nyjF1S4sQbu6jmfjWC/J1t6HlBFmkmH9pCWVdqdDYa4P9WzzoxyUDJvqFjWGU/Urx\\n6oPoWJF46N3Dn898hwnUQuzCo/DdcvDLPzIPw/sSTwKBgQDMVjcvk59BesI8V10/\\nn6CDU+Awg7/495Jq3HjL39B0m0hDx6vupURac+B8J3/W/oX49AEJMnWqXTnORKNo\\nc1600s+g0et67MGOIUYV24X/TnLj9JhDydpKcftrVfFHJyXsv4sE8KbJIoFT9pvY\\nnX5wqbRcGiaJO92KZmn4y8F9lg==\\n-----END PRIVATE KEY-----\\n".replace(/\\n/g, '\n'),
        projectId: "couplet---dev",
        clientEmail: "firebase-adminsdk-rrwmt@couplet---dev.iam.gserviceaccount.com"
    }),
    databaseURL: `https://couplet---dev.firebaseio.com`
});

// admin.initializeApp({
//     credential: admin.credential.cert({
//         privateKey:config.private.key.replace(/\\n/g, '\n'),
//         projectId: config.project.id,
//         clientEmail: config.client.email
//     }),
//     databaseURL: `https://${functions.config().project.id}.firebaseio.com`
// });

const db = admin.firestore();
export {admin,db}