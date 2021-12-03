---
id: getCatalogs
title: Pegar Catálogos
---

## Método

**/getCatalogs**

`POST` https://e-vendi.com.br/api/getCatalogs

---

## Conceituação

Pegar Catálogo

Este método serve para ver quantos e quais catálogos você tem ativo.

---

## Atributos

:::note

externalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| externalId\* | string | Seu código de identificação no e-vendi |

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "externalId": "123456789QWERTY"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do catálogo no e-vendi |
| banners | array<banners\> | Array de banners que serão exibidos ao entrar no catálogo |
| bannersMobile | array<bannersMobile\> | Array de banners que serão exibidos ao entrar no catálogo exibidos apenas em mobile |
| cover | boolean | Esse atributo serve para colocar uma capa(Thumbnail) no catálogo |
| createdAt | number | Data de criação do catálogo |
| enableExpiration | boolean | Atributo para informar se o catálogo expira |
| expiredAt | boolean | Data de expiração do catálogo |
| externalId | string | ID que seu sistema criou para o catálogo |
| friendlyName | string | O nome do catálogo de forma curta |
| ignoreItens | array<string\> | Produtos que serão ignorados do catálogo |
| minimalItens | number | Mínimo de itens para o catálogo |
| minimalPrice | string | Atributo para aparecer o preço mínimo |
| minimalPriceNumber | number | Número de preços mínimos |
| name | string | Nome do catálogo |
| postbackPaymentUrl | string | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando pedido foi pago |
| postbackUrl | string | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| products | array<string\> | Array com os ID's dos produtos que fazem parte do catálogo |
| published | boolean | Identificada se catálogo está publicado |
| tablePriceId | string | Id da tabela de preço para o catálogo |
| tablePriceWholesaleId | string | Id da tabela de preço de atacado para o catálogo |
| totalItens | number | Quantidade de produtos contidos no catálogo |
| updatedAt | number | Data da última atualização do catálogo |
| wholesale | boolean | Identifica se o catálogo está como atacado |

### banners

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| link | string | Link para onde o usuário será direcionado ao clicar no banner |
| url | string | url da imagem do banner |

### bannersMobile

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| link | string | Link para onde o usuário será direcionado ao clicar no banner |
| url | string | url da imagem do banner |

Exemplo

```json
[
  {
    "id": "id",
    "banners": [{"link": "https://", "url": "https://"}],
    "bannersMobile": [{"link": "https://", "url": "https://"}],
    "cover": null,
    "createdAt": 1625854997100,
    "enableExpiration": false,
    "expiredAt": null,
    "externalId": "10",
    "friendlyName": "catalogo-e-commerce",
    "ignoreItens": ["123456"],
    "minimalItens": 1,
    "minimalPrice": null,
    "minimalPriceNumber": null,
    "name": "Catalogo e-commerce",
    "postbackPaymentUrl": "https://",
    "postbackUrl": "https://",
    "products": ["id's dos produtos"],
    "published": true,
    "tablePriceId": null,
    "tablePriceWholesaleId": null,
    "totalItens": 1,
    "updatedAt": 1630593791739,
    "wholesale": false
  }
]
```

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getProduct.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
