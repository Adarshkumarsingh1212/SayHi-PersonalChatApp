// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf8fmHUMxumxnCF4AHyvNaEZUi0d_kT3U",
  authDomain: "adarshk627fag628.firebaseapp.com",
  projectId: "adarshk627fag628",
  storageBucket: "adarshk627fag628.firebasestorage.app",
  messagingSenderId: "757467919089",
  appId: "1:757467919089:web:53274bd6346ca4c858ef50",
  measurementId: "G-VCXEC0DBB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function submitForm() {
  const name = document.getElementById('name').value;
  const dob = new Date(document.getElementById('dob').value);
  const phone = document.getElementById('phone').value;

  if (name && dob && phone) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    document.getElementById('ageDisplay').innerText = `Your Age: ${age}`;
    document.getElementById('popup').style.display = 'block';
  } else {
    alert('Please fill all fields!');
  }
}

function verifyOTP() {
  const otp = document.getElementById('otp').value;
  if (otp === '1234') {
    alert('OTP Verified!');
    window.location.href = 'roleSelection.html';
  } else {
    alert('Invalid OTP. Try Again!');
  }
}
