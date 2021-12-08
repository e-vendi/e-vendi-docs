---
id: updateProduct
title: Atualizar produto
---

## Método

**/updateProduct**

`POST` https://e-vendi.com.br/api/updateProduct

---

## Conceituação

Atualizar produto

Este método serve para atualizar um produto específico.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos |
| externalId | string | Seu código de identificação no e-vendi |
| externalId | string | ID do grupo do produto |
| name | string | Nome do produto |
| price | float | Preço do produto |
| productType | String | Tipo do produto |
| reference | string | ID de referência do produto |

#### Itens

| Atributos  |  Tipo   | Descrição                         |
| :--------- | :-----: | :-------------------------------- |
| externalId | string  | ID do produto dentro do grupo     |
| stock      | integer | Quantidade de produtos em estoque |
| files      |   url   | Link da imagem do produto         |

#### Variation

| Atributos |  Tipo   | Descrição                              |
| :-------- | :-----: | :------------------------------------- |
| type      | string  | Tipo do produto (ex: "TAMANHO")        |
| value     | string  | Valor da variavel do produto (ex: "P") |
| label     | string  | Etiqueta do produto (ex: "MILITAR")    |
| valueRef  | boolean | Referência do valor                    |

### Opcionais

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| freightHeight | float | Altura do produto |
| freightLength | integer | Comprimento do produto |
| freightWeight | integer | Peso do produto |
| freightWidth | integer | Largura do produto |
| enablePhotoByColor | boolean | Este atributo serve para separar produtos por cores, apresentando um modelo do produto e mostrando os modelos com cores diferentes |
| isGrid | boolean | Atributo para definir se o produto tem variações de tamanho e cor |
| controlStock | boolean | Atributo para controle de estoque |

#### integrationMetadata

| Atributos        |  Tipo  | Descrição         |
| :--------------- | :----: | :---------------- |
| priceSheetTypeId | string | Atributo genérico |

## Request body

```json
{
  "integrationToken": "seu token",
  "externalId": "seu id",
  "externalId": "333",
  "env": "dev",
  "name": "Bata merge kkkk",
  "price": 180.98,
  "freightHeight": 1.23,
  "freightLength": 123,
  "freightWeight": 123,
  "freightWidth": 123,
  "productType": "Bata",
  "reference": "181065",
  "enablePhotoByColor": false,
  "integrationMetadata": {
    "priceSheetTypeId": ""
  },
  "isGrid": true,
  "controlStock": false,
  "itens": [
    {
      "externalId": "id",
      "integrationMetadata": {
        "priceSheetTypeId": ""
      },
      "price": 159.98,
      "name": "Bata essdvsd P MILITAR",
      "variation": [
        {
          "type": "TAMANHO",
          "value": "P",
          "label": "Tamanho(UN-G5)",
          "valueRef": null
        },
        {
          "type": "COR",
          "value": "MILITAR",
          "label": "MILITAR",
          "valueRef": null
        }
      ],
      "stock": 0,
      "files": ["/"]
    },
    {
      "externalId": "id",
      "integrationMetadata": {
        "priceSheetTypeId": ""
      },
      "price": 159.98,
      "name": "Bata essdvsd M MILITAR",
      "variation": [
        {
          "type": "TAMANHO",
          "value": "M",
          "label": "Tamanho(UN-G5)",
          "valueRef": null
        },
        {
          "type": "COR",
          "value": "MILITAR",
          "label": "MILITAR",
          "valueRef": null
        }
      ],
      "stock": 0,
      "files": ["/"]
    },
    {
      "externalId": "id",
      "integrationMetadata": {
        "priceSheetTypeId": ""
      },
      "price": 159.98,
      "name": "Bata essdvsd P MARSALA",
      "variation": [
        {
          "type": "TAMANHO",
          "value": "P",
          "label": "Tamanho(UN-G5)",
          "valueRef": null
        },
        {
          "type": "COR",
          "value": "MARSALA",
          "label": "MARSALA",
          "valueRef": null
        }
      ],
      "stock": 0,
      "files": ["/"]
    },
    {
      "externalId": "id",
      "integrationMetadata": {
        "priceSheetTypeId": ""
      },
      "price": 159.98,
      "name": "Bata essdvsd M MARSALA",
      "variation": [
        {
          "type": "TAMANHO",
          "value": "M",
          "label": "Tamanho(UN-G5)",
          "valueRef": null
        },
        {
          "type": "COR",
          "value": "MARSALA",
          "label": "MARSALA",
          "valueRef": null
        }
      ],
      "stock": 0,
      "files": ["/"]
    }
  ]
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| success   | boolean | true / false |

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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateProduct.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
