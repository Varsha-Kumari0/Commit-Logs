var admin = require("firebase-admin");

function getServiceAccountFromEnv() {
  // Prefer a single JSON env var (safer for some deployment setups)
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } catch (err) {
      // If parsing fails, continue to try individual vars below
    }
  }

  const client_email = process.env.FIREBASE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;
  const project_id = process.env.FIREBASE_PROJECT_ID;

  // Guard against undefined and only call replace when we have a string
  const private_key = rawPrivateKey ? rawPrivateKey.replace(/\\n/g, "\n") : undefined;

  if (client_email && private_key && project_id) {
    return { client_email, private_key, project_id };
  }

  return null;
}

if (!admin.apps.length) {
  const serviceAccount = getServiceAccountFromEnv();

  if (!serviceAccount) {
    throw new Error(
      'Firebase service account is not configured. Set either `FIREBASE_SERVICE_ACCOUNT` (JSON) or `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, and `FIREBASE_PROJECT_ID` environment variables.'
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();
