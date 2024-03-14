const verificadorSenha = require('./senha');

test('TESTANDO PARA VER SE ELE FUNCIONA', () => {
    
    expect(verificadorSenha('1234')).toBe("A SENHA É BEM DA FRAQUINHA!");
    
    expect(verificadorSenha('LEANDRAO123')).toBe("A SENHA É BEM DA FRAQUINHA!");

    expect(verificadorSenha('LEANDRÃO_123')).toBe("A SENHA TÁ BOAZINHA ATÉ");
});
''
