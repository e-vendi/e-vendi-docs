---
id: getOrganization
title: Pegar dados da empresa
---

## Método

**/getOrganization**

`POST` https://e-vendi.com.br/api/getOrganization

---

## Conceituação

Buscar dados de uma empresa.

Esse método é responsável por trazer os dados das empresas solicitadas.

---

## Atributos

:::note

**externalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o externalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId\* | string | Seu código de identificação no e-vendi |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "externalId": "seu id"
}
```

---

## Response

### 200

### Store

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Identificador da loja |
| about | string | HTML ou texto informado para a criação da página 'sobre' da loja |
| hideBrand | boolean | Habilita/Desabilita marca dentro de detalhes do produto e catálogos|
| active | boolean | Identifica se a loja está habilitada/desabilitada |
| activeWithDraw | boolean | Identifica se pode ser feito retirada do produto na loja |
| orderReceiptSetup | orderReceiptSetup | utilizado para configurar recebimento personalizado quando loja oferecer entrega presencial |
| orderDeliverySetup | orderDeliverySetup | utilizado para configurar entrega personalizado quando loja oferecer entrega |
| captureLead | captureLead | Informações sobre a captação de lead |
| cartExpirationHours | number | Quantidade de horas para o carrinho expirar |
| createdAt | number | Data de criação da loja |
| deliveryFee | float | Taxa de entrega ( Valor total, em reais R$) |
| descriptionSEO | string | Descrição do SEO para a sua página |
| domainName | string | Nome escolhido para o domínio |
| domainHost | string | Nome do domínio |
| enableCartExpiration | boolean | Identifica se o carrinho expira |
| enableEcommerceMode | boolean | Identifica modo e-commerce |
| ecommerceCatalogId | string | ID do catálago |
| about | boolean | Identifica se existe conteúdo 'sobre' para a loja |
| enableExchangePolicy | boolean | HTML ou texto informado para a criação da página 'política de troca' da loja |
| enableMsgTracking | boolean | Identifica se cliente receberá notificações de seu pedido por whatsapp |
| enableMsgTrackingByEmail | boolean | Identifica se cliente receberá notificações de seu pedido por e-mail |
| msgTrackingFiscalNote | string | Mensagem que o cliente receberá sobre a nota fiscal |
| msgTrackingNewOrder | string | Mensagem que o cliente receberá sobre o pedido feito |
| msgTrackingOrderInvoiced | string | Mensagem que o cliente receberá sobre pedido aprovado |
| msgTrackingReversed | string | Mensagem que o cliente receberá sobre pedido estornado |
| msgTrackingShipping | string | Mensagem que o cliente receberá quando o pedido for entregue à transportadora |
| exchangePolicy | string | Conteúdo sobre a política de troca da loja, pode ser informado texto ou HTML |
| facebook | string | Nome da loja no facebook |
| facebookDomainTxt | string | Código de validação do facebook business |
| favicon | string | Atributo do favicon da sua loja |
| freeShipping | freeShipping | Configurações para frete grátis. Pode ser feito por região ou um intervalo de CEP's |
| freeShippingValue | number | Valor mínimo da compra para ter frete grátis |
| freightCepOrigin | string | CEP do frete de origem |
| googleAnalytcs | string | Código para o google tag manager |
| gAnalytcs | string | Código para o google analytics |
| generalRules | generalRules | Você pode criar desconto automaticamente baseado em algumas condições que escolher |
| instagram | string | Nome da loja no Instagram |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| keywords | array&#60;string&#62; | Palavras chave para o SEO da loja |
| logo | string | Atributo para enviar a logo da sua empresa |
| modality | string | Modo do ecommerce, se mostra preço ou não, se tem dois preços etc.. aceita três tipos de dados ( ATACADO, VAREJO ou ATACAREJO ) |
| name | string | Nome da sua loja |
| organizationFreightMode | string | Este atributo pode receber quatro tipos de dados, sendo eles: CORREIOS ( Os cadastros dos seus produtos terão informações de peso e dimensões, possibilitando o cálculo do frete no ato da compra de seus clientes. ), FIX_TAX ( Todos os clientes pagam a mesma taxa de entrega, isso é muito usado em empresas que tem seus próprios entregadores na cidade. ), DINAMIC ( O frete varia entre correios e taxa fixa, sendo taxa fixa para pedidos da mesma cidade e correios de outras cidade. ), TO_CALCULATE ( O valor do frete ficará a combinar com seu cliente. ) |
| freightCepOrigin | string | CEP de origem, geralmente o endereço da loja, de onde saiu o produto para calculo de frete, é **obrigatório** caso você tenha selecionado organizationFreightMode CORREIOS ou DINAMIC |
| organizationMinimalItens | number | Indica a quantidade mínima de itens para poder finalizar uma compra |
| organizationMinimalPrice | number | Valor mínimo para compra |
| organizationMinimalPriceWholesale | number | Valor mínimo para atacado quando estiver na modalidade ATACAREJO. Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, então nesse atributo será configurado o valor mínimo para vendas de clientes que são somente ATACADO. |
| organizationSlogan | string | Slogan da loja |
| parcelRules | creditCard | Configurações de parcelamento para a loja |
| phone | string | O painel administrativo do e-vendi fica em um aplicativo, por isso é necessário informar o número que será feito a autentificação |
| plugChatCode | string | Código de integração do PlugChat |
| postbackNewDealer | string | Atributo que armazena uma URL de uma API que o e-vendi vai chamar qando o cliente que se cadastrou no e-commerce solicitou ser um revendedor |
| integratorLogo | string | Atributo para mandar a logo do integrador, esta logo é para p cabeçalho e rodapé apenas |
| presentialDeliveryTime | number | Tempo de entrega presencial |
| rewardBar | rewardBar | Barra de benefícios mostra banners com links para descontos |
| showOnlyProductsAvailable | boolean | Identifica se mostra apenas os produtos disponíveis ou não |
| storeMode | string | Experiencia da compra, aceita dois tipos de dados ( ATACADO ou VAREJO ) |
| titleSEO | string | Título para SEO |
| requireStateAndCity | boolean | Identifica se no cadastro de usuário é obrigatório o cliente informar estado e cidade |
| zApi | zApi | Configurações de integração com o zApi |
| columnsCatalog | string | Quantidade de colunas que serão exibidas no catálogo. (3 ou 4). O default é 4 |
| imageShape | string | Formato que a imagem terá no catálogo. (RECTANGULAR ou SQUARE). Default é RECTANGULAR |
| freightConfig | array&#60;FreightConfig&#62; | Um array contendo configurações de frente sendo eles retail ou wholesale, se a loja estiver com modalidade ATACAREJO é possível distiguir os frentes pelo retail ou wholesale, mas se não estiver o padrão será o retail |
| informSellerOnSale | boolean | Habilita para pedir que o cliente informe um vendedor na tela de pagamento. Obs. verificar as API`s de vendedores |

