const soma = require("../src/math.js");

test("deve somar 2 + 2 e retornar 4", () => {
    //Arrange (organizar)
    const a = 2;
    const b = 2;

    //act (Agir)
    const resultado = soma (a, b);

    //Assert (verificar)
    experct(resultado).toBe(4);
});