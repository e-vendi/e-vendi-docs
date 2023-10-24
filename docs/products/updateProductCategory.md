---
id: updateProductCategory
title: Atualizar ordenação da categoria
---

## Método

**/updateProductCategory**

`POST` https://e-vendi.com.br/api/updateProductCategory

---

## Conceituação

Atualizar ordenação das categorias no e-vendi.

Este método serve definir uma ordenação manual das categorias. Com isso o integrador define a ordem da categoria e o e-vendi não exibirá mais em ordem alfabética.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::note

**externalId** é o id do produto do seu cliente na sua base de dados, sempre que você for criar um produto para seu cliente, você precisa informar o ID do produto do seu cliente na sua base de dados.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| orders\* | Items | Categorias com ordenação configurada |

:::note

É importante mandar todas as categorias, quando quiser ordenar uma categoria deve mandar um sequencial no atributo sequenceOrder, as outras categorias deve mandar sempre como null.

:::

#### Items

| Atributos     |      Tipo       | Descrição                             |
| :------------ | :-------------: | :------------------------------------ |
| id            |     string      | Id da categoria                       |
| name          |     string      | Nome da categoria                     |
| sequenceOrder | integer \| null | Campo que defini a ordem do resultado |

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "333",
  "orders": [
    {
      "id": "11111",
      "name": "Categoria ordenada",
      "sequenceOrder": 1
    },
    {
      "id": "11112",
      "name": "Categoria não ordenada",
      "sequenceOrder": null
    }
  ]
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| success   | boolean | true / false |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateProductCategory.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
