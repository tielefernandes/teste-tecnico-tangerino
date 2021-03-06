const { I } = inject();

const XPATH_SIGNIN_A = `//a[@class = 'login']`;
const ID_EMAILCREATE_INPUT = `#email_create`;
const ID_CREATEACCOUNT_BUTTON = `#SubmitCreate`;
const ID_GENDERMR_DIV = `#uniform-id_gender1`;
const ID_CUSTOMERFIRSTNAME_INPUT = `#customer_firstname`;
const ID_CUSTOMERLASTNAME_INPUT = `#customer_lastname`;
const ID_EMAIL_INPUT = `#email`;
const ID_PASSWORD_INPUT = `#passwd`;
const ID_FIRSTNAME_INPUT = `#firstname`;
const ID_LASTNAME_INPUT = `#lastname`;
const ID_COMPANY_INPUT = `#company`;
const ID_PRINCIPALADDRESS_INPUT = `#address1`;
const ID_OPTIONALADDRESS_INPUT = `#address2`;
const ID_CITY_INPUT = `#city`;
const ID_STATE_SELECT = `#id_state`;
const ID_ZIPCODE_INPUT = `#postcode`;
const ID_MOBILEPHONE_INPUT = `#phone_mobile`;
const ID_REGISTRER_BUTTON = `#submitAccount`;
const ID_SEARCH_INPUT = `#search_query_top`;
const XPATH_SEARCH_BUTTON = `//form[@id='searchbox']/descendant::button`;
const XPATH_CARDPRODUCT_A = `//a[@class='product_img_link']]`;
const XPATH_ADDTOCART_BUTTON = `//span[text()='Add to cart']`;
const XPATH_PROCEDTOCHECKOUT_BUTTON = `//span[contains(text(),'Proceed to checkout')]`;
const XPATH_CONTINUESHOPPING_BUTTON = `//span[@title='Continue shopping']`;
const XPATH_PRODUTO_DIV = `//div[@class='primary_block row']`;
const XPATH_LISTICON_A = `//i[@class='icon-th-list']`;
const XPATH_PROCEDTOCHECKOUT2_BUTTON = `//span[text()='Proceed to checkout']`;
const ID_AGREETERMS_DIV = `#uniform-cgv`;
const XPATH_CONFIRMORDER_SPAN = `//span[text()='I confirm my order']`;
const MENSAGEMCONFIRMACAOPEDIDO = `//p[text()='Your order on My Store is complete.']`;

module.exports = {
  acessarPaginaSignin() {
    I.waitForVisible(XPATH_SIGNIN_A);
    I.click(XPATH_SIGNIN_A);
    I.waitForText(`Authentication`);
  },

  cadastroConta(parametros, email) {
    if (email == parametros.emailInvalido) {
      I.fillField(ID_EMAILCREATE_INPUT, parametros.emailInvalido);
      I.click(ID_CREATEACCOUNT_BUTTON);
      I.see(`Invalid email address.`);
    }
    if (email == parametros.emailValido) {
      I.fillField(ID_EMAILCREATE_INPUT, parametros.emailValido);
      I.click(ID_CREATEACCOUNT_BUTTON);
      I.wait(5);
    }
  },

  formulario(parametros) {
    this.personalInformation(parametros);
    this.address(parametros);
  },

  personalInformation(parametros) {
    I.click(ID_GENDERMR_DIV);
    I.fillField(ID_CUSTOMERFIRSTNAME_INPUT, parametros.firstName);
    I.fillField(ID_CUSTOMERLASTNAME_INPUT, parametros.lastName);
    I.seeElement(ID_EMAIL_INPUT, parametros.emailValido);
    I.fillField(ID_PASSWORD_INPUT, parametros.password);
  },

  address(parametros) {
    I.fillField(ID_FIRSTNAME_INPUT, parametros.firstName);
    I.fillField(ID_LASTNAME_INPUT, parametros.lastName);
    parametros.company && I.fillField(ID_COMPANY_INPUT, parametros.company);
    I.fillField(ID_PRINCIPALADDRESS_INPUT, parametros.address);
    parametros.secondeAddress &&
      I.fillField(ID_OPTIONALADDRESS_INPUT, parametros.secondeAddress);
    I.fillField(ID_CITY_INPUT, parametros.city);
    I.click(ID_STATE_SELECT);
    I.pressKey("K", "A", "N");
    I.pressKey("Enter");
    I.fillField(ID_ZIPCODE_INPUT, parametros.zipCode);
    parametros.additionalInformation &&
      I.fillField(ID_MOBILEPHONE_INPUT, parametros.mobilePhone);
    I.click(ID_REGISTRER_BUTTON);
  },

  buscarProduto(parametros) {
    I.fillField(ID_SEARCH_INPUT, parametros.product);
    I.click(XPATH_SEARCH_BUTTON);
    I.wait(3);
    I.waitForText("Categories");
    I.click(XPATH_LISTICON_A);
  },

  adicionarProdutoCarrinho() {
    I.click(XPATH_ADDTOCART_BUTTON);
    this.modalConfirmacaoProduto('Sim');
  },

  modalConfirmacaoProduto(fecharCarrinho) {
    I.wait(4);
    (fecharCarrinho == 'Sim') ? I.click(XPATH_PROCEDTOCHECKOUT_BUTTON) : I.click(XPATH_CONTINUESHOPPING_BUTTON);
  },

  finalizarPedido(){
    I.click(XPATH_PROCEDTOCHECKOUT2_BUTTON);
    I.click(XPATH_PROCEDTOCHECKOUT2_BUTTON);
    I.checkOption(ID_AGREETERMS_DIV);
    I.click(XPATH_PROCEDTOCHECKOUT2_BUTTON);
    this.opcaoPagamento('Pay by check.');
  },

  /**
   * fun????o para escolher a forma de pagamento, quando invocada passar o parametro
   * @param {*} opcao = 'Pay by bank wire' ou 'Pay by check.'
   */
  opcaoPagamento(opcao) {
    let xpath_opcao_a = `//a[@title='${opcao}']`;
    I.click(xpath_opcao_a);
    I.click(XPATH_CONFIRMORDER_SPAN);
    I.waitForVisible(MENSAGEMCONFIRMACAOPEDIDO);
  }
};


