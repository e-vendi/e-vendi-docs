---
id: checkDomain
title: Verificar subdomínio
---

## Método

**/checkDomainAvailable**

`POST` https://e-vendi.com.br/api/checkDomainAvailable

---

## Conceituação

Verificando disponibilidade de domínio.

Este método é responsável por verificar a disponibilidade do domínio.

---

## Atributos

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos    |  Tipo  | Descrição          |
| :----------- | :----: | :----------------- |
| domainName\* | string | Nome para o domíno |
| domainHost\* | string | Host para o domíno |

## Request body

```json
{
  "domainName": "Nome",
  "domainHost": "Host"
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

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/checkDomain.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
