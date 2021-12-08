---
id: getOrderById
title: Pegar pedido por ID
---

## Método

**/getOrderById**

`GET` https://e-vendi.com.br/api/getOrderById?integrationToken=SEU_TOKEN&env=dev&organizationExternalId=SEU_ID&orderId=ID_PEDIDO

---

## Conceituação

Pegar pedidos através do seu ID

Este método serve para buscar pedidos por ID do pedido.

---

## Atributos

:::note

organizationExternalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| orderId\* | string | ID do pedido |

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do pedido |
| freightDestination | string | Destino do frete |
| paymentStatus | string | Status do pagamento |
| customerDocument | string | CPF do cliente |
| freightMode | sring | Modo do frete |
| observation | string | Observação sobre o pedido |
| freightType | string | Tipo de frete |
| discount | integer | Desconto da compra |
| freight | float | Valor do frete |
| shipping | shipping | Informações sobre envio |
| value | float | Valor da venda |
| postbackPaymentUrl | url | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| payment | payment | Informações sobre o pagamento |
| coupons | array<string\> | Cumpom do pedido |
| isCompleted | boolean | Atributo d econfirmação de pedido |
| createdAt | timestamp | Data de criação do pedido |
| parcels | integer | Quantidade de parcelas do pagamento |
| products | array<products\> | Lista de produtos |
| version | string | Versão |
| subTotal | float | Valor do produto |
| paid | boolean | Atributo de confirmação de pagamento |
| postbackUrl | url | Webhook(Postback) necessário para a conexão |
| lowStock | array<lowStock\> | Estoque baixo |
| cartId | string | ID do carrinho |
| orderNumber | integer | Número da ordem de pedido |
| opened | boolean | Atributo de abertuda do pedido |
| organizationExternalId | string | ID da organização dentro do e-vendi |
| totalItens | integer | Total de produtos no pedido |
| paymentMethod | string | Método de pagamento |
| customer | customer | Informações sobre cliente |

### shipping

| Atributos     |  Tipo  | Descrição                               |
| :------------ | :----: | :-------------------------------------- |
| street        | string | Nome da rua que será entregue o produto |
| zipCode       | string | Código de envio                         |
| street_number | string | Número do local de entrega              |
| stateCode     | string | Código do estado                        |
| neighborhood  | string | Nome do bairro                          |
| city          | string | Nome da cidade                          |
| ibgeCode      | string | Código do IBGE                          |
| complementary | string | Complemento do endereço                 |
| state         | string | Abreviação do estado                    |

### payment

Atributos referentes ao pagar.me, segue a documentação: https://docs.pagar.me/reference#vis%C3%A3o-geral-sobre-pagamento

### products

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| freightHeight | string | Altura do produto para calcular o preço do frete (cm) |
| name | string | Nome do tipo de produto |
| ref | string | Referência do produto |
| freightWeight | string | Peso do produto para calcular o preço do frete (kg) |
| freightLength | string | Comprimento do produto para calcular o preço do frete (cm) |
| freightWidth | string | Largura do produto para calcular o preço do frete (cm) |
| qnt | integer | Quantidade de produtos |
| productType | productType | Informações sobre o tipo do produto |
| id | string | ID do estoque |
| tablePriceId | string | ID da tabela de preço |
| total | float | Total a pagar |
| externalId | string | Id do grupo do produto |
| price | float | Preço do produto |
| files | array<url\> | Foto do produto |
| items | array<items\> | Itens do produto |

### productType

| Atributos    |  Tipo  | Descrição         |
| :----------- | :----: | :---------------- |
| name         | string | Nome do produto   |
| id           | string | ID do produto     |
| organization | string | ID da organização |

### items

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| id | string | ID do item |
| size | string | Tamanho do item |
| color |  | Cor do item |
| qnt |  | Quantidade de item |
| externalId | string | ID do item |
| price | number | Preço do item |
| colorRef | string | Referência do item |

### lowStock

| Atributos |     Tipo      | Descrição        |
| :-------- | :-----------: | :--------------- |
| id        |    string     | ID do estoque    |
| itens     | array<itens/> | Itens do estoque |

### itens

| Atributos |  Tipo   | Descrição            |
| :-------- | :-----: | :------------------- |
| sale      | integer | Quantidade de vendas |
| id        | string  | ID da venda          |

### customer

| Atributos |  Tipo  | Descrição                     |
| :-------- | :----: | :---------------------------- |
| email     | string | E-mail do cliente             |
| document  | string | CPF do cliente                |
| id        | string | ID do cliente                 |
| phone     | string | Número de telefone do cliente |
| name      | string | Nome do cliente               |

### country

| Atributos  |  Tipo  | Descrição                  |
| :--------- | :----: | :------------------------- |
| name       | string | Nome do país               |
| iso        | string | Abreviação do país         |
| iso3       | string | Abreviação do país         |
| code       | string | Código do país             |
| formalName | string | Nome formal do país        |
| phone      | string | Código de telefone do país |

### items

| Atributos           |  Tipo   | Descrição                   |
| :------------------ | :-----: | :-------------------------- |
| color               | string  | Cor do produto              |
| qnt                 | integer | Quantidade de produtos      |
| externalId          | string  | ID do produto               |
| id                  | string  | ID do produto               |
| integrationMetadata | string  | Campo de informção genérica |
| colorRef            | string  | Referência da cor           |
| price               |  float  | Preço do produto            |
| size                | string  | Medida do produto           |

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getOrdersOpened.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
