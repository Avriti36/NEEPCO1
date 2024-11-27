function registerUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    alert('User registered!\nUsername: ' + username + '\nPassword: ' + password);
  }
  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            registerUser(); // Call the registerUser function or perform login logic
        });
    }
});

function registerUser() {
    // Your login logic goes here
    alert('Login logic goes here!');
}

  
  function redirectTo(page) {
    window.location.href = page;
  }document.addEventListener('DOMContentLoaded', function () {
    // Assume you have a function to get the username, e.g., getUsername()
    const username = getUsername();
  
    // Update the span with the obtained username
    const dashboardUsernameSpan = document.getElementById('dashboardUsername');
    if (dashboardUsernameSpan) {
      dashboardUsernameSpan.textContent = username;
    }
  });
  
  function getUsername() {
    // Implement your logic to retrieve the username, e.g., from a user session
    // For now, using a dummy value 'avriti'
    return 'avriti';
  }
  
  function redirectTo(page) {
    // Implement your logic to redirect to the specified page
    console.log(`Redirecting to ${page}`);
  }
  function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Store the username in session storage
    sessionStorage.setItem('username', username);
  
    // Redirect to user.html
    window.location.href = `user.html?username=${username}`;
  }
// Check if the element exists before adding the event listener
const confirmationForm = document.getElementById('confirmationForm');
if (confirmationForm) {
    confirmationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        verifyOTP(); // Call the verifyOTP function
    });
}

function verifyOTP() {
    // Implement OTP verification logic here
    alert('OTP verification successful! User registered.');
    // Redirect to the user page or perform any other post-registration actions
    window.location.href = 'user.html';
}

function sendOTP() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send a request to the server to generate and send OTP
    fetch('/generate-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            alert(`An OTP has been sent to ${email}. Please check your email and enter the OTP to complete registration.`);
            localStorage.setItem('registrationData', JSON.stringify({ name, email, username, password }));
            window.location.href = 'registration_confirmation.html';
        } else {
            alert('Error generating OTP. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}
function redirectToLogin() {
  // Replace 'login-portal.html' with the actual login portal URL
  window.location.href = 'landingpage.html';
}
function validateFileSize() {
  var fileInput = document.getElementById("file-upload");
  var fileSizeError = document.getElementById("file-size-error");

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    var fileSizeInMB = fileInput.files[0].size / (1024 * 1024); // Convert to MB

    // Set your maximum file size limit (1 MB in this example)
    var maxSizeMB = 1;

    // Display a warning if the file size exceeds the limit
    if (fileSizeInMB > maxSizeMB) {
      fileSizeError.textContent = "Warning: File size exceeds the recommended limit (max: " + maxSizeMB + " MB)";
      // Uncomment the line below if you want to clear the selected file
      // fileInput.value = "";
    } else {
      fileSizeError.textContent = ""; // Clear any previous error messages
    }
  }
}
