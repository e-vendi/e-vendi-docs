---
id: getBanks
title: Bancos Suportados
---

## Método

**/getBanks**

`GET` https://e-vendi.com.br/api/getBanks

---

## Conceituação 

Pegar Bancos Suportados

Este método é responsável por retornar todos os bancos suportados.

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | ID do banco |
| name | string | Nome do banco |
| code | string | Código do banco |

Exemplo

```json
[
    {
        "id": "0Ggz8ftjNWrgpSsPL4hd",
        "name": "BANCO DO BRASIL",
        "code": "001"
    },
    {
        "id": "0kzEG52dOtIPeZdxdupD",
        "name": "BANCO S.R.L S.A",
        "code": "204"
    },
    {
        "id": "0xhj7mYZM7k68WxiiLRV",
        "name": "BANCO SUMITOMO BRASILEIRO S.A",
        "code": "464"
    },
    {
        "id": "0zj02n0VDgzH1XCYKqQC",
        "name": "BANCO DO ESTADO DO MATO GROSSO S.A.",
        "code": "032"
    },
    {
        "id": "1APOQjL8alRHAO9gVVIi",
        "name": "BANCO BANDEIRANTES S.A",
        "code": "230"
    }
]
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/checkDomain.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
