---
id: saveOrderTrackingCode
title: Salvar código de rastreio no pedido
---

## Método

**/saveOrderTrackingCode**

`POST` https://e-vendi.com.br/api/saveOrderTrackingCode

---

## Conceituação

Salvar código de rastreio no pedido

Neste método você será capaz de salva o código de rastreio dos correios no pedido.

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
| trackingCode\* | string | URL da nota fiscal |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "",
  "organizationExternalId": "",
  "orderId": "1001",
  "trackingCode": "XX999999999BR"
}
```

---

## Response

### 200

```
"success"
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/reverseOrderPix.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
