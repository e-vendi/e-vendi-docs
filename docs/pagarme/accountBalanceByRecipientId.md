---
id: accountBalanceByRecipientId
title: Pegar saldo da conta
---

## Método

**/account-balance-by-recipient-id**

`POST` https://e-vendi.com.br/api/account-balance-by-recipient-id

---

## Conceituação

Pegar Saldo.

Neste método você será capaz de pegar o saldo da conta.

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
| status | string | Status disponíveis que o pagar.me fornece (waiting_funds e available) |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "111122212112sas",
  "organizationExternalId": "sdfsd1dfgd2g"
}
```

---

## Response

### 200

Atributos referentes ao pagar.me, segue a documentação: hhttps://docs.pagar.me/v1/reference#saldo-de-um-recebedor

Retornará também informações sobre o banco.

### Bank

| Atributos |  Tipo   | Descrição                 |
| :-------- | :-----: | :------------------------ |
| code      | integer | Código do banco (ex: 333) |
| id        | string  | Id do banco               |
| name      | string  | Nome do banco             |

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/accountBalanceByRecipientId.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
