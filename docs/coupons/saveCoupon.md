---
id: saveCoupon
title: Salvar Cupom
---

## Método

**/saveCoupon**

`POST` https://e-vendi.com.br/api/saveCoupon

---

## Conceituação

Salvar cupom.

Esse método é responsável por criar cupom.

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
| coupon\* | coupon | Informações sobre o cupom |

### coupon\*

:::note

O atributo modalityType somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar os cupons do varejo e do atacado, desta forma você pode ter cupons diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id do cupom |
| createdAt | number | Data de criação do cupom |
| conditions | array<conditions\> | Lista de condições para o cupom |
| valueMask | string | Valor formatado para moeda |
| enabledExpiration | boolean | Habilitado para expirar |
| value | number | Valor do cupom sem máscara |
| code\* | string | Código do cupom para conseguir descontos (cupom em si) |
| accumulateWithPromotion | boolean | Verifica se cupom pode acumular com promoção |
| type | string | Tipo que o cupom pode ser (PERCENTAGE, VALUE) |
| hasQuantity | boolean | Tem quantidade máxima definida |
| quantity | number | Quantidade de cupons fornecidos. (mandar se hasQuantity for true ) |
| availableQuantity | number | Quantidade de cupons disponíveis, deve iniciar com o mesmo valor de quantity. Conforme utilizado esse valor é decrementado. (mandar se hasQuantity for true ) |
| hasQuantityPerUser | boolean | Verifica se tem quantidade máxima definida por usuário |
| quantityPerUser | number | Quantidade de cupons por usuário (mandar se hasQuantityPerUser for true ) |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| startAt | number | Período inical de validade para o cupom |
| endAt | number | Período final de validade para o cupom |
| modalityType | string | Tipo para o cupom ('wholesale' ou 'retail') |

### conditions

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id da condição para o cupom |
| valueMask | string | Valor formatado para moeda |
| operator | string | Operador para condicionar a regra definida. Operadores aceitos são ('>', '<', '=', '>=', '<=', '!=' e 'contains') |
| value | number | Valor do cupom sem máscara |
| type | string | Tipo que o cupom pode ser (PERCENTAGE, VALUE) |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "seu id",
  "coupon": {
    "accumulateWithPromotion": false,
    "code": "SIMPLES10",
    "conditions": [],
    "createdAt": 1627404687685,
    "enabledExpiration": false,
    "hasQuantity": false,
    "hasQuantityPerUser": true,
    "id": "SIMPLES10",
    "integrationMetadata": {"vendorId": 111111},
    "quantityPerUser": 10,
    "type": "VALUE",
    "value": 10,
    "valueMask": "R$ 10,00",
    "modalityType": "retail"
  }
}
```

---

## Response

### 200

```json
{
  "_writeTime": {
    "_seconds": 1637236969,
    "_nanoseconds": 444294000
  }
}
```

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/saveCoupon.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
