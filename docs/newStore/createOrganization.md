---
id: createOrganization
title: Criar/atualizar empresa
---

## Método

**/createOrganizationV2**

`POST` https://e-vendi.com.br/api/createOrganizationV2  

---

## Conceituação

Criar e atualizar empresa

Esse método é responsável por cadastrar e criar sua empresa, ou caso ja tenha criado ele irá atualizar os dados novos que forem inseridos

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |

#### Store 

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| domainName | string | Nome escolhido para o domínio |
| name | string | Nome da sua loja | 
| controlStock | boolean | Definir se você quer controlar o estoque da sua loja | 
| phone | string | O painel administrativo do e-vendi fica em um aplicativo, por isso é necessário informar o número que será feito a autentificação |
| deliveryFee | float | Taxa de delivery |
| organizationFreightMode | string | modo de frete da organização | 
| storeMode | string | Tipo da loja (ex: Varejo) |

#### Bank

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
| payments | string | Tipo de pagamento (ex: "BOLETO")| 

## Request body

```json
{
    "integrationToken": "seu token",
    "env": "dev",
    "externalId": "seu id",
    "store": {
        "domainName": "Nome",
        "name": "Store",
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
        "holderName": "Nome",
        "document": "33333333333",
        "payments": [
            "BOLETO",
            "CREDIT_CARD",
            "PRESENTIAL",
            "PIX"
        ]
    }
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| Response | boolean | True / false |

Exemplo

```json
success
```

### 400 

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/createOrganization.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>


