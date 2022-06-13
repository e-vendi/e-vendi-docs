---
id: simulatePayment
title: Simular pagamento de boleto/pix
---

## Método

**/simulatePayment**

`POST` https://e-vendi.com.br/api/simulatePayment

---

## Conceituação

Simular pagamento.

Simular pagamento de um pedido que foi feito em boleto ou pix

---

:::caution Como usar.

Este endpoint só é possível simular através de uma loja que tenha sido criada com o environment igual a dev (env: 'dev')

O atributo env que deve ser passado na body sempre será dev, pois se trata de simulações de pagamentos e a única forma para simular sem gerar custos é no ambiente de desenvolvimento.

:::

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::caution Atributos obrigatórios.

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Este endpoint só funciona com ambiente em dev, pois se trata de pagamentos. |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| orderId\* | string | ID da ordem de pedido e não o número do pedido |

## Request body

```json
{
  "integrationToken": "seu token",
  "env": "dev",
  "organizationExternalId": "seu id",
  "orderId": "id do pedido"
}
```

---

## Response

### 200

Exemplo

```text
success
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/closeOrder.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
