function login() {
    var user, password
  
    user = document.getElementById("usuario").value
    password = document.getElementById("senha").value

    
  
    if (user == "adm" && password == "adm") {
      var nomeUsuario = "#ADM";
      sessionStorage.setItem("nomeUsuario", nomeUsuario);
      window.location = "index2.html";
  } else if (user == "TodDZAUM" && password == "todd") {
      var nomeUsuario = "#TodDZAUM";
      sessionStorage.setItem("nomeUsuario", nomeUsuario);
      window.location = "index2.html";
    } else if (user == "Bots" && password == "ots") {
      var nomeUsuario = "#Bots";
      sessionStorage.setItem("nomeUsuario", nomeUsuario);
      window.location = "index2.html";
  } else if (user == "Jeff" && password == "jeffaum") {
      var nomeUsuario = "#Jeff";
      sessionStorage.setItem("nomeUsuario", nomeUsuario);
      window.location = "index2.html";
  } else {
      alert("LOGIN INVÁLIDO");
  }

  }