---
id: updateStock
title: Atualizar vários estoques
---

## Método

**/updateStock**

`POST` https://e-vendi.com.br/api/updateStock

---

## Conceituação

Atualizar estoque de vários produtos

Este método serve para atualizar a quantidade de produtos nos estoques.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| externalId | string | Seu código de identificação no e-vendi |

#### Products

| Atributos         |  Tipo  | Descrição              |
| :---------------- | :----: | :--------------------- |
| productExternalId | string | Id do grupo do produto |

#### Itens

| Atributos      |  Tipo   | Descrição                     |
| :------------- | :-----: | :---------------------------- |
| itemExternalId | string  | Id do produto dentro do grupo |
| stock          | integer | Quantia do estoque            |

## Request body

```json
{
  "integrationToken": "seu token",
  "env": "dev",
  "externalId": "seu id",
  "products": [
    {
      "productExternalId": "5001",
      "itens": [
        {
          "itemExternalId": "005001P001",
          "stock": 23
        }
      ]
    }
  ]
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| message | string | String de retorno para saber se o estoque foi atualizado |

Exemplo

```json
{
  "message": "Stock update success"
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateStock.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
