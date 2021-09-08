---
id: reverseOrderPix
title: Estornar Boleto e Pix
---

## Método

**/reverse-order**

`POST` https://e-vendi.com.br/api/reverse-order

---

## Conceituação 

Estornar pedido (Boleto e Pix)

Neste método você será capaz de estornar os pedidos feitos por boleto ou pix.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |
| orderId | string | ID do pedido |

### bank

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| code | string | Código do cartão |
| agency | string | Agência do cartão |
| dvAgencia | string | ultimo numero da agência |
| accountType | string | Tipo da conta |
| documenteType | string | Tipo do documento (cpf) |
| documentNumber | string | Número do CPF |
| name | string | Nome |

## Request body

```json
{
   "integrationToken": "", 
   "organizationExternalId": "",
   "orderId": "",
   "env": "prod",
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

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| success | boolean | True / False |

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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/reverseOrderPix.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
