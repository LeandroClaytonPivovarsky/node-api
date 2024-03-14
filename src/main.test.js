const verificaEmail = require('./main');

test("O EMAIL NÃO É PRA FUNFAR", () => {

    const result = verificaEmail("leandroclaytonpgmail.com");

    expect(result).toBe("EMAIL NÃO ESTÁ CORRETO!");




}) 

test('O EMAIL NÃO É PRA FUNFA/2', () => {
    const result = verificaEmail("leandroclaytonp@gmailcom");

    expect(result).toBe("EMAIL NÃO ESTÁ CORRETO!");
});


test('O EMAIL NÃO É PRA FUNFA/3', () => {
    const result = verificaEmail("leandroclaytonpgmailcom");

    expect(result).toBe("EMAIL NÃO ESTÁ CORRETO!");
});


test('O EMAIL É PRA FUNFA', () => {
    const result = verificaEmail("leandroclaytonp@gmail.com");

    expect(result).toBe("EMAIL ESTÁ CORRETO!");
});

test('Realizou a conversão Celcius -> Fahrenheit', () => {
    
});

