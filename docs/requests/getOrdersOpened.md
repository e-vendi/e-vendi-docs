---
id: getOrdersOpened
title: Pegar pedidos abertos
---

## Método

**/getOrdersOpened**

`GET` https://e-vendi.com.br/api/getOrdersOpened?integrationToken=SEU_TOKEN&env=dev&organizationExternalId=SEU_ID

---

## Conceituação 

Atualizar produto

Este método serve para atualizar um produto específico.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do pedido |
| discount | integer | Desconto da compra |
| postbackUrl | url | Webhook(Postback) necessário para a conexão | 
| isCompleted | boolean | Atributo d econfirmação de pedido |
| paid | boolean | Atributo de confirmação de pagamento |
| cartId | string | ID do carrinho |
| createdAt | timestamp | Data de criação do pedido |
| orderNumber | integer | Número da ordem de pedido |
| organizationExternalId | string | ID da organização dentro do e-vendi |
| value | float | Valor da venda |
| subTotal | float | Valor do produto |
| freightType | string | Tipo de frete |
| freight | float | Valor do frete | 
| freightDestination | string | Destino do frete |
| freightMode | sring | Modo do frete |
| opened | boolean | Atributo de abertuda do pedido |
| postbackPaymentUrl | url | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| version | string | Versão |
| coupons | vetor | Cumpom do pedido |
| observation | string | Observação sobre o pedido |
| paymentMethod | string | Método de pagamento |
| totalItens | integer | Total de produtos no pedido |
| customerDocument | string | CPF do cliente |
| parcels | integer | Quantidade de parcelas do pagamento |
 
#### shipping

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| street | string | Nome da rua que será entregue o produto |
| zipCode | string | Código de envio |
| street_number | string | Número do local de entrega |
| stateCode | string | Código do estado |
| neighborhood | string | Nome do bairro |
| city | string | Nome da cidade |
| ibgeCode | string | Código do IBGE |  
| complementary | string | Complemento do endereço |
| state | string | Abreviação do estado |

#### country

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| name | string | Nome do país |
| iso | string | Abreviação do país |
| iso3 | string | Abreviação do país |
| code | string | Código do país |
| formalName | string | Nome formal do país |
| phone | string | Código de telefone do país |

#### customer 

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| email | string | E-mail do cliente |
| document | string | CPF do cliente |
| id | string | ID do cliente |
| phone | string | Número de telefone do cliente |
| name | string | Nome do cliente |

#### lowStock

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do estoque |

##### itens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| sale | integer | Quantidade de vendas |
| id | string | ID da venda |

### products

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| freightHeight | string | Altura do produto para calcular o preço do frete (cm) |
| externalId | string | Id do grupo do produto |
| price | float | Preço do produto |
| freightWidth | string | Largura do produto para calcular o preço do frete (cm) |
| tablePriceId | string | ID da tabela de preço |
| qnt | integer | Quantidade de produtos | 
| freightWeight | string | Peso do produto para calcular o preço do frete (kg) | 
| ref | string | Referência do produto |
| files | url | Foto do produto | 
| freightLength | string | Comprimento do produto para calcular o preço do frete (cm) |
| id | string | ID do estoque | 
| total | float | Total a pagar |
| name | string | Nome do tipo de produto |

#### productType

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| name | string | Nome do produto |
| id | string | ID do produto | 

### items

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| color | string | Cor do produto |
| qnt | integer | Quantidade de produtos |
| externalId | string | ID do produto |
| id | string | ID do produto |
| integrationMetadata | string | Campo de informção genérica | 
| colorRef | string | Referência da cor | 
| price | float | Preço do produto |
| size | string | Medida do produto | 

Exemplo

```json
[
    {
        "id": "ID",
        "discount": 0,
        "shipping": {
            "street": "Rua",
            "zipCode": "3333333",
            "street_number": "3333",
            "stateCode": "41",
            "country": {
                "name": "Brasil",
                "iso": "BR",
                "iso3": "BRA",
                "code": "076",
                "formalName": "República Federativa do Brasil",
                "phone": "0055"
            },
            "neighborhood": "bla bla bla",
            "city": "Cianorte",
            "ibgeCode": "4105508",
            "complementary": "",
            "state": "PR"
        },
        "postbackUrl": "https://",
        "isCompleted": true,
        "paid": false,
        "cartId": "",
        "createdAt": 1630699080656,
        "orderNumber": 1001,
        "organizationExternalId": "1",
        "value": 5.4,
        "subTotal": 2.9,
        "freightType": "FIX_TAX",
        "freight": 2.5,
        "freightDestination": "87203134",
        "freightMode": "FIX_TAX",
        "customer": {
            "email": "@gmail.com",
            "document": "00000000000",
            "id": "id",
            "phone": "+5544999999999",
            "name": "nome"
        },
        "lowStock": [
            {
                "itens": [
                    {
                        "sale": 1,
                        "id": "id"
                    }
                ],
                "id": "id"
            }
        ],
        "opened": true,
        "postbackPaymentUrl": "",
        "version": "v2",
        "coupons": [],
        "observation": "",
        "paymentMethod": "presential",
        "products": [
            {
                "freightHeight": "1,23",
                "externalId": "5000",
                "productType": {
                    "name": "Manga Longa",
                    "id": "id"
                },
                "price": 2.9,
                "freightWidth": "123,00",
                "tablePriceId": "",
                "qnt": 1,
                "freightWeight": "123,00",
                "ref": "5001",
                "files": [
                    ""
                ],
                "freightLength": "123,00",
                "items": [
                    {
                        "color": "Verde",
                        "qnt": 1,
                        "externalId": "005000P001",
                        "id": "id",
                        "integrationMetadata": {},
                        "colorRef": "#20c40a",
                        "price": 2.9,
                        "size": "P"
                    }
                ],
                "id": "ho2IxgmyC2AIDKmuq2rt",
                "total": 2.9,
                "name": "com cor por tamanho"
            }
        ],
        "totalItens": 1,
        "customerDocument": "00000000000",
        "parcels": 1
    }
]
```
### 400 

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getOrdersOpened.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
