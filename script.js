// Firebase SDK Configuration
// Replace with your Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
