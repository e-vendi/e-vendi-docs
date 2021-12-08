---
id: savePromotion
title: Salvar Promoção
---

## Método

**/savePromotion**

`POST` https://e-vendi.com.br/api/savePromotion

---

## Conceituação

Salvar/atualizar promoção

Neste método você será capaz de salvar/atualizar uma promoção.

---

## Atributos

:::note

organizationExternalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

externalId é o id da promoção cadastrada na sua base de dados.

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
| externalId\* | number | ID do catálogo |
| tablePriceId\* | string | ID da tabela de preço |
| status\* | string | status da promoção |
| items\* | array<items\> | Itens para a promoção |
| type | string | Tipo de promoção. Tipos disponíveis (VALUE) |
| name\* | string | Nome da promoção |
| startDate | number | Data final da promoção |
| endDate | number | Data final da promoção |

### items\*

| Atributos          |  Tipo  | Descrição                                     |
| :----------------- | :----: | :-------------------------------------------- |
| externalId         | number | Id externo do Item da promoção                |
| productExternalId  | string | Id do produto na sua base de dados            |
| itemExternalId     | string | Id do item na sua base de dados               |
| status             | string | status do item                                |
| unitNormalPrice    | number | Preço normal do produto que será exibido      |
| unitPromotionPrice | number | Preço promocional do produto que será exibido |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "",
  "externalId": 111111,
  "organizationExternalId": "",
  "orderId": "1001",
  "endDate": null,
  "items": [
    {
      "externalId": 33333,
      "itemExternalId": "sfsdafsdfsd",
      "productExternalId": "assdfsdfds",
      "status": true,
      "unitNormalPrice": 54.9,
      "unitPromotionPrice": 39.9
    }
  ],
  "name": "Teste de Integração",
  "startDate": 1637677560000,
  "status": true,
  "tablePriceId": "11111111",
  "type": "VALUE"
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| success   | boolean | True / False |

Exemplo

```json
{
  "success": true
}
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/reverseOrderPix.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>