const Termodinamica = require('./termodinamica')


test('Deve retornar os valores correto', () => {
    
    const termodinamica = new Termodinamica();

    expect(termodinamica.toKelvin(23,'C')).toEqual("296K");

    expect(termodinamica.toCelcius(5,'F')).toEqual("-15C");

    expect(termodinamica.toFahrenheit(45,'C')).toEqual("113F");
});

