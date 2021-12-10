---
id: getCatalogDetails
title: Pegar detalhes de catálogo
---

## Método

**/getCatalogDetails**

`POST` https://e-vendi.com.br/api/getCatalogDetails

---

## Conceituação

Pegar detalhes de um catálogo.

Este método serve para pegar todos os detalhes de um catálogo.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **Dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **Prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId\* | integer | Seu código de identificação no e-vendi |
| catalogExternalId\* | string | Código de catálogo do seu sistema |

```json
{
  "env": "dev",
  "integrationToken": "Seu token",
  "externalId": "Seu ID",
  "catalogExternalId": "ID do catálogo"
}
```

---

## Response

### 200

### \_fieldsProto

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| name | name | Nome do catálogo |
| friendlyName | friendlyName | Nome do catálago |
| enableExpiration | enableExpiration | Identifica se está habilitado para expirar |
| updatedAt | updatedAt | Data da última atualização do catálogo |
| published | published | Data de publicação do catálogo |
| tablePriceWholesaleId | tablePriceWholesaleId | ID da tabela de preço de atacado |
| wholesale | wholesale | Identifica se tem tabela de preço de atacado |
| tablePriceId | tablePriceId | ID da tabela de preço |
| totalItens | totalItens | Total de produtos na tabela de preço |
| minimalPriceNumber | minimalPriceNumber | Número para preço mínimo |
| bannersMobile | bannersMobile | Banners que serão exibidos quando no mobile |
| banners | banners | Banners que serão exibidos |
| postbackPaymentUrl | postbackPaymentUrl | URL para retorno quando pagamento for aprovado |
| expiredAt | expiredAt | Data de expiração do catálogo |
| minimalPrice | minimalPrice | Preço mínimo |
| ignoreItens | ignoreItens | Produtos que serão ignorados do catálogo |
| createdAt | createdAt | Data de criação do catálogo |
| postbackUrl | postbackUrl | URL para retorno quando pedido for feito |
| cover | cover | Imagem de capa |
| externalId | externalId | ID do catálogo no seu sistema |
| minimalItens | minimalItens | Quantidade mínima de itens no catálogo |
| products | products | Produtos inclusos no catálogo |

### \_ref

| Atributos   |    Tipo     | Descrição |
| :---------- | :---------: | :-------- |
| \_firestore | \_firestore | firestore |
| \_path      |   \_path    | firestore |

### \_firestore

| Atributos       |  Tipo   | Descrição                     |
| :-------------- | :-----: | :---------------------------- |
| projectId       | string  | Nome do usuário administrador |
| firebaseVersion | string  | Versão do banco               |
| libName         | string  | Nome da bibliotéca            |
| libVersion      | string  | Versão da bibliotéca          |
| servicePath     | string  | Caminho do serviço            |
| port            | integer | porta referente               |

### \_path

| Atributos | Tipo  | Descrição |
| :-------- | :---: | :-------- |
| segments  | array |           |

### name

| Atributos   |  Tipo  | Descrição         |
| :---------- | :----: | :---------------- |
| stringValue | string | Campo para o nome |
| valueType   | string | tipo do valor     |

### friendlyName

| Atributos   |  Tipo  | Descrição                                  |
| :---------- | :----: | :----------------------------------------- |
| stringValue | string | Campo para salvar o nome curto do catálogo |
| valueType   | string | Tipo do valor                              |

### enableExpiration

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo boolenao para fazer o catálogo expirar ou não |
| valueType | string | Tipo do valor |

### updatedAt

| Atributos    |  Tipo  | Descrição                                  |
| :----------- | :----: | :----------------------------------------- |
| integerValue | number | Timestamp referente à data da atualização. |
| valueType    | string | Tipo do valor                              |

### published

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo boolenao para identificar se catálogo está publicado |
| valueType | string | Tipo do valor |

### tablePriceWholesaleId

| Atributos   |  Tipo  | Descrição                        |
| :---------- | :----: | :------------------------------- |
| stringValue | string | ID da tabela de preço de atacado |
| valueType   | string | Tipo do valor                    |

### wholesale

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo para ativar ou não a ferramenta de permanência no catálogo |
| valueType | string | tipo do valor |

### tablePriceId

| Atributos   |  Tipo  | Descrição             |
| :---------- | :----: | :-------------------- |
| stringValue | string | ID da tabela de preço |
| valueType   | string | Tipo do valor         |

### totalItens

| Atributos    |  Tipo  | Descrição           |
| :----------- | :----: | :------------------ |
| integerValue | string | Quantidade de itens |
| valueType    | string | Tipo do valor       |

### minimalPriceNumber

| Atributos |  Tipo   | Descrição                        |
| :-------- | :-----: | :------------------------------- |
| nullValue | boolean | valor para ativar o preço mínimo |
| valueType | string  | tipo do valor                    |

### bannersMobile

| Atributos |      Tipo      | Descrição           |
| :-------- | :------------: | :------------------ |
| values    | array<object\> | Banners para mobile |
| valueType |     string     | Tipo do valor       |

### banners

| Atributos |      Tipo      | Descrição     |
| :-------- | :------------: | :------------ |
| values    | array<object\> | Banners       |
| valueType |     string     | Tipo do valor |

### postbackPaymentUrl

| Atributos   |  Tipo  | Descrição                                             |
| :---------- | :----: | :---------------------------------------------------- |
| stringValue | string | Webhook(postbackPaymentUrl) necessário para a conexão |
| valueType   | string | Tipo do valor                                         |

### expiredAt

| Atributos |  Tipo  | Descrição                    |
| :-------- | :----: | :--------------------------- |
| nullValue | string | Retorno da data de expiração |
| valueType | string | Tipo do valor                |

### minimalPrice

