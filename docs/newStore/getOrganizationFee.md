---
id: getOrganizationFee
title: Taxas da empresa
---

## Método

**/getOrganizationFee**

`POST` https://e-vendi.com.br/api/getOrganizationFee

---

## Conceituação

Verificar as taxas que serão cobradas de acordo com o método de pagamento escolhido pelo cliente.

Esse método é responsável por pegar as taxas da empresa.

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
  "externalId": "seu id"
}
```

---

## Response

### 200

| Atributos  |    Tipo    | Descrição                                       |
| :--------- | :--------: | :---------------------------------------------- |
| boleto     |   boleto   | Informações sobre cobrança no boleto            |
| pix        |    pix     | Informações sobre cobrança no pix               |
| creditCard | creditCard | Informações sobre cobrança no cartão de crédito |

### boleto

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| type | string | Informação sobre o tipo da cobraça, (valor ou porcentagem) |
| description | string | Descrição sobre a taxa e como é aplicada |
| fee | number | Valor/Porcentagem da taxa |

### pix

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| type | string | Informação sobre o tipo da cobraça, (valor ou porcentagem) |
| description | string | Descrição sobre a taxa e como é aplicada |
| fee | number | Valor/Porcentagem da taxa |

### creditCard

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| type | string | Informação sobre o tipo da cobraça, (valor ou porcentagem) |
| description | string | Descrição sobre a taxa e como é aplicada |
| rules | rules | Regras que serão aplicadas conforme a quantidade de parcelas |

### rules

| Atributos   |  Tipo  | Descrição                                |
| :---------- | :----: | :--------------------------------------- |
| description | string | Descrição sobre a taxa e como é aplicada |
| fee         | number | Valor/Porcentagem da taxa                |
| parcelStart | number | Número da parcela inicial                |
| parcelEnd   | number | Número da parcela final                  |

Exemplo

```json
{
  "boleto": {
    "type": "VALUE",
    "description": "É cobrado o valor de R$ 4,99 por boleto liquidado.",
    "fee": 4.99
  },
  "pix": {
    "type": "PERCENTAGE",
    "description": "É cobrado a taxa de 2.19% por pix pago.",
    "fee": 2.19
  },
  "creditCard": {
    "type": "PERCENTAGE",
    "description": "Para cartão de crédito a taxa é variável de acordo com o número de parcelas.",
    "rules": [
      {
        "description": "Quando for apenas uma parcela, a taxa é de 5.75%",
        "fee": 5.75,
        "parcelStart": 1,
        "parcelEnd": 1
      },
      {
        "description": "Quando o número de parcela for entre 2 até 7, a taxa é de 6.19%",
        "fee": 6.19,
        "parcelStart": 2,
        "parcelEnd": 7
      },
      {
        "description": "Quando o número de parcela for entre 7 até 12, a taxa é de 6.29%",
        "fee": 6.29,
        "parcelStart": 7,
        "parcelEnd": 12
      }
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/organizationExist.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
