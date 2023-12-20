//supabase

import { createClient } from "@supabase/supabase-js";
import userAuthUser from "src/composible/userAuthUser";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user, token } = userAuthUser();
  user.value = session?.user;
  //token.value = session.access_token;
});

export default function useSupabase() {
  return { supabase };
}

//Firebase

// import { boot } from "quasar/wrappers";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCdsuZkM3u7fgudsgUcmSrcuYt2uXRSkyQ",
//   authDomain: "sgdme-5baa2.firebaseapp.com",
//   projectId: "sgdme-5baa2",
//   storageBucket: "sgdme-5baa2.appspot.com",
//   messagingSenderId: "318742370847",
//   appId: "1:318742370847:web:82543b31f91d049303d32a",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const time = firebase.firestore.FieldValue.serverTimestamp;

// export { db, auth, time };

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// });
