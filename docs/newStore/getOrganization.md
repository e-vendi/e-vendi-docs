---
id: getOrganization
title: Dados da empresa
---

## Método

**/getOrganization**

`POST` https://e-vendi.com.br/api/getOrganization

---

## Conceituação

Buscar dados de uma empresa

Esse método é responsável por trazer os dados das empresas solicitadas.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |

## Request body

```json
{
  "env": "dev",
  "integrationToken": "KS852Aasfd2458251",
  "organizationExternalId": "1"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| externalId | integer | Seu código de identificação no e-vendi |

### Store
#### FreeShipping
| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| region | string | ID da região do usuário  |
| name | string | Nome da região do usuário |
| active | boolean | Atributo para saber se essa região está ativa ou não |
| minimalValue | integer | Valor para o retorno |
| enableMsgTracking | boolean | Atributo para ativar ou não o rastreamento |
| createdAt | integer | Timestamp com a data e hora da primeira interação  |
| active | boolean | Atributo para saber se a loja está ativa ou não | 
| ecommerceCatalogId | string | Atributo para colocar o id do Ecomerce  |
| enableCartExpiration | boolean | Atributo para fazer o carrinho de compras expirar ou não |
| cartExpirationHours | integer | Atributo para atribuir a quantidade de tempo para o carrinho expirar |
| organizationSlogan | string | Slogan da sua loja, para ser concatenaco com o nome |
| plugChatCode | string | Token de integração com o Plug Chat |
| titleSEO | string | Titulo atribuido ao SEO da empresa |
| descriptionSEO | string | Descrição atribuida ao SEO da empresa |
| keywords | string | Palavras chaves para encontrar o SEO da empresa |
| activeWithDraw | boolean | Opção para tirar o produto na loja |
| domainName | string | Nome do dominio |
| domainHost | string | URL do dominio | 
| enableEcommerceMode | boolean | Atributo para mudar para o modo Ecommerce |
| name | string | Nome da loja | 
| controlStock | boolean | Este atributo é para controlar o estoque | 
| phone | string | Atributo para colocar seu telefone |
| deliveryFee | float | Taxa para delivery | 
| organizationFreightMode | string | modo de frete da organização |
| storeMode | string | Tipo da loja | 

### Bank

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| bankCode | integer | Código do banco (ex: 333) |
| accountType | integer | Tipo da conta (ex: Conta corrente) |
| agency | integer | Agência do banco (ex: 3333) |
| dvAgency | integer | Número da agência |
| accountNumber | integer | Número da conta (ex: 33333)
| dvAccount | integer | Número da conta (ex: 3)
| holderName | string | Nome da pessoa |
| document | integer | CPF da pessoa |
| payments | string | Tipo de pagamento | 

Exemplo

```json
{
    "integrationToken": "KS852Aasfd2458251",
    "env": "dev",
    "externalId": "1",
    "store": {
        "freeShipping": [
            {
                "region": "SUDESTE",
                "name": "Sudeste",
                "active": false,
                "minimalValue": 0
            },
            {
                "region": "NORDESTE",
                "name": "Nordeste",
                "active": false,
                "minimalValue": 0
            },
            {
                "region": "NORTE",
                "name": "Norte",
                "active": false,
                "minimalValue": 0
            },
            {
                "region": "CENTRO_OESTE",
                "name": "Centro-Oeste",
                "active": false,
                "minimalValue": 0
            },
            {
                "region": "SUL",
                "name": "Sul",
                "active": false,
                "minimalValue": 0
            }
        ],
        "enableMsgTracking": false,
        "createdAt": 1630593204719,
        "active": true,
        "ecommerceCatalogId": null,
        "enableCartExpiration": false,
        "cartExpirationHours": 0,
        "organizationSlogan": null,
        "plugChatCode": null,
        "titleSEO": null,
        "descriptionSEO": null,
        "keywords": [],
        "activeWithDraw": false,
        "domainName": "nome",
        "domainHost": "e-vendi.site",
        "enableEcommerceMode": false,
        "name": "nome Store",
        "integrationMetadata": {
            "controlStock": true
        },
        "phone": "+5544999999999",
        "deliveryFee": 2.5,
        "organizationFreightMode": "FIX_TAX",
        "storeMode": "VAREJO"
    },
    "bank": {
        "bankCode": "333",
        "accountType": "conta_corrente",
        "agency": "3333",
        "dvAgency": "",
        "accountNumber": "33333",
        "dvAccount": "3",
        "holderName": "nome",
        "document": "333333333333",
        "payments": [
            "BOLETO",
            "CREDIT_CARD",
            "PRESENTIAL",
            "PIX"
        ]
    }
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getOrganization.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>