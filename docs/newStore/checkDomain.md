---
id: checkDomain
title: Verificar subdominio
---

## Método

**/checkDomainAvailable**

`POST` https://e-vendi.com.br/api/checkDomainAvailable

---

## Conceituação

Verificando disponibilidade de dominio

Este método é responsável por verificar a disponibilidade do dominio.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco)

:::

| Atributos    |  Tipo  | Descrição          |
| :----------- | :----: | :----------------- |
| domainName\* | string | Nome para o domíno |

## Request body

```json
{
  "domainName": "Nome"
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| available | boolean | True / false |

Exemplo

```json
{
  "available": true
}
```

### 405

Neste caso certifique que esteja enviando o corretamente a especificação do método, ou seja verifique se você enviou o POST ou GET conforme especificado no inicio deste tópico.

### 415

Caso você receba um erro 415, certifique de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/checkDomain.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
