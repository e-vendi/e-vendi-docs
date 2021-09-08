---
id: getProduct
title: Pegar Catálogo
---

## Método

**/getCatalogs**

`POST` https://e-vendi.com.br/api/getCatalogs

---

## Conceituação 

Pegar Catálogo

Este método serve para ver quantos e quais catálogos você tem ativo.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |

## Request body

```json
{
    "env": "dev",
    "integrationToken": "WTnxjpDoJD8kkdGucbXS",
    "externalId": "1"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do catálogo no e-vendi |
| products | string | ID do produto dentro do e-vendi |
| enableExpiration | boolean | Atributo para permitir que o produto expire |
| minimalPrice | boolean | Atributo para aparecer o preço mínimo |
| cover | boolean | Esse atributo serve para colocar uma capa(Thumbnail) no catálogo |
| postbackPaymentUrl | boolean | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| name | string | Nome do catálogo | 
| totalItens | integer | quantidade de itens no catálogo |
| minimalPriceNumber | boolean | Numero de proços mínimos |
| tablePriceId | boolean |  |
| tablePriceWholesaleId | |
| friendlyName | string | O nome do catálogo de forma curta |
| expiredAt | boolean | Se o catálogo já expirou ou não |

Exemplo

```json
[
    {
        "id": "3l9zw10cqDcPM8jvIt0I",
        "products": [
            "mc828njGJm32wnMmrIkd"
        ],
        "enableExpiration": false,
        "minimalPrice": null,
        "cover": null,
        "postbackPaymentUrl": "",
        "published": true,
        "externalId": "10",
        "createdAt": 1630593791739,
        "postbackUrl": "https://grands.com.br/test",
        "name": "Catalogo e-commerce",
        "totalItens": 1,
        "minimalPriceNumber": null,
        "tablePriceId": null,
        "tablePriceWholesaleId": null,
        "friendlyName": "catalogo-e-commerce",
        "expiredAt": null
    },
    {
        "id": "tD3Ja8ZnnAvR1ocpAHbb",
        "friendlyName": "catalogo-n-000035",
        "externalId": "333",
        "createdAt": 1630675157435,
        "products": [
            "mc828njGJm32wnMmrIkd"
        ],
        "expiredAt": null,
        "postbackPaymentUrl": "",
        "cover": null,
        "totalItens": 1,
        "enableExpiration": false,
        "minimalPrice": null,
        "tablePriceId": null,
        "minimalPriceNumber": null,
        "postbackUrl": "https://grands.com.br/test",
        "name": "Catalogo N∫ 000035",
        "published": true,
        "tablePriceWholesaleId": null
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getProduct.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
