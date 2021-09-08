---
id: getStockReserved
title: Pegar estoque reservado
---

## Método

**/getStockReserved**

`POST` https://e-vendi.com.br/api/getStockReserved

---

## Conceituação 

Pegar estoque reservado

Este método serve para pegar o estoque reservado..

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |
| productExternalId | string | ID do grupo do produto |
| itemExternalId | string | Id do produto dentro do grupo | 

## Request body

```json
{
    "integrationToken": "seu token",
    "organizationExternalId": "seu id",
    "env": "dev",
    "productExternalId": "5001",
    "itemExternalId": "005001P001"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stockReserved | integer | Quantidade do estoque reservado |
| message | string | String retornada se existir um estoque reservado | 

Exemplo

```json
{
    "stockReserved": 0,
    "message": ""
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getStockReserved.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>