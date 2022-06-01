
Feature("cenários teste técnico Tangerino");

var faker = require('faker');
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const address = faker.address.streetAddress();
const email = faker.internet.email(firstName);

Scenario("cadastro de usuário com sucesso", ({ I, testPage }) => {
  I.amOnPage("http://automationpractice.com/index.php");
  testPage.acessarPaginaSignin();
  testPage.cadastroConta(parametros.dados, parametros.dados.emailValido);
  testPage.formulario(parametros.dados)
});

var parametros = {
  dados: {
    emailValido: `${email}`,
    emailInvalido: "emailerrado",
    firstName: `${firstName}`,
    lastName:  `${lastName}`,
    password: "123456789",
    company: "Tangerino",
    address: `${address}`,
    city: "Belo Horizonte",
    state: "Kansas",
    zipCode: "66012",
    mobilePhone: "112233445566",
    additionalInformation: 'espero que meu teste agrade vocês'
  },
};
