---
id: getProduct
title: Pegar Produto
---

## Método

**/getProduct**

`POST` https://e-vendi.com.br/api/getProduct

---

## Conceituação

Pegar um produto em específico.

Este método serve para pegar algum produto pelo código do produto ou pela referência do produto.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::note

**productExternalId** é o id do seu produto na sua base de dados.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| productExternalId\* | string | ID do produto da sua base de dados que deseja consultar. Se informar "productExternalId" não precisa passar "reference" |
| reference\* | string | Referência do produto da sua base de dados que deseja consultar. Se informar "reference" não precisa passar "productExternalId" |

## Request body

```json
{
  "integrationToken": "seu token",
  "env": "dev",
  "organizationExternalId": "seu id",
  "productExternalId": "seu id",
  "reference": "936731"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do produto no e-vendi |
| externalId | string | Seu código de identificação do produto no e-vendi |
| price | string | Preço do produto se não for produto item |
| priceNumber | number | Preço do produto como número |
| brandName | string | Nome da marca do produto |
| controlStock | boolean | Atributo para controle de estoque |
| description | string | Descrição para os produtos |
| descriptionSEO | string | Descrição de SEO para o produtos |
| enablePhotoByColor | boolean | Este atributo serve para separar produtos por cores, apresentando um modelo do produto e mostrando os modelos com cores diferentes |
| endRelease | number | Data final para produtos em lançamento. Ao informar data aqui o produto será considerado em lançamento |
| highlight | number | Data final para produtos em destaque. Ao informar data aqui o produto será considerado em destaque |
| freightHeight | float | Altura do produto |
| freightLength | integer | Comprimento do produto |
| freightWeight | integer | Peso do produto |
| freightWidth | integer | Largura do produto |
| genders | array<string\> | Lista de gêneros que o produto pode ter |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| isGrid | boolean | Atributo para definir se o produto tem variações de tamanho e cor |
| itens | array<itens\> | Itens que o produto pode ter |
| measures | measures | Medidas do produto |
| name | string | Nome do produto |
| productType | array<productTypes\> | Tipos do produto |
| reference | string | Referência do produto |
| titleSEO | string | Título de SEO para o produto |
| wholesale | boolean | Identifica se o produto está como atacado, caso seja "true" apenas usuário logado e que seja revendedor poderá comprar |
| saleCount | number | Quantidade vendida do produto |

### Itens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do item no e-vendi |
| externalId | string | ID do item |
| files | array<url\> | campo para o links da imagem |
| name | string | nome do produto |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| prices | array<prices\> | Preço do produto |
| stock | integer | Quantidade do produto em estoque |
| variations | array<variation\> | Variações que item possui |
| price | string | Preço do produto se não for produto item |
| priceNumber | number | Preço do produto como número |

### Product Types

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do item |
| name | string | nome do tipo de produto |
| defaultIsGrid | string | Se por padrão será como grid |
| segments | array<prices\> | Array contendo os segmentos. Ex (ROUPA, MODA) |

### Prices

| Atributos |  Tipo  | Descrição                                       |
| :-------- | :----: | :---------------------------------------------- |
| id        | string | id da tabela de preço que esse preço referencia |
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

### Variation

| Atributos |  Tipo   | Descrição                              |
| :-------- | :-----: | :------------------------------------- |
| type      | string  | Tipo do produto (ex: "TAMANHO")        |
| value     | string  | Valor da variavel do produto (ex: "P") |
| label     | string  | Etiqueta do produto (ex: "MILITAR")    |
| valueRef  | boolean | Referência do valor                    |

### Exemplo

```json
{
  "id": "123",
  "externalId": "id produto",
  "price": "180.98",
  "priceNumber": 180.98,
  "brandName": "marca",
  "controlStock": false,
  "description": "descrição",
  "descriptionSEO": "descrição SEO",
  "enablePhotoByColor": false,
  "endRelease": 1648822800687,
  "highlight": 1648822800687,
  "freightHeight": 1.23,
  "freightLength": 123,
  "freightWeight": 123,
  "freightWidth": 123,
  "genders": [],
  "isGrid": true,
  "saleCount": 1,
  "productType": [
    {
      "id": "123",
      "name": "tenis",
      "defaultIsGrid": true,
      "segments": ["CALCADOS"]
    }
  ],
  "reference": "181065",
  "name": "nome produto",
  "descriptionSEO": "Descrição SEO",
  "titleSEO": "Título SEO",
  "wholesale": true,
  "integrationMetadata": {
    "priceSheetTypeId": ""
  },
  "saleCount": 1,
  "itens": [
    {
      "id": "123",
      "externalId": "5as4f35sd435sa4df35sda4",
      "files": [],
      "integrationMetadata": {},
      "name": "Tênis Renew Nike",
      "price": null,
      "priceNumber": null,
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
  ]
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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getProduct.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
