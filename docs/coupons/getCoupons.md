---
id: getCoupons
title: Pegar Cupons
---

## Método

**/getCoupons**

`POST` https://e-vendi.com.br/api/getCoupons

---

## Conceituação

Buscar cupons

Esse método é responsável por trazer os cupons cadastrados na sua loja.

---

## Atributos

:::note

organizationExternalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "seu id"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id do cupom |
| createdAt | number | Data de criação do cupom |
| conditions | array<conditions\> | Lista de condições para o cupom |
| valueMask | string | Valor formatado para moeda |
| enabledExpiration | boolean | Habilitado para expirar |
| value | number | Valor do cupom sem máscara |
| code | string | Código do cupom para conseguir descontos |
| accumulateWithPromotion | boolean | Verifica se cupom pode acumular com promoção |
| type | string | Tipo que o cupom pode ser (PERCENTAGE, VALUE) |
| quantity | number | Quantidade de cupons disponíveis |
| hasQuantity | boolean | Tem quantidade máxima definida |
| quantityPerUser | number | Quantidade de cupons por usuário |
| hasQuantityPerUser | boolean | Verifica se tem quantidade máxima definida por usuário |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| startAt | number | Período inical de validade para o cupom |
| endAt | number | Período final de validade para o cupom |

### conditions

| Atributos |  Tipo  | Descrição                                     |
| :-------- | :----: | :-------------------------------------------- |
| id        | string | Id da condição para o cupom                   |
| valueMask | string | Valor formatado para moeda                    |
| operator  | string | Operador para condicionar a regra definida    |
| value     | number | Valor do cupom sem máscara                    |
| type      | string | Tipo que o cupom pode ser (PERCENTAGE, VALUE) |

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getOrganization.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
