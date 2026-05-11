function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Identifiants simples pour l'admin
  if (user === "معلمة أسماء" && pass === "Dx2hdSYX") {
    document.getElementById("login").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  // Mettre le lien GitHub ici
    document.getElementById("downloadLink").href = "https://github.com/LENIIIG072/0QL4P4U03849/raw/main/Presentation%201.pptx";
  } else {
    alert("Accès refusé !");
  }
}

function logout() {
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("login").style.display = "block";
}
