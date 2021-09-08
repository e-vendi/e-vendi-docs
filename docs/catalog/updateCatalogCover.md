---
id: updateCatalogCover
title: Alterar a imagem do catálogo
---

## Método

**/updateCatalogCover**

`POST` https://e-vendi.com.br/api/updateCatalogCover

---

## Conceituação 

Alterar a imagem do catálogo

Neste método você será capaz de alterar a imagem do catálogo.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env | string | Tipo de envio que será feito, **IMPORTANTE** os tipos de envio são: Dev (Para quando for enviado para um ambiente de desenvolvimento) ou Prod (Para quando for enviado para um ambiente de produção **ATENÇÃO** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas) |
| integrationToken | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parametro para todos os requisitos | 
| organizationExternalId | integer | Seu código de identificação no e-vendi |
| catalogExternalId | string | ID do catálogo |
| cover | string | URL da imagem de capa |

## Request body

```json
{
    "env": "dev",
    "organizationExternalId": "mobiage-1887.1888.1889.-3531689",
    "integrationToken": "NA2gLbUgLJhSJ1WaVHmy",
    "catalogExternalId": "39445C8F8A1A610A67E27290EE9E7C17",
    "cover": "https://i.zst.com.br/images/roupas-femininas-para-academia-conheca-opcoes-para-todos-dos-gostos,-precos-e-marcas-photo795200438-44-13-32.jpg"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| success | boolean | True / false |

Exemplo

```json
{
    "success": true
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/updateCatalogCover.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
