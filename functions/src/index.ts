import * as functions from "firebase-functions";

export const loginHandler = functions.auth.user().beforeSignIn(
    (user, _context) => {
      functions.logger.info(`Checking additional auth data for ${user.uid}`);
    }
);
