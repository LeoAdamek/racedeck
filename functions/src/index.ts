import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";
import * as _ from 'lodash';

const app = initializeApp();

export const generateLap = functions.https.onRequest(async (req, res) => {
})


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });