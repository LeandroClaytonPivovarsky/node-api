const Termodinamica = require('./termodinamica')


test('Deve retornar os valores correto', () => {
    
    const termodinamica = new Termodinamica();

    expect(termodinamica.toKelvin(23,'C')).toEqual("296K");
    expect(termodinamica.toKelvin(32, 'F')).toEqual("273K");

    expect(termodinamica.toCelcius(5,'F')).toEqual("-15C");
    expect(termodinamica.toCelcius(296, 'K')).toEqual("23C");

    expect(termodinamica.toFahrenheit(45,'C')).toEqual("113F");
});

