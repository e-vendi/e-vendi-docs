---
id: createProduct
title: Criar/atualizar catálogo
---

## Método

**/createCatalog**

`POST` https://e-vendi.com.br/api/createCatalog

---

## Conceituação 

Criar e atualizar o catálogo de produtos

Neste método você será capaz de criar e atualizar seu catálogo de produtos.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |
| externalId | integer | Seu ID dentro da e-vendi |
| name | string | Nome do catálogo |
| enableExpiration | boolean | Atributo para fazer o catálogo expirar o não |

#### Products

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| controlStock | boolean | Atributo para o controle de estoque |
| enablePhotoByColor | boolean | Este atributo serve para separar produtos por cores, apresentando um modelo do produto e mostrando os modelos com cores diferentes| 
| postbackUrl | url | Webhook(Postback) necessário para a conexão |
| externalId | string | ID do catálogo | 
| isGrid | boolean | Atributo para definir se o produto tem variações de tamanho e cor | 

#### Itens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| externalId | string | ID do produto |
| files | url | campo para o link da imagem | 
| name | string | nome do produto | 
| price | float | Preço do produto | 
| stock | integer | Quantidade do produto em estoque | 
| productType | string | Tipo do produto |
| reference | integer | Referência do produto | 

##### Variation

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| label | string | Nome |
| type | string | Tipo (ex: "COR") |
| value | string | Cor do produto |
| valueRef | string | Hexadecimal da cor | 

### Opcionais

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| expiredAt | boolean | Atributo para saber se o catálogo está ou não expirado |
| published | boolean | Atributo para publicar ou não o catálogo |
| wholesale | boolean | Este atributo serve para quando você quer que o usuário não alterne entre catálogos, tendo que realziar suas compras apenas no catálogo selecionado por esse atributo |
| minimalPriceNumber | boolean | Este atributo serve para mostrar os preços mínimos |
| minimalItens | boolean | Este atributo serve para mostrar os itens mínimos |
| postbackPaymentUrl | boolean | Webhook (Postback) para quando uma compra é realizada na plataforma, um aviso para saber quando algo for vendido |
| cover | boolean | Esse atributo serve para colocar uma capa(Thumbnail) no catálogo |

## Request body

```json
{
  "env": "dev",
  "integrationToken": "WTnxjpDoJD8kkdGucbXS",
  "organizationExternalId": "81728472000167",
  "externalId": "35",
  "name": "Catalogo N∫ 000035",
  "enableExpiration": false,
  "expiredAt": null,
  "published": true,
  "wholesale": false,
  "minimalPriceNumber": null,
  "minimalItens": null,
  "postbackPaymentUrl": null,
  "cover": null,
  "postbackUrl": "https://grands.com.br/test",
  "products": [
    {
	  "controlStock": true,
      "enablePhotoByColor": true,
      "externalId": "5000",
      "isGrid": true,
      "itens": [
        {
          "externalId": "005000P001",
          "files": [
            "https://cd.shoppub.com.br/usevolt/media/cache/77/ff/77ff69ba1a0a0d6fadff3d0c7e941531.jpg"
          ],
          "name": "Crusher",
          "price": 2.9,
          "stock": 10,
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
      "name": "Crusher",
      "price": 2.9,
      "productType": "Manga Longa",
      "reference": "5001"
    }
  ]
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| url | link | Retorna o link para o seu catálogo |

Exemplo

```json
{
    "url": "https://gabrielMS.e-vendi.site/catalogo-n-000035"
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/createProduct.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
