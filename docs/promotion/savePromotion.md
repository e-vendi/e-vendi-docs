---
id: savePromotion
title: Salvar Promoção
---

## Método

**/savePromotion**

`POST` https://e-vendi.com.br/api/savePromotion

---

## Conceituação

Salvar/atualizar promoção.

Neste método você será capaz de salvar/atualizar uma promoção.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle. externalId é o id da promoção cadastrada na sua base de dados.

:::

:::note

**externalId** é o id da promoção do seu cliente na sua base de dados, sempre que você for criar uma promoção para seu cliente, você precisa informar o ID da promoção do seu cliente na sua base de dados.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| externalId\* | string | ID da promoção |
| tablePriceId\* | string | ID da tabela de preço |
| status\* | boolean | Status da promoção. true para ativa e false para inativa |
| items\* | array<items\> | Itens que estarão incluídos na promoção |
| type | string | Tipo de promoção. Tipos disponíveis (VALUE) |
| name\* | string | Nome da promoção |
| startDate | number | Data inicial da promoção |
| endDate | number | Data final da promoção |

### items\*

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| externalId\* | string | Id externo do item da promoção |
| productExternalId\* | string | Id do produto na sua base de dados |
| itemExternalId\* | string | Id do item na sua base de dados. Aqui é a variação (Tamanho e Cor) |
| status\* | string | status do item. true para ativa e false para inativa |
| unitNormalPrice\* | number | Preço normal do produto que será exibido |
| unitPromotionPrice\* | number | Preço promocional do produto que será exibido |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "",
  "externalId": "111111",
  "organizationExternalId": "safdgkkghd",
  "endDate": null,
  "items": [
    {
      "externalId": 33333,
      "itemExternalId": "sfsdafsdfsd",
      "productExternalId": "assdfsdfds",
      "status": true,
      "unitNormalPrice": 54.9,
      "unitPromotionPrice": 39.9
    }
  ],
  "name": "Teste de Integração",
  "startDate": 1637677560000,
  "status": true,
  "tablePriceId": "11111111",
  "type": "VALUE"
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| success   | boolean | True / False |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/savePromotion.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
