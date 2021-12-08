---
id: bankAccount
title: Atualizar conta bancaria
---

## Método

**/bankAccount**

`POST` https://e-vendi.com.br/api/bankAccount

---

## Conceituação

Atualizar conta bancaria para saque

Este método é responsável por verificar atualizar sua conta bancaria para o saque.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| externalId | string | Seu código de identificação no e-vendi |
| bankCode | string | Código do banco |
| accountType | string | Tipo da conta |
| agency | string | Agência da conta |
| dvAgency | string | Digito da ag~encia |
| accountNumber | string | Número da conta |
| dvAccount | string | Dígito da conta |
| holderName | string | Nome do dono |
| document | string | CPF do dono |
| payments | string | Tipo de pagamento |

## Request body

```json
{
  "env": "dev",
  "integrationToken": "Seu token",
  "externalId": "seu id",
  "bankCode": "333",
  "accountType": "conta_corrente",
  "agency": "3333",
  "dvAgency": "",
  "accountNumber": "33333",
  "dvAccount": "3",
  "holderName": "nome",
  "document": "333333333333",
  "payments": ["CREDIT_CARD", "BOLETO", "PRESENTIAL"]
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
success
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/bankAccount.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