### FreightConfig

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| mode | string | Modalidade de frente, podendo ser ('FIX_TAX', 'TO_CALCULATE', 'DINAMIC', 'CORREIOS' ). São os mesmos do atributo organizationFreightMode. |
| freightCepOrigin | string | CEP de origem, geralmente o endereço da loja, de onde saiu o produto para calculo de frete, é **obrigatório** caso você tenha selecionado mode CORREIOS ou DINAMIC |
| freightCepOriginRaw | string | É o atributo freightCepOrigin sem formatação |
| deliveryFee | string | Taxa de entrega ( Valor total, em reais R$) |
| deliveryFeeRaw | number | É o atributo deliveryFee sem formatação |
| type | string | Tipo do frete, pode ser 'retail', 'wholesale' |

### Bank

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| bankCode | integer | Código do banco (ex: 333) |
| accountType | integer | Tipo da conta (ex: Conta corrente) |
| agency | integer | Agência do banco (ex: 3333) |
| dvAgency | integer | Número da agência |
| accountNumber | integer | Número da conta (ex: 33333) |
| dvAccount | integer | Número da conta (ex: 3) |
| holderName | string | Nome da pessoa |
| document | integer | CPF da pessoa |
| payments | string | Tipo de pagamento, pode receber quatro tipo de dados ( BOLETO, CREDIT_CARD, PRESENTIAL, PIX ) |
| configPayments | ConfigPayments | Configuração de pagamentos quando a modalidade da loja for ATACAREJO. Por padrão o retail é aplicado quando não for atacarejo |

