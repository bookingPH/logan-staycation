export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDjxQaLXKfuerR3XRgcWVbB6N0HpluKP5Y",
  authDomain: "lester-booking-system.firebaseapp.com",
  projectId: "lester-booking-system",
  appId: "1:441276126461:web:7c2f24f42aeaf140e25a94",
  messagingSenderId: "441276126461"
};

const _urlParams = new URLSearchParams(window.location.search);
export const CLIENT_ID = _urlParams.get('clientId') || 'logan-staycation';
