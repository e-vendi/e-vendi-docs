---
id: addProductsCatalog
title: Adicionar Produtos
---

## Método

**/addProductsCatalog**

`POST` https://e-vendi.com.br/api/addProductsCatalog

---

## Conceituação

Adicionar produtos em um catálogo.

Este método serve para adicionar produtos em algum catálogo da sua loja.

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
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId\* | string | Seu código de identificação do catálogo no e-vendi |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| products\* | array<products\> | Uma lista de produtos que fazem parte do catálogo |

### Products\*

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| controlStock | boolean | Atributo para o controle de estoque |
| enablePhotoByColor | boolean | Este atributo serve para separar produtos por cores, apresentando um modelo do produto e mostrando os modelos com cores diferentes |
| postbackUrl | url | Webhook(Postback) necessário para a conexão |
| externalId | string | ID do Produto |
| isGrid\* | boolean | Atributo para definir se o produto tem variações de tamanho e cor. Se tiver variação deve mandar como true, caso contrário false |
| brandName | string | Nome da marca do produto |
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
| productType | string | Tipos do produto. Ex: 'Tênis' |
| reference | string | Referência do produto |
| titleSEO | string | Título de SEO para o produto |
| wholesale | boolean | Identifica se o produto está como atacado, caso seja "true" apenas usuário logado e que seja revendedor poderá comprar |

### Itens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| externalId | string | ID do item |
| files | array<url\> | campo para o links da imagem |
| name | string | nome do produto |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| prices | array<prices\> | Preço do produto |
| stock | integer | Quantidade do produto em estoque |
| variations | array<variation\> | Variações que item possui |

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

## Request body

```json
{
  "env": "dev",
  "externalId": "Seu ID",
  "integrationToken": "Seu Token",
  "organizationExternalId": "ID do catálogo",
  "products": [
    {
      "controlStock": true,
      "brandName": "marca",
      "description": null,
      "descriptionSEO": "Conforto e leveza durante a caminhada com o Tênis",
      "enablePhotoByColor": false,
      "endRelease": null,
      "externalId": "dsfsd6sd5sda5asdg35d6",
      "freightHeight": null,
      "freightLength": null,
      "freightWeight": null,
      "freightWidth": null,
      "genders": ["MASC", "FEM"],
      "integrationMetadata": {},
      "isGrid": true,
      "wholesale": true,
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
      "productType": "Tênis",
      "reference": "355421",
      "titleSEO": "Tênis Renew Nike"
    }
  ]
}
```

---

## Response

### 204

Essa resposta indica que a solicitação foi bem sucedida

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/addProductsCatalog.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
