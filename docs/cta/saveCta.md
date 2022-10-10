---
id: saveCta
title: Salvar CTA
---

## Método

**/saveCta**

`POST` https://e-vendi.com.br/api/saveCta

---

## Conceituação

Salvar CTA.

Esse método é responsável por criar CTA.

Caso exista um CTA neste método é possível alterá-lo.

---

## Atributos

:::note

**organizationExternalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o organizationExternalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |
| cta\* | cta | Informações sobre o CTA |

### cta\*

:::note

O atributo modalityType somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar os cupons do varejo e do atacado, desta forma você pode ter cupons diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id do CTA |
| label | string | Label do CTA |
| type | string | Tipo do CTA. Tipos disponíveis (VIEW_PRODUCT) |
| active | boolean | Identifica se o CTA está ativo |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "seu id",
  "cta": {
    "id": "id CTA",
    "label": "Visualizar Produto",
    "type": "VIEW_PRODUCT",
    "active": true
  }
}
```

---

## Response

### 200

```json
{
  "_writeTime": {
    "_seconds": 1637236969,
    "_nanoseconds": 444294000
  }
}
```

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/saveCta.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
