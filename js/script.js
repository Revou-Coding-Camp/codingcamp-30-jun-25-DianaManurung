// Menampilkan nama di header saat pertama kali
window.onload = function () {
  const name = prompt("Masukkan nama Anda:");
  const welcomeText = document.getElementById("welcomeText");
  if (name) {
    welcomeText.innerText = `Hi ${name}, Welcome To Website`;
  }
};

// Menangani submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("message").value;
  const currentTime = new Date().toString();

  const resultHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("formResult").innerHTML = resultHTML;
});
