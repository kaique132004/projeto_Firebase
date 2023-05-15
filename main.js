
// Aguarde o carregamento do documento
document.addEventListener("DOMContentLoaded", function () {
    // Obtenha referências para os elementos HTML

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Usuario Conectado!!");
        } else {
            var emailInput = document.getElementById("email");
            var passwordInput = document.getElementById("senha");
            var loginButton = document.getElementById("login-button");
            var logoutButton = document.getElementById("logout-button");

            var loginSenha = document.getElementById("login_senha");

            // Adicione um evento de clique para o botão de login
            loginButton.addEventListener("click", function () {
                var provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider)
                    .then(function (result) {
                        // O usuário fez login com sucesso
                        var user = result.user;
                        console.log("Usuário logado:", user.displayName);
                    })
                    .catch(function (error) {
                        // Ocorreu um erro durante o login
                        console.error("Erro de login:", error);
                    });
            });

            // Adicione um evento de clique para o botão de logout
            logoutButton.addEventListener("click", function () {
                firebase.auth().signOut()
                    .then(function () {
                        // O usuário fez logout com sucesso
                        console.log("Usuário deslogado");
                    })
                    .catch(function (error) {
                        // Ocorreu um erro durante o logout
                        console.error("Erro de logout:", error);
                    });
            });

            loginSenha.addEventListener("click", function () {
                var email = emailInput.value;
                var senha = passwordInput.value;

                firebase.auth().signInWithEmailAndPassword(email, senha)
                    .then(function (result) {
                        // O usuário fez login com sucesso
                        var user = result.user;
                        console.log("Usuário logado:", user.displayName);
                    })
                    .catch(function (error) {
                        // Ocorreu um erro durante o login
                        console.error("Erro de login:", error);
                    });
            });
        }
    })

});