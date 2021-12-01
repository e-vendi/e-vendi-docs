---
id: updateOrganizationStatus
title: Ativar / desativar empresa
---

## Método

**/updateOrganizationStatus**

`POST` https://e-vendi.com.br/api/updateOrganizationStatus

---

## Conceituação

Criar e atualizar empresa

Esse método é responsável por ativar ou desativar sua empresa.

---

:::note

externalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

:::

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| externalId | string | Seu código de identificação no e-vendi |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| active | boolean | Atributo para ativar ou desativar a sua empresa |

## Request body

```json
{
  "externalId": "id da empresa",
  "integrationToken": "id de intgrador",
  "active": true
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
success
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateOrganizationStatus.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
