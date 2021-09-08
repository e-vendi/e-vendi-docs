---
id: getCatalogDetails
title: Pegar detalhes de catálogo
---

## Método

**/updateCatalog**

`POST` https://e-vendi.com.br/api/updateCatalogCover

---

## Conceituação 

Pegar detalhes de um catálogo

Este método serve para pegar todos os detalhes de um catálogo.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| externalId | integer | Seu código de identificação no e-vendi |
| catalogExternalId | string | ID do catálogo |

```json
{
    "env": "dev",
    "integrationToken": "NA2gLbUgLJhSJ1WaVHmy",
    "externalId": "mobiage-1887.1888.1889.-3531689",
    "catalogExternalId": "39445C8F8A1A610A67E27290EE9E7C17"
}
```

---

## Response

### 200

### postbackPaymentUrl

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | Retorno da string |
| valueType | string | Tipo do valor |

### totalItens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| integerValue | string | Quantidade de itens | 
| valueType | string | Tipo do valor |

### createdAt

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| integerValue | string | Timestamp da criação do catálogo |
| valueType | string | Tipo do valor |

### expiredAt

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | string | Retorno da data de expiração |
| valueType | string | Tipo do valor |

### products

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |

### values

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | Valor da string |
| valueType | string | tipo do valor |

### tablePriceId

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | string | Valor vazio |
| valueType | string | Tipo do valor |

### cover

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | Campo para a imagem de capa |
| valueType | string | Tipo do valor |

### name

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | Campo para o nome |
| valueType | string tipo do valor |

### banners

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| values | vetor | Quatidade de banners |
| valueType | string | Tipo do valor |

### tablePriceWholesaleId

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | string | valor para ativar a permanência no catálogo |
| valueType | string | Tipo do valor |

### wholesale

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo para ativar ou não a ferramente de permanência no catálogo |
| valueType | string | tipo do valor |

### friendlyName

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | Campo para salvar o nome curto do catálogo |
| valueType | string | Tipo do valor |

### enableExpiration

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo boolenao para fazer o catálogo expirar ou não |
| valueType | string | Tipo do valor |

### published

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| booleanValue | boolean | Atributo boolenao para ativar ou desativar o catálogo |
| valueType | string | Tipo do valor |

### minimalPriceNumber

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | boolean | valor para ativar o preço mínimo |
| valueType | string | tipo do valor |

### postbackUrl

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | url | Webhook(Postback) necessário para a conexão |
| valueType | string | Tipo do valor |

### minimalPrice

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | boolean | Atriburo de preço mínimo |
| valueType | string | Tipo do valor | 

### minimalItens

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| nullValue | boolean | Atributo para quantidade miníma de itens |
| valueType | string | Tipo do valor |

### externalId 

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| stringValue | string | ID da empresa |
| valueType | string | Tipo do valor |

### credentials

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| private_key | string | Private Key |
| client_email | string | email do cliente |

### _firestore

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| projectId | string | Nome do usuário administrador |
| firebaseVersion | string | Versão do banco |
| libName | string | Nome da bibliotéca |
| libVersion | string | Versão da bibliotéca |
| servicePath | string | Caminho do serviço | 
| port | integer | porta referente |

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
            "stringValue": "https://cd.shoppub.com.br/usevolt/media/cache/77/ff/77ff69ba1a0a0d6fadff3d0c7e941531.jpg",
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
            "stringValue": "https://grands.com.br/test",
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
                    "client_email": "firebase-adminsdk-q68kh@zaap-admin.iam.gserviceaccount.com"
                },
                "projectId": "zaap-admin",
                "firebaseVersion": "8.10.0",
                "libName": "gccl",
                "libVersion": "3.7.3 fire/8.10.0",
                "servicePath": "firestore.googleapis.com",
                "port": 443,
                "clientConfig": {},
                "scopes": [
                    "https://www.googleapis.com/auth/cloud-platform",
                    "https://www.googleapis.com/auth/datastore"
                ]
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
                "DoZAp134wc57M2XQ3wHJ",
                "catalogs",
                "tD3Ja8ZnnAvR1ocpAHbb"
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

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getCatalogDetails.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
