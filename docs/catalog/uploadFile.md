---
id: uploadFile
tilte: Hospedar imagem do produto
---

## Método

**/uploadFile**

`POST` https://e-vendi.com.br/api/uploadFile

---

## Conceituação 

Hospedar imagem do produto

Neste método você será capaz de hospedar uma imagem.

---

## Atributos

### Obrigatórios

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| file | string | Url para hospedagem (base 64)|

## Request body

```json
{
	"file": "data:image/png;base64,"
}
```

---

## Response

### 200

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| error | boolean | True / false |
| url | string | URL do storage | 

Exemplo

```json
{
    "error": false,
    "url": "https://storage.googleapis.com/zaap-admin.appspot.com/api-images/D9HE92TYRUALINFC0JMLYO9HQDPUUH5Y.png"
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

<iframe src="https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/uploadFile.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
