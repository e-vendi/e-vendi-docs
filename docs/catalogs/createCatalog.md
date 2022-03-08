---
id: createCatalog
title: Criar / Atualizar catálogo
---

<!-- A FAZER -->

## Método

**/createCatalog**

`POST` https://e-vendi.com.br/api/createCatalog

---

## Conceituação

Criar e atualizar o catálogo de produtos.

Neste método você será capaz de criar e atualizar seu catálogo de produtos.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::note

**externalId** é o id do catálogo do seu cliente na sua base de dados, sempre que você for criar um catálogo para seu cliente, você precisa informar o ID do catálogo do seu cliente na sua base de dados.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **Dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **Prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId\* | string | Seu código de identificação do catálogo no e-vendi |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| name\* | string | Nome do catálogo |
| friendlyName | string | O nome do catálogo de forma curta |
| banners | array<banners\> | Array de banners que serão exibidos ao entrar no catálogo |
| bannersMobile | array<bannersMobile\> | Array de banners que serão exibidos ao entrar no catálogo exibidos apenas em mobile |
| published | boolean | Identificada se catálogo está publicado |
| postbackPaymentUrl | string | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando pedido foi pago |
| postbackUrl | string | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| createdAt | number | Data de criação do catálogo |
| cover | string | Esse atributo serve para colocar uma capa (Thumbnail) no catálogo |
| enableExpiration | boolean | Atributo para informar se o catálogo expira |
| expiredAt | number | Data de expiração do catálogo |
| tablePriceId | string | Id da tabela de preço para o catálogo |
| tablePriceWholesaleId | string | Id da tabela de preço de atacado para o catálogo |
| minimalPrice | string | Atributo para aparecer o preço mínimo |
| minimalPriceNumber | number | Número de preços mínimos |
| ignoreItens | array<string\> | Produtos que serão ignorados do catálogo |
| minimalItens | number | Mínimo de itens para o catálogo |
| products\* | array<products\> | Array com os ID's dos produtos que fazem parte do catálogo |
| wholesale | boolean | Identifica se o catálogo está como atacado |

### Products\*

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| controlStock | boolean | Atributo para o controle de estoque |
| enablePhotoByColor | boolean | Este atributo serve para separar produtos por cores, apresentando um modelo do produto e mostrando os modelos com cores diferentes |
| postbackUrl | url | Webhook(Postback) necessário para a conexão |
| externalId | string | ID do Produto |
| isGrid | boolean | Atributo para definir se o produto tem variações de tamanho e cor |
| description | string | Descrição para os produtos |
| descriptionSEO | string | Descrição de SEO para o produtos |
| endRelease | number | Data final para produtos em lançamento. Ao informar data aqui o produto será considerado em lançamento |
| externalId | strging | ID do catálogo |
| freightHeight | number | Altura do produto para frete |
| freightLength | number | Tamanho do produto para frete |
| freightWeight | number | Peso do produto para frete |
| freightWidth | number | Largura do produto para frete |
| genders | array<string\> | Lista de gêneros que o produto pode ter |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| itens | array<itens\> | Itens que o produto pode ter |
| keywords | array<string\> | Lista de palavras chave para o produto |
| measures | measures | Medidas do produto |
| name | string | Nome do produto |
| productType | string | Tipo do produto |
| reference | string | Referência do produto |
| titleSEO | string | Título de SEO para o produto |

### Itens

| Atributos   |      Tipo      | Descrição                        |
| :---------- | :------------: | :------------------------------- |
| externalId  |     string     | ID do item                       |
| files       |  array<url\>   | campo para o links da imagem     |
| name        |     string     | nome do produto                  |
| prices      | array<prices\> | Preço do produto                 |
| stock       |    integer     | Quantidade do produto em estoque |
| productType |     string     | Tipo do produto                  |
| reference   |    integer     | Referência do produto            |

### Prices

| Atributos |  Tipo  | Descrição                                       |
| :-------- | :----: | :---------------------------------------------- |
| id        | string | id da tabela de preço que esse preço referência |
| name      | string | Nome do item                                    |
| value     | number | Valor do item                                   |

### Variation

| Atributos |  Tipo  | Descrição          |
| :-------- | :----: | :----------------- |
| label     | string | Nome               |
| type      | string | Tipo (ex: "COR")   |
| value     | string | Cor do produto     |
| valueRef  | string | Hexadecimal da cor |

### measures

| Atributos  |   Tipo   | Descrição                             |
| :--------- | :------: | :------------------------------------ |
| image      |  string  | URL da imagem de como medir o produto |
| variations | array<\> | Lista de variações                    |

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

## Request body

```json
{
  "env": "prod",
  "externalId": "123456789aafasdgd",
  "organizationExternalId": "sasddfgdf5g5",
  "integrationToken": "sd5sdag5dfg5",
  "banners": [
    {
      "link": "https://",
      "url": "https://"
    }
  ],
  "bannersMobile": [
    {
      "link": "https://",
      "url": "https://"
    }
  ],
  "cover": null,
  "enableExpiration": false,
  "expiredAt": null,
  "ignoreItens": ["543535sda4f5sad3g4"],
  "name": "Loja 2",
  "postbackPaymentUrl": "https://",
  "postbackUrl": "https://",
  "products": [
    {
      "controlStock": true,
      "description": null,
      "descriptionSEO": "Conforto e leveza durante a caminhada com o Tênis",
      "enablePhotoByColor": false,
      "endRelease": null,
      "externalId": "dsfsd6sd5sda5asdg35d6",
      "freightHeight": null,
      "freightLength": null,
      "freightWeight": null,
      "freightWidth": null,
      "genders": [],
      "integrationMetadata": {},
      "isGrid": true,
      "itens": [
        {
          "externalId": "5as4f35sd435sa4df35sda4",
          "files": [],
          "integrationMetadata": {},
          "name": "Tênis Renew Nike",
          "prices": [
            {
              "id": "115115",
              "name": "Atacado",
              "value": 251.99
            }
          ],
          "stock": 29,
          "variation": [
            {
              "label": "Verde",
              "type": "COR",
              "value": "Verde",
              "valueRef": "#20c40a"
            },
            {
              "label": "P",
              "type": "TAMANHO",
              "value": "P"
            }
          ]
        }
      ],
      "keywords": ["Tênis", "Renew", "Nike"],
      "measures": [
        {
          "image": "https://",
          "variations": []
        }
      ],
      "name": "Tênis Renew Nike",
      "productType": "Tenis",
      "reference": "355421",
      "titleSEO": "Tênis Renew Nike"
    }
  ],
  "published": true,
  "tablePriceId": "6f5sdf5sd",
  "tablePriceWholesaleId": "fsdaf5sadg5sdag5ads"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição                          |
| :-------- | :--: | :--------------------------------- |
| url       | link | Retorna o link para o seu catálogo |

Exemplo

```json
{
  "url": "https://"
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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/createCatalog.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
