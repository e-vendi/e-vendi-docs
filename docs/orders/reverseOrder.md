---
id: reverseOrder
title: Estornar Pedido
---

## Método

**/reverse-order**

`POST` https://e-vendi.com.br/api/reverse-order

---

## Conceituação

Estornar pedido.

Neste método você será capaz de estornar pedido.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| orderId\* | string | ID do pedido |
| reason | string | Motivo do estorno |
| bank | bank | **Obrigatório passar o banco nos casos que o pedido foi pago por boleto** |

### bank

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| code | string | Código do banco |
| agency | string | Agência bancária do cliente |
| dvAgency | string | Dígito verificador da agência |
| accountNumber | string | Número da conta do cliente |
| dvAccount | string | Dígito verificador da conta |
| accountType | string | Tipo da conta. Tipos disponíveis (conta_corrente, conta_poupanca, conta_corrente_conjunta ,conta_poupanca_conjunta) |
| documenteType | string | Tipo do documento (cpf ou cnpj) |
| documentNumber | string | Número do CPF |
| name | string | Nome do cliente |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "",
  "organizationExternalId": "",
  "orderId": "1001",
  "reason": "Motivo",
  "bank": {
    "code": "",
    "agency": "",
    "dvAgency": "",
    "accountNumber": "",
    "dvAccount": "",
    "accountType": "",
    "documentType": "cpf",
    "documentNumber": "107906",
    "name": ""
  }
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

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/reverseOrder.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
