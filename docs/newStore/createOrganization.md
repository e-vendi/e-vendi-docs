---
id: createOrganization
title: Criar / atualizar empresa
---

## Método

**/createOrganizationV2**

`POST` https://e-vendi.com.br/api/createOrganizationV2

---

## Conceituação

Criar e atualizar empresa

Esse método é responsável por cadastrar e criar sua empresa, ou caso ja tenha criado ele irá atualizar os dados novos que forem inseridos

---

:::note

organizationExternalId é o id do seu cliente na sua base de dados, sempre que você for criar um ecommerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002

:::

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
| about | string | Conteúdo sobre a loja, pode ser informado texto ou HTML |
| active | boolean | Habilita/Desabilita a loja |
| activeWithDraw | boolean | Habilita/Desabilita se pode ser feito retirada do produto na loja |
| captureLead | captureLead | Informações sobre a captação de lead |
| cartExpirationHours | number | Quantidade de horas para o carrinho expirar |
| createdAt | number | Data de criação da loja |
| deliveryFee | float | Taxa de entrega ( Valor total, em reais R$) |
| descriptionSEO | string | Descrição do SEO para a sua página |
| domainName | string | Nome escolhido para o domínio |
| enableCartExpiration | boolean | Habilita/Desabilita expiração do carrinho |
| enableEcommerceMode | boolean | Habilita/Desabilita modo e-commerce. Se habilitado o atributo 'ecommerceCatalogId' deve ter o ID do catálago |
| ecommerceCatalogId | string | ID do catálago |
| enableMsgTracking | boolean | Habilita/Desabilita notificações sobre o pedido para o cliente |
| msgTrackingFiscalNote | string | Mensagem que o cliente receberá sobre a nota fiscal |
| msgTrackingNewOrder | string | Mensagem que o cliente receberá sobre o pedido feito |
| msgTrackingOrderInvoiced | string | Mensagem que o cliente receberá sobre pedido aprovado |
| msgTrackingReversed | string | Mensagem que o cliente receberá sobre pedido estornado |
| msgTrackingShipping | string | Mensagem que o cliente receberá quando o pedido for entregue à transportadora |
| exchangePolicy | string | Conteúdo sobre a política de troca da loja, pode ser informado texto ou HTML |
| facebook | string | Nome da loja no facebook |
| facebookDomainTxt | string | Código de validação do facebook business |
| favicon | string | Atributo para mudar o favicon da sua loja |
| freeShipping | freeShipping | XXXXX |
| freightCepOrigin | string | CEP do frete de origem |
| generalRules | XXXX | XXXXX |
| instagram | string | Nome da loja no Instagram |
| integrationMetadata | XXXX | XXXX |
| keywords | XXXXX | Palavras chave para o SEO da loja |
| lifelong | boolean | XXXXX |
| logo | string | Atributo para enviar a logo da sua empresa |
| modality | string | modo do ecommerce, se mostra preço ou não, se tem dois preços etc.. aceita três tipos de dados ( ATACADO, VAREJO ou ATACAREJO ) |
| name | string | Nome da sua loja |
| organizationFreightMode | string | Este atributo pode receber quatro tipos de dados, sendo eles: CORREIOS ( Os cadastros dos seus produtos terão informações de peso e dimensões, possibilitando o cálculo do frete no ato da compra de seus clientes. ), FIX_TAX ( Todos os clientes pagam a mesma taxa de entrega, isso é muito usado em empresas que tem seus próprios entregadores na cidade. ), DINAMIC ( O frete varia entre correios e taxa fixa, sendo taxa fixa para pedidos da mesma cidade e correios de outras cidade. ), TO_CALCULATE ( O valor do frete ficará a combinar com seu cliente. ) |
| freightCepOrigin | string | CEP de origem, geralmente o endereço da loja, de onde saiu o produto para calculo de frete, é **obrigatório** caso você tenha selecionado organizationFreightMode CORREIOS ou DINAMIC |
| organizationMinimalItens | string | XXXXX |
| organizationSlogan | string | Slogan da loja |
| parcelRules | parcelRules | Configurações de parcelamento para a loja |
| phone | string | O painel administrativo do e-vendi fica em um aplicativo, por isso é necessário informar o número que será feito a autentificação |
| plugChatCode | string | Código de integração do PlugChat |
| postbackNewDealer | string | XXXXX |
| integratorLogo | string | Atributo para mandar a logo do integrador |
| rewardBar | rewardBar | Barra de benefícios mostra banners com links para descontos |
| showOnlyProductsAvailable | boolean | Habilita/Desabilita mostrar apenas produtos disponíveis |
| storeMode | string | Experiencia da compra, aceita dois tipos de dados ( ATACADO ou VAREJO ) |
| titleSEO | string | Título para SEO |
| zApi | zApi | Configurações de integração com o zApi |

#### Bank

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| bankCode | integer | Código do banco (ex: 333) |
| accountType | integer | Tipo da conta (ex: Conta corrente) |
| agency | integer | Agência do banco (ex: 3333) |
| dvAgency | integer | Número da agência |
| accountNumber | integer | Número da conta (ex: 33333) |
| dvAccount | integer | Número da conta (ex: 3) |
| holderName | string | Nome da pessoa |
| document | integer | CPF da pessoa |
| payments | string | Tipo de pagamento, pode receber quatro tipo de dados ( BOLETO, CREDIT_CARD, PRESENTIAL, PIX ) |

### CaptureLead

| Atributos      |  Tipo   | Descrição                                         |
| :------------- | :-----: | :------------------------------------------------ |
| active         | boolean | captura lead sim ou não                           |
| title          | string  | título da lead                                    |
| subtitle       | string  | subtítulo da lead                                 |
| description    | string  | descrição do que você deseja que apareça na lead  |
| successMessage | string  | Mensagem que o cliente receberá ao aceitar a lead |

