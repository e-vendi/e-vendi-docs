---
id: getClients
title: Pegar dados dos clientes
---

## Método

**/getClients**

`POST` https://e-vendi.com.br/api/getClients

---

## Conceituação

Buscar clientes

Esse método é responsável por trazer os clientes cadastrados na sua loja.

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
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **Dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **Prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| organizationExternalId\* | string | Seu código de identificação no e-vendi |

---

## Request body

```json
{
  "env": "dev",
  "integrationToken": "seu token",
  "organizationExternalId": "seu id"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id do cliente no e-vendi |
| document | string | CPF/CNPJ do cliente |
| ie | string | Inscrição estadual caso o cliente seja uma empresa (ter cnpj) |
| password | string | Senha encriptografada do cliente |
| phone | string | Número de telefone do cliente |
| whatsapp | string | Número do whatsapp do cliente |
| globalDocument | string | caso o cliente seja estrangeiro, armazena um documento, por exemplo passaporte |
| createdAt | number | Data na qual o cliente se cadastrou |
| isDealer | boolean | Informa se o cliente é também um revendedor |
| country | country | Informações sobre o país do cliente |
| dealerReject | boolean | Identifica se foi recusado como revendedor |
| token | string | Token do cliente |
| email | string | E-mail do cliente |
| dealerStatus | string | Status de revendedor do cliente |
| verified | boolean | Identifica se o cliente fez a verificação do seu e-mail |
| name | string | Nome do cliente |
| requestDealer | boolean | Identifica se o cliente pediu para ser revendedor |
| wishListCount | number | Quantidade da lista de favoritos do clientes |

### country

| Atributos  |  Tipo  | Descrição                  |
| :--------- | :----: | :------------------------- |
| iso3       | string | ISO3                       |
| phone      | string | Código de telefone do país |
| code       | string | Código do país             |
| name       | string | Nome do país               |
| formalName | string | Nome formal do país        |
| iso        | string | ISO                        |

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/getClients.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
