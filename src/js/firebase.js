// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set, child, get, push, onValue } from 'firebase/database';
import { elems } from './elems';
const firebaseConfig = {
  apiKey: 'AIzaSyBgFVW820S_orUiL-KRqyb88sulmcWmLHE',
  authDomain: 'fir-962a4.firebaseapp.com',
  databaseURL: 'https://fir-962a4-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'fir-962a4',
  storageBucket: 'fir-962a4.appspot.com',
  messagingSenderId: '482333126963',
  appId: '1:482333126963:web:cb3e5e22413fc279c48e46',
  measurementId: 'G-V4MD76QV4Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase();
const googleBtn = document.querySelector('.googleBtn');
const registerFormRef = document.querySelector('.register-form');
const authFormRef = document.querySelector('.auth-form');
const userDetails = document.querySelector('#userDetails');
const userSubmit = document.querySelector('#userform');
const userBtn = document.querySelector('#userBtn');

userSubmit.addEventListener('submit', e => {
  e.preventDefault();
  login();
});
function createUser() {
  const email = registerFormRef.email.value;
  const password = registerFormRef.password.value;
  const displayName = registerFormRef.name.value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!');
    return;
    // Don't continue running the code
  }
  if (validate_field(displayName) == false) {
    alert('One or More Extra Fields is Outta Line!!');
    return;
  }
  createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    user.displayName = displayName;
    writeUserData(user);
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  });
}

function setOnDatabase(data) {
  onAuthStateChanged(auth, user => {
    if (user) {
      const library = ref(database, 'users/' + user.uid + '/library' + '/watchedFilm');
      push(ref(database, 'users/' + user.uid + '/library' + '/watchedFilm'), {
        watchedFilm: data,
      });
      console.log(library);
    } else {
      alert('SET: Enter on your account');
    }
  });
}

function getOnDatabase() {
  const user = auth.currentUser;
  let userLibrary;
  const library = ref(database, 'users/' + user.uid + '/library' + '/watchedFilm');
  onValue(library, snapshot => {
    snapshot.forEach(childSnapshot => {
      const childData = childSnapshot.child('/watchedFilm').toJSON();
      userLibrary = childData;
      console.log(childData);
    });
  });
  console.log(userLibrary);
  return userLibrary;
}


// registerForm
function login() {
  const email = userSubmit.email.value;
  const password = userSubmit.password.value;
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!');
    return;
    // Don't continue running the code
  }
  signInWithEmailAndPassword(auth, email, password).then(userCredential => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    updateProfile(auth.currentUser, {
      last_login: Date.now(),
    });
  });
}

function writeUserData(user) {
  set(ref(database, 'users/' + user.uid), {
    username: user.displayName,
    email: user.email,
  })
    .then(() => {
      alert('Welcome');
    })
    .catch(error => {
      alert('error' + error);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// googleRegister
// googleBtn.addEventListener('click', e => {
//   e.preventDefault();
//   signInWithPopup(auth, provider)
//     .then(result => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       writeUserData(user);
//       e.currentTarget.reset();
//     })
//     .catch(error => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// });

// registerFormRef.addEventListener('submit', e => {
//   e.preventDefault();
//   createUser();
//   e.currentTarget.reset();
// });

onAuthStateChanged(auth, user => {
  if (user) {
    const currentUser = ref(database, 'users/' + user.uid + '/username');
    onValue(currentUser, snapshot => {
      const data = snapshot.val();
      userDetails.innerHTML = `<h3>Hello ${data}!</h3> <p>User ID: ${user.uid}</p>`;
    });
  } else {
    userDetails.innerHTML = ` `;
  }
});

// Validate Function

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

export { setOnDatabase };
export { getOnDatabase };