### FreeShipping

| Atributos    |  Tipo   | Descrição                                    |
| :----------- | :-----: | :------------------------------------------- |
| active       | boolean | Habilita/Desabilita frete grátis para região |
| minimalValue | number  | Valor mínimo para ter frete grátis           |
| name         | string  | Nome para a opção de frete grátis            |
| region       | string  | Nome da região para o frete grátis           |

### parcelRules

| Atributos    |  Tipo  | Descrição                                      |
| :----------- | :----: | :--------------------------------------------- |
| start        | number | Valor inicial (Ex: De 0 ate X)                 |
| end          | number | Valor Final (Ex: De X ate 100)                 |
| installments | number | Parcelas permitidas para o intervalor definido |

### RewardBar

| Atributos |  Tipo  | Descrição                                   |
| :-------- | :----: | :------------------------------------------ |
| link      | string | Link para o qual será direcionado ao clicar |
| image     | string | Link para carregar a imagem do banner       |

### zApi

| Atributos      |  Tipo   | Descrição                       |
| :------------- | :-----: | :------------------------------ |
| integratorName | string  | Nome do integrador              |
| notifyStore    | boolean | Habilita/Desabilita notificação |
| phone          | string  | Número do celular da integração |
| token          | string  | Token para a integração         |

## Request body

```json
{
  "integrationToken": "seu token",
  "env": "dev",
  "externalId": "seu id",
  "bank": {
    "bankCode": "333",
    "accountType": "conta_corrente",
    "agency": "3333",
    "dvAgency": "",
    "accountNumber": "33333",
    "dvAccount": "3",
    "holderName": "Nome",
    "document": "33333333333",
    "payments": ["BOLETO", "CREDIT_CARD", "PRESENTIAL", "PIX"]
  },
  "store": {
    "about": "<p>conteúdo sobre a loja</p>",
    "active": true,
    "activeWithDraw": true,
    "captureLead": {
      "active": true,
      "description": "Cadastre seu melhor e-mail para ficar por dentro de todas nossas novidades e promoções.",
      "subtitle": "",
      "successMessage": "Pronto! Agora você será informado no seu e-mail sobre todas nossas novidades.",
      "title": "Fique por dentro das novidades"
    },
    "cartExpirationHours": 2,
    "createdAt": 1629748031295,
    "deliveryFee": 2.5,
    "descriptionSEO": "descrição para SEO",
    "domainName": "Nome",
    "enableCartExpiration": true,
    "enableEcommerceMode": true,
    "ecommerceCatalogId": "1efwfdgsdasdgsadgrhw",
    "enableMsgTracking": true,
    "msgTrackingFiscalNote": "{nome}, vi aqui que a nota fiscal do seu pedido foi emitida.\nToque no link para visualizar {linkNotaFiscal}\nQualquer novidade sobre sua entrega volto aqui para te contar.",
    "msgTrackingNewOrder": "Olá {nome}! \n\nObrigado por comprar em nossa loja.  \nRecebemos seu pedido {numeroPedido} e estamos aguardando a confirmação do pagamento.\n\n{produtos}\n\nAssim que tiver novidades te aviso por aqui.",
    "msgTrackingOrderInvoiced": "Olá {nome}, seu pedido {numeroPedido} acabou de ser aprovado. 😀\nEm breve voltarei para te contar novidades.",
    "msgTrackingReversed": "Hey {nome}! \nTivemos que estornar seu pedido {numeroPedido}.\nMotivo: {motivo}",
    "msgTrackingShipping": "Tô passando pra avisar que seu pedido {numeroPedido} já está com a transportadora responsável pela entrega.\nPara acompanhar a entrega acesse {linkRastreio}",
    "exchangePolicy": "<p>conteúdo sobre a política de troca</p>",
    "facebook": "facebook",
    "facebookDomainTxt": "SDGASG5SDG5SADGSA8GSADASD8ERHEHG",
    "favicon": "https://image.png",
    "freeShipping": [
      {
        "active": false,
        "minimalValue": 0,
        "name": "Sudeste",
        "region": "SUDESTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Nordeste",
        "region": "NORDESTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Norte",
        "region": "NORTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Centro-Oeste",
        "region": "CENTRO_OESTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Sul",
        "region": "SUL"
      }
    ],
    "freightCepOrigin": "99999888",
    "generalRules": "XXXXX",
    "instagram": "instagram",
    "integrationMetadata": {
      "controlStock": true
    },
    "keywords": [],
    "lifelong": true,
    "logo": "https://image.png",
    "modality": "VAREJO",
    "name": "Store",
    "organizationFreightMode": "FIX_TAX",
    "organizationMinimalItens": "",
    "organizationSlogan": "slogan",
    "parcelRules": [
      {"start": 0, "end": 100, "installments": 3},
      {"start": 100, "end": 300, "installments": 6}
    ],
    "phone": "+5544999999999",
    "plugChatCode": "SGFGDF4G-35DF4ER-8H4TJJFG-4J5XC4ZG-68E4YQE",
    "postbackNewDealer": "https://",
    "rewardBar": [{"link": "https://", "image": "https://image.png"}],
    "integratorLogo": "https://image.png",
    "showOnlyProductsAvailable": true,
    "storeMode": "VAREJO",
    "titleSEO": "Título SEO",
    "zApi": {
      "integratorName": "PLUG_CHAT",
      "notifyStore": true,
      "phone": "+5544999999999",
      "token": "sgsagdf2g2eew2y25g4sdf25htr5j2"
    }
  }
}
```

---

## Response

### 200

| Atributos |  Tipo   | Descrição    |
| :-------- | :-----: | :----------- |
| Response  | boolean | True / false |

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
