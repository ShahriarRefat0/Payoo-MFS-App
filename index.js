//login button functionality
document.getElementById("loginButton").addEventListener('click', function (e) {
  e.preventDefault()
  const mobileNumber = 12345678901;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberConverter = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById('pin-number').value;
  const pinNumberConverter = parseInt(pinNumberValue);
  
  if (mobileNumberConverter === mobileNumber && pinNumberConverter === pinNumber) {
    window.location.href = "./home.html"
  } else {
    alert('Invalid credentials');
  }
})