---
id: updateClients
title: alterar dados do cliente
---

## Método

**/getClients**

`POST` https://e-vendi.com.br/api/updateClient

---

## Conceituação

Alterar cliente.

Esse método é responsável por criar ou atualizar os dado de um determinado cliente.

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
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **Dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **Prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| id\* | string | ID do cliente no qual deseja fazer alteração |
| dealerReject | boolean | Identifica se cliente está rejeitado como revendedor |
| isDealer | boolean | Identifica se o cliente é um revendedor |
| dealerStatus | string | Status de revendedor do cliente, podendo ser ('ACTIVE' ou 'INACTIVE' ) |
| notified | boolean | Identifica se notifica ou não o cliente ao reprová-lo como revendedor |
| reason | string | Motivo pelo qual o cliente foi reprovado para ser revendedor |
| tablePriceId | string | ID da tabela de preço para determinado cliente, essa tabela irá prevalecer perante qualquer outra, o cliente sempre verá os preços com base na tabela vinculada a ele se este atributo for informado |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "seu id",
  "id": "12344321asdasfsd",
  "dealerReject": false,
  "isDealer": true,
  "dealerStatus": "ACTIVE",
  "notified": true,
  "reason": null,
  "tablePriceId": "123456789qoasjkjsdfhmsdhf"
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| Response  | boolean | True / false |

Exemplo

```json
{"sucess": true}
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateClient.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
