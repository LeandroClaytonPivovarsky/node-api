const RegexCaracteresEspeciais = /[^a-zA-Z 0-9]+/g

function verificaSenha(senha) {
    
    if (senha.length < 6 || !senha.match(RegexCaracteresEspeciais)) {
        return "A SENHA É BEM DA FRAQUINHA!";
    } 

    return "A SENHA TÁ BOAZINHA ATÉ";
}

module.exports = verificaSenha;