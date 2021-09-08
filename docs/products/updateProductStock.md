---
id: updateProductStock
title: Atualizar estoque de um produto
---

## Método

**/updateProductStock**

`POST` https://e-vendi.com.br/api/updateProductStock

---

## Conceituação 

Atualizar estoque de um produto

Este método serve para atualizar apenas um produto d eum estoque.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |
| productExternalId | string | ID do grupo do produto |

#### Itens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| itemExternalId | string | Id do produto dentro do grupo | 
| stock | integer | Quantia do estoque |

## Request body

```json
{
	"integrationToken": "WTnxjpDoJD8kkdGucbXS",
	"env": "dev",
	"organizationExternalId": "81728472000167",
	"productExternalId": "5000",
	"itens": [
		{
		  "itemExternalId": "005000P001",
		  "stock": 20
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateProductStock.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