| Atributos |  Tipo   | Descrição                |
| :-------- | :-----: | :----------------------- |
| nullValue | boolean | Atriburo de preço mínimo |
| valueType | string  | Tipo do valor            |

### ignoreItens

| Atributos  |      Tipo      | Descrição                           |
| :--------- | :------------: | :---------------------------------- |
| arrayValue | array<object\> | IDs de produtos que serão ignorados |
| valueType  |     string     | Tipo do valor                       |

### createdAt

| Atributos    |  Tipo  | Descrição                        |
| :----------- | :----: | :------------------------------- |
| integerValue | string | Timestamp da criação do catálogo |
| valueType    | string | Tipo do valor                    |

### postbackUrl

| Atributos   |  Tipo  | Descrição                                   |
| :---------- | :----: | :------------------------------------------ |
| stringValue |  url   | Webhook(Postback) necessário para a conexão |
| valueType   | string | Tipo do valor                               |

### cover

| Atributos   |  Tipo  | Descrição                   |
| :---------- | :----: | :-------------------------- |
| stringValue | string | Campo para a imagem de capa |
| valueType   | string | Tipo do valor               |

### externalId

| Atributos   |  Tipo  | Descrição     |
| :---------- | :----: | :------------ |
| stringValue | string | ID da empresa |
| valueType   | string | Tipo do valor |

### minimalItens

| Atributos |  Tipo   | Descrição                                |
| :-------- | :-----: | :--------------------------------------- |
| nullValue | boolean | Atributo para quantidade miníma de itens |
| valueType | string  | Tipo do valor                            |

### products

| Atributos  |      Tipo      | Descrição            |
| :--------- | :------------: | :------------------- |
| arrayValue | array<object\> | Produtos do catálogo |
| valueType  |     string     | tipo do valor        |

### values

| Atributos   |  Tipo  | Descrição       |
| :---------- | :----: | :-------------- |
| stringValue | string | Valor da string |
| valueType   | string | tipo do valor   |

### credentials

| Atributos    |  Tipo  | Descrição        |
| :----------- | :----: | :--------------- |
| private_key  | string | Private Key      |
| client_email | string | email do cliente |

Exemplo

```json
{
  "_fieldsProto": {
    "postbackPaymentUrl": {
      "stringValue": "",
      "valueType": "stringValue"
    },
    "totalItens": {
      "integerValue": "2",
      "valueType": "integerValue"
    },
    "createdAt": {
      "integerValue": "1630675157435",
      "valueType": "integerValue"
    },
    "expiredAt": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "products": {
      "arrayValue": {
        "values": [
          {
            "stringValue": "ho2IxgmyC2AIDKmuq2rt",
            "valueType": "stringValue"
          },
          {
            "stringValue": "ho2IxgmyC2AIDKmuq2rt",
            "valueType": "stringValue"
          }
        ]
      },
      "valueType": "arrayValue"
    },
    "tablePriceId": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "cover": {
      "stringValue": "https://",
      "valueType": "stringValue"
    },
    "name": {
      "stringValue": "Catalogo N∫ 000035",
      "valueType": "stringValue"
    },
    "banners": {
      "arrayValue": {
        "values": []
      },
      "valueType": "arrayValue"
    },
    "tablePriceWholesaleId": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "wholesale": {
      "booleanValue": false,
      "valueType": "booleanValue"
    },
    "friendlyName": {
      "stringValue": "catalogo-n-000035",
      "valueType": "stringValue"
    },
    "enableExpiration": {
      "booleanValue": false,
      "valueType": "booleanValue"
    },
    "published": {
      "booleanValue": true,
      "valueType": "booleanValue"
    },
    "minimalPriceNumber": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "postbackUrl": {
      "stringValue": "https://",
      "valueType": "stringValue"
    },
    "minimalPrice": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "minimalItens": {
      "nullValue": "NULL_VALUE",
      "valueType": "nullValue"
    },
    "externalId": {
      "stringValue": "333",
      "valueType": "stringValue"
    }
  },
  "_ref": {
    "_firestore": {
      "_settings": {
        "credentials": {
          "private_key": "...",
          "client_email": "@email"
        },
        "projectId": "zaap-admin",
        "firebaseVersion": "8.10.0",
        "libName": "gccl",
        "libVersion": "3.7.3 fire/8.10.0",
        "servicePath": "firestore.googleapis.com",
        "port": 443,
        "clientConfig": {},
        "scopes": ["https://", "https://"]
      },
      "_settingsFrozen": true,
      "_serializer": {},
      "_projectId": "zaap-admin",
      "registeredListenersCount": 0,
      "_lastSuccessfulRequest": 1630937810048,
      "_backoffSettings": {
        "initialDelayMs": 100,
        "maxDelayMs": 60000,
        "backoffFactor": 1.3
      },
      "_preferTransactions": false,
      "_clientPool": {
        "concurrentOperationLimit": 100,
        "maxIdleClients": 1,
        "activeClients": {},
        "terminated": false,
        "terminateDeferred": {
          "promise": {
            "domain": {
              "domain": null,
              "_events": {},
              "_eventsCount": 3,
              "members": []
            }
          }
        }
      }
    },
    "_path": {
      "segments": [
        "organizations",
        "sdasdg54gw4fwe4e",
        "catalogs",
        "E5S4FSDF56W5"
      ],
      "projectId": "zaap-admin",
      "databaseId": "(default)"
    },
    "_converter": {}
  },
  "_serializer": {},
  "_readTime": {
    "_seconds": 1630937810,
    "_nanoseconds": 38887000
  },
  "_createTime": {
    "_seconds": 1630675157,
    "_nanoseconds": 491183000
  },
  "_updateTime": {
    "_seconds": 1630937306,
    "_nanoseconds": 341519000
  }
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

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getCatalogDetails.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
