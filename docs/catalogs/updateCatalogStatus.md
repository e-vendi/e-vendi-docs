---
id: updateCatalogStatus
title: Ativar/inativar catálogo
---

## Método

**/updateCatalogStatus**

`POST` https://e-vendi.com.br/api/updateCatalogStatus

---

## Conceituação

Ativa ou inativa um catálogo

Este método serve para ativar ou desativar um catálogo.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| externalId | string | Seu código de identificação no e-vendi |
| catalogExternalId\* | string | ID do catálogo |
| published\* | boolean | Atributo para ativar ou desativar o catálogo |

```json
{
  "env": "dev",
  "externalId": "Seu ID",
  "integrationToken": "Seu Token",
  "catalogExternalId": "ID do catálogo",
  "published": true
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| success   | boolean | True / false |

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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateCatalogStatus.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
