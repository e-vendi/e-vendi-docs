---
id: searchOrders
title: Buscar pedidos
---

## Método

**/searchOrders**

`POST` https://e-vendi.com.br/api/searchOrders

---

## Conceituação

Buscar pedidos.

Neste método você será capaz de buscar os pedidos realizados.

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
| filter | filter | Filtros para refinar sua busca |
| page | number | Página atual |
| pageSize | number | Quantidade de itens por página |

### filter

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| status | string | Busca por status do pedido (OPEN, CLOSED, REVERSED, REFUSED) |
| query | string | É um like na qual você pode pesquisar pelo nome do cliente ou número do pedido |
| dates | dates | Pode pesquisar por data também (Pode informa apenas data inicial, ou apenas a data final, pode informas ambas ou nenhuma) |

### dates

| Atributos |  Tipo  | Desc                           |
| :-------- | :----: | :----------------------------- |
| start     | number | Data inicial para sua pesquisa |
| end       | number | Data final para sua pesquisa   |

## Request body

```json
{
  "env": "prod",
  "integrationToken": "Seu token",
  "organizationExternalId": "id",
  "page": 1,
  "pageSize": 10,
  "filter": {
    "status": "CLOSED",
    "query": "1003",
    "dates": {
      "start": 1631909862668,
      "end": null
    }
  }
}
```

---

## Response

### 200

| Atributos |      Tipo      | Descrição                              |
| :-------- | :------------: | :------------------------------------- |
| count     |     number     | Quantidades de registros encontrados   |
| page      |     number     | Página exibida                         |
| pageSize  |     number     | Quantidade de registros por página     |
| values    | array<values/> | Registros retornados com base na busca |

### values

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | Id do pedido |
| orderNumber | number | Número do pedido |
| createdAt | number | Data do pedido |
| customerName | string | Nome do cliente |
| subTotal | number | Total do pedido |
| total | number | Total somado ao valor do frete |
| freight | number | Valor do frete |
| paymentMethod | string | Método de pagamento |
| paymentStatus | paymentStatus<enum/> | Status do pagamento |
| observation | string | Observação que o cliente deixou no pedido |
| status | string | status do pedido (OPEN, CLOSED, REVERSED, REFUSED) |

### paymentStatus

| Atributos | Descrição |
| :-- | :-- |
| processing | Transação está em processo de autorização. |
| authorized | Transação foi autorizada. Cliente possui saldo na conta e este valor foi reservado para futura captura, que deve acontecer em até 5 dias para transações criadas com api_key. Caso não seja capturada, a autorização é cancelada automaticamente pelo banco emissor, e o status da transação permanece authorized. |
| paid | Transação paga. Foi autorizada e capturada com sucesso, e para boleto, significa que nossa API já identificou o pagamento de seu cliente. |
| refunded | Transação estornada completamente. |
| waiting_payment | Transação aguardando pagamento (status válido para boleto bancário). |
| pending_refund | Transação do tipo boleto e que está aguardando para confirmação do estorno solicitado. |
| refused | Transação recusada, não autorizada. |
| chargedback | Transação sofreu chargeback. Mais em nossa central de ajuda. |
| analyzing | Transação encaminhada para a análise manual feita por um especialista em prevenção a fraude. |
| pending_review | Transação pendente de revisão manual por parte do lojista. Uma transação ficará com esse status por até 48 horas corridas. |

### 400

Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

### 405

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/searchOrders.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
