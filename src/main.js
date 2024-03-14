const RegexValidaEmail = /^\w+@\w+\.[a-zA-Z]{2,}$/;

function verificaEmail( email) {
    if (!email.match(RegexValidaEmail)) {
        return "EMAIL NÃO ESTÁ CORRETO!";
    }
    return "EMAIL ESTÁ CORRETO!";
}

module.exports = verificaEmail;