### ConfigPayments

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| retail | array&#60;string&#62; | Um array com os tipos de pagamento informado para opção de varejo |
| wholesale | array&#60;string&#62; | Um array com os tipos de pagamento informado para opção de atacado |

### CaptureLead

| Atributos      |  Tipo   | Descrição                                         |
| :------------- | :-----: | :------------------------------------------------ |
| active         | boolean | captura lead sim ou não                           |
| title          | string  | título da lead                                    |
| subtitle       | string  | subtítulo da lead                                 |
| description    | string  | descrição do que você deseja que apareça na lead  |
| successMessage | string  | Mensagem que o cliente receberá ao aceitar a lead |

### orderReceiptSetup

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Se deve mostrar mensagem personalizada |
| message | string | mensagem personalizada para exibição quando selecionado pagamento presencial |


### orderDeliverySetup

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Se deve mostrar mensagem personalizada |
| message | string | mensagem personalizada para exibição quando selecionado entrega |

### FreeShipping

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Habilita/Desabilita frete grátis para região |
| minimalValue | number | Valor mínimo para ter frete grátis |
| name | string | Nome para a opção de frete grátis |
| type | string | Tipo do frete. Pode ser ('wholesale' ou 'retail'). O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as configurações de frete do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo. |
| region | string | Nome da região para o frete grátis. Se fizer por região não informar cepStart nem cepEnd |
| cepStart | string | CEP inicial para frete grátis |
| cepEnd | string | CEP final para frete grátis |

### generalRules

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| conditions | conditions | Aqui você pode criar condições para aplicar benefícios ao cliente |
| benefits | benefits | Aqui será informado os benefícios que o cliente terá com base na consição que você criou |
| type | string | Tipo para regras gerais ('wholesale' ou 'retail'). O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as regras gerais do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo. |
| id | string | Id da regra |

### conditions

:::note

Conditions é na estrutura de array, porém só será aceito o primeiro índice da condição. Para cadastrar mais regras basta enviá-las em generalRules, pois ele é um array e todas as regras devem estar nele com seus types, conditions e benefits e id.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| operator | string | Operador para sua condição. ('>', '<', '=', '>=', '<=', '!=', 'contains') |
| type | string | Tipo da condição (VALUE ou PAYMENT_TYPE). Se type for "VALUE" então o atributo value deve receber o valor para atender a condição do operator |
| value | string | Valor para a condição (boleto, presential, pix) |
| startParcel | number | Parcela inicial |
| endParcel | number | Parcela final |

### benefits

:::note

Benefits é na estrutura de array, porém só será aceito o primeiro índice do benefício. Para cadastrar mais regras basta enviá-las em generalRules, pois ele é um array e todas as regras devem estar nele com seus types, conditions e benefits e id.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| type | string | Tipo do benefício, pode ser ('DISCOUNT' ou 'FREIGHT_FREE') |
| operator | string | Pode ser ('PERCENTAGE' ou 'VALUE') |
| value | number | Valor será conforme o operator informado. |

### creditCard

| Atributos   |    Tipo     | Descrição                                        |
| :---------- | :---------: | :----------------------------------------------- |
| parcelRules | parcelRules | Configurações de parcelas para cartão de crédito |

### parcelRules

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| start | number | Valor inicial (Ex: De X ate 100) |
| end | number | Valor Final (Ex: De 0 ate X) |
| installments | number | Parcelas permitidas para o intervalor definido |
| type | string | Tipo para regra de parcelamento no cartão ('wholesale' ou 'retail'). O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as regras de parcelamento do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo |

### RewardBar

| Atributos |  Tipo  | Descrição                                   |
| :-------- | :----: | :------------------------------------------ |
| link      | string | Link para o qual será direcionado ao clicar |
| image     | string | Link para carregar a imagem do banner       |

### zApi

| Atributos      |  Tipo   | Descrição                       |
| :------------- | :-----: | :------------------------------ |
| integratorName | string  | Nome do integrador              |
| notifyStore    | boolean | Habilita/Desabilita notificação |
| phone          | string  | Número do celular da integração |
| token          | string  | Token para a integração         |

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId | integer | Seu código de identificação no e-vendi |

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getOrganization.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
