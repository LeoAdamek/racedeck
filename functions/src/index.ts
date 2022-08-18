import * as functions from "firebase-functions";

export const loginHandler = functions.auth.user().beforeSignIn(
    (user, _context) => {
      functions.logger.info(`Checking additional auth data for ${user.uid}`);
    }
);

export const importRfactor2Results = functions.https.onCall((data, context) => {
  functions.logger.info(`Importing rFactor2 results data for ${context.auth?.uid}`)

})
