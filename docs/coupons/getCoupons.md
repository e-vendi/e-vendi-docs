---
id: getCoupons
title: Pegar Cupons
---

## Método

**/getCoupons**

`POST` https://e-vendi.com.br/api/getCoupons

---

## Conceituação

Buscar cupons.

Esse método é responsável por trazer os cupons cadastrados na sua loja.

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
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
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
| modalityType | string | Tipo para o cupom ('wholesale' ou 'retail'). O atributo modalityType somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar os cupons do varejo e do atacado, desta forma você pode ter cupons diferentes para atacado e varejo |

### conditions

| Atributos |  Tipo  | Descrição                                     |
| :-------- | :----: | :-------------------------------------------- |
| id        | string | Id da condição para o cupom                   |
| valueMask | string | Valor formatado para moeda                    |
| operator  | string | Operador para condicionar a regra definida    |
| value     | number | Valor do cupom sem máscara                    |
| type      | string | Tipo que o cupom pode ser (PERCENTAGE, VALUE) |

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getCoupons.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
