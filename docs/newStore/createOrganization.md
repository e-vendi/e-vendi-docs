---
id: createOrganization
title: Criar / atualizar empresa
---

## Método

**/createOrganizationV2**

`POST` https://e-vendi.com.br/api/createOrganizationV2

---

## Conceituação

Criar e atualizar empresa.

Esse método é responsável por criar sua empresa, ou caso já tenha criado ele irá atualizá-la com os novos dados passados.

---

:::warning Ambientes

Aceitamos dois tipos de ambiente, dev (desenvolvimento) e o prod (produção).

No ambiente de desenvolvimento é possível fazer todos os testes, inclusive simular pagamento de pedido sem custos, já em produção será gerado taxas e cobranças.

Sugerimos que crie duas lojas, uma em ambiente de desenvolvimento e outra para produção, lembrando que o suddomínio devem ser diferentes. Uma dica é criar loja.e-vendi.site para produção e loja-dev.e-vendi.site para desenvolvimento. Assim é possível ter seu ambiente para testes e até mesmo para desmonstrações comerciais.

IMPORTANTE: Não é possível fazer troca do environment da loja, seja de DEV para PROD ou vice-versa, uma vez criado não tem como mudar. Apenas excluindo e criando a loja denovo para corrigir.

:::

## Atributos

:::note

**externalId** é o id do seu cliente na sua base de dados, sempre que você for criar um e-commerce para seu cliente, você precisa informar o ID do seu cliente na sua base de dados.

por exemplo, você tem 2 clientes na sua base de dados Cliente 01 : ID: 1001 Cliente 02 : ID: 1002, nesse caso o externalId será 1001 para o cliente 01 e 1002 para o cliente 02.

Atributos que contém **external** em seu nome são para identificar que os ID's passados serão da sua base de dados, isso facilita futuras buscas, pois você poderá fazer consultas através do seu ID uma vez que este está sob seu controle.

:::

:::caution Atributos obrigatórios

São obrigatórios todos atributos marcados com **\*** (asterisco).

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| env\* | string | Tipo de envio que será feito. Os tipos de envio são: **dev** (Para quando for enviado para um ambiente de desenvolvimento) ou **prod** (Para quando for enviado para um ambiente de produção). **ATENÇÃO,** caso seja enviado para um ambiente de produção todas as transações serão debitadas ou creditadas |
| integrationToken\* | string | Para se conectar com o e-vendi é necessário um token integrador, ele será passado como parâmetro para todos os requisitos |
| externalId\* | string | Seu código de identificação no e-vendi |
| store\* | store | Nesse objeto conterá a maioria das configurações do e-commerce |
| bank\* | bank | Informações da conta bancária para o e-commerce |

### Store\*

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| about | string | Conteúdo sobre a loja, pode ser informado texto ou HTML |
| brand | brand | Atributo para ocultar marca dentro de detalhes do produto |
| active | boolean | Habilita/Desabilita a loja |
| activeWithDraw | boolean | Habilita/Desabilita se pode ser feito retirada do produto na loja |
| orderReceiptSetup | orderReceiptSetup | utilizado para configurar recebimento personalizado quando loja oferecer entrega presencial |
| orderDeliverySetup | orderDeliverySetup | utilizado para configurar entrega personalizado quando loja oferecer entrega |
| captureLead | captureLead | Informações sobre a captação de lead |
| cartExpirationHours | number | Quantidade de horas para o carrinho expirar |
| createdAt | number | Data de criação da loja |
| deliveryFee | float | Taxa de entrega ( Valor total, em reais R$) |
| descriptionSEO | string | Descrição do SEO para a sua página |
| domainName | string | Nome escolhido para o domínio |
| enableCartExpiration | boolean | Habilita/Desabilita expiração do carrinho |
| enableEcommerceMode | boolean | Habilita/Desabilita modo e-commerce. Se habilitado o atributo 'ecommerceCatalogId' deve ter o ID do catálago |
| ecommerceCatalogId | string | ID do catálago |
| enableMsgTracking | boolean | Habilita/Desabilita se cliente receberá notificações de seu pedido por whatsapp |
| enableMsgTrackingByEmail | boolean | Habilita/Desabilita se cliente receberá notificações de seu pedido por e-mail |
| msgTrackingFiscalNote | string | Mensagem que o cliente receberá sobre a nota fiscal |
| msgTrackingNewOrder | string | Mensagem que o cliente receberá sobre o pedido feito |
| msgTrackingOrderInvoiced | string | Mensagem que o cliente receberá sobre pedido aprovado |
| msgTrackingReversed | string | Mensagem que o cliente receberá sobre pedido estornado |
| msgTrackingShipping | string | Mensagem que o cliente receberá quando o pedido for entregue à transportadora |
| exchangePolicy | string | Conteúdo sobre a política de troca da loja, pode ser informado texto ou HTML |
| facebook | string | Nome da loja no facebook |
| facebookDomainTxt | string | Código de validação do facebook business |
| googleAnalytcs | string | Código para o google tag manager |
| gAnalytcs | string | Código para o google analytics |
| favicon | string | Atributo para mudar o favicon da sua loja |
| freeShipping | freeShipping | Configurações para frete grátis. Pode ser feito por região ou um intervalo de CEP's |
| freeShippingValue | number | Valor mínimo da compra para ter frete grátis |
| freightCepOrigin\* | string | CEP do frete de origem |
| generalRules | generalRules | Você pode criar desconto automaticamente baseado em algumas condições que escolher |
| instagram | string | Nome da loja no Instagram |
| integrationMetadata | object | Objeto chave/valor utilizado para armazenar informações adicionais |
| keywords | array&#60;string&#62; | Palavras chave para o SEO da loja |
| logo | string | Atributo para enviar a logo da sua empresa |
| modality | string | modo do ecommerce, se mostra preço ou não, se tem dois preços etc.. aceita três tipos de dados ( ATACADO, VAREJO ou ATACAREJO ) |
| name\* | string | Nome da sua loja |
| organizationFreightMode | string | Este atributo pode receber quatro tipos de dados, sendo eles: CORREIOS ( Os cadastros dos seus produtos terão informações de peso e dimensões, possibilitando o cálculo do frete no ato da compra de seus clientes. ), FIX_TAX ( Todos os clientes pagam a mesma taxa de entrega, isso é muito usado em empresas que tem seus próprios entregadores na cidade. ), DINAMIC ( O frete varia entre correios e taxa fixa, sendo taxa fixa para pedidos da mesma cidade e correios de outras cidade. ), TO_CALCULATE ( O valor do frete ficará a combinar com seu cliente. ) |
| freightCepOrigin | string | CEP de origem, geralmente o endereço da loja, de onde saiu o produto para calculo de frete, é **obrigatório** caso você tenha selecionado organizationFreightMode CORREIOS ou DINAMIC |
| organizationMinimalItens | number | Indica a quantidade mínima de itens para poder finalizar uma compra |
| organizationMinimalPrice | number | Valor mínimo para compra |
| organizationMinimalPriceWholesale | number | Valor mínimo para atacado quando estiver na modalidade ATACAREJO. Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, então nesse atributo será configurado o valor mínimo para vendas de clientes que são somente ATACADO. |
| organizationSlogan | string | Slogan da loja |
| parcelRules | creditCard | Configurações de parcelamento para a loja |
| phone\* | string | O painel administrativo do e-vendi fica em um aplicativo, por isso é necessário informar o número que será feito a autentificação |
| plugChatCode | string | Código de integração do PlugChat |
| postbackNewDealer | string | Atributo que armazena uma URL de uma API que o e-vendi vai chamar qando o cliente que se cadastrou no e-commerce solicitou ser um revendedor |
| integratorLogo | string | Atributo para mandar a logo do integrador |
| presentialDeliveryTime | number | Tempo de entrega presencial |
| rewardBar | rewardBar | Barra de benefícios mostra banners com links para descontos |
| showOnlyProductsAvailable | boolean | Habilita/Desabilita mostrar apenas produtos disponíveis |
| storeMode | string | Experiencia da compra, aceita dois tipos de dados ( ATACADO ou VAREJO ) |
| titleSEO | string | Título para SEO |
| requireStateAndCity | boolean | Identifica se no cadastro de usuário é obrigatório o cliente informar estado e cidade |
| showDescriptionExpandedAutomatic | boolean | Atributo para dizer se a descrição deve vir expandida ao entrar no produto |
| zApi | zApi | Configurações de integração com o zApi, através dessas informações que o cliente receberá notificações sobre o status do pedido realizado e a loja receberá aviso de novos pedidos |
| columnsCatalog | string | Quantidade de colunas que serão exibidas no catálogo. (3 ou 4). O default é 4 |
| imageShape | string | Formato que a imagem terá no catálogo. (RECTANGULAR ou SQUARE). Default é RECTANGULAR |
| freightConfig | FreightConfig[] | Um array com configurações de frente sendo eles retail ou wholesale, se a loja estiver com modalidade ATACAREJO é possível distiguir os frentes pelo retail ou wholesale, mas se não estiver o padrão será o retail |
| informSellerOnSale | boolean | Habilita para pedir que o cliente informe um vendedor na tela de pagamento. Obs. verificar as API`s de vendedores |

:::note

O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as configurações de frete do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

### FreightConfig

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| mode | string | Modalidade de frente, podendo ser ('FIX_TAX', 'TO_CALCULATE', 'DINAMIC', 'CORREIOS' ). São os mesmos do atributo organizationFreightMode. |
| freightCepOrigin | string | CEP de origem, geralmente o endereço da loja, de onde saiu o produto para calculo de frete, é **obrigatório** caso você tenha selecionado mode CORREIOS ou DINAMIC |
| deliveryFee | number | Taxa de entrega ( Valor total, em reais R$) |
| type | string | Tipo do frete, pode ser 'retail' ou 'wholesale' |

### Bank\*

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| bankCode\* | integer | Código do banco (ex: 333) |
| accountType\* | string | Tipo da conta (ex: Conta corrente) |
| agency\* | integer | Agência do banco (ex: 3333) |
| dvAgency | integer | Número da agência |
| accountNumber\* | integer | Número da conta (ex: 33333) |
| dvAccount\* | integer | Número da conta (ex: 3) |
| holderName\* | string | Nome da pessoa |
| document\* | integer | CPF da pessoa |
| payments\* | array<string\> | Tipo de pagamento, pode receber quatro tipo de dados ( BOLETO, CREDIT_CARD, PRESENTIAL, PIX ) |
| configPayments | ConfigPayments | Configuração de pagamentos quando a modalidade da loja for ATACAREJO. Por padrão o retail é aplicado quando não for atacarejo |

### ConfigPayments

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| retail | array&#60;string&#62; | Um array com os tipos de pagamento informado para opção de varejo. [ 'CREDIT_CARD', 'PRESENTIAL', 'PIX', 'BOLETO', ] |
| wholesale | array&#60;string&#62; | Um array com os tipos de pagamento informado para opção de atacado. [ 'CREDIT_CARD', 'PRESENTIAL', 'PIX', 'BOLETO', ] |

### CaptureLead

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active\* | boolean | captura lead sim ou não |
| title\* | string | título da lead |
| subtitle | string | subtítulo da lead |
| description\* | string | descrição do que você deseja que apareça na lead |
| successMessage\* | string | Mensagem que o cliente receberá ao aceitar a lead |

### orderReceiptSetup

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Se deve mostrar mensagem personalizada |
| message | string | mensagem personalizada para exibição quando selecionado pagamento presencial |

### orderDeliverySetup

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Se deve mostrar mensagem personalizada |
| message | string | mensagem personalizada para exibição quando selecionado entrega |

### brand

| Atributos |  Tipo   | Descrição                                    |
| :-------- | :-----: | :------------------------------------------- |
| active    | boolean | Se deve mostrar marca em detalhes do produto |

### FreeShipping

:::note

O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as configurações de frete do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| active | boolean | Habilita/Desabilita frete grátis para região |
| minimalValue | number | Valor mínimo para ter frete grátis |
| name | string | Nome para a opção de frete grátis |
| type\* | string | Tipo do frete ('wholesale' ou 'retail') |
| region | string | Nome da região para o frete grátis. Se fizer por região não informar cepStart nem cepEnd |
| cepStart | string | CEP inicial para frete grátis |
| cepEnd | string | CEP final para frete grátis |

### generalRules

:::note

O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as regras gerais do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| conditions | conditions | Aqui você pode criar condições para aplicar benefícios ao cliente |
| benefits | benefits | Aqui será informado os benefícios que o cliente terá com base na condição que você criou |
| type\* | string | Tipo para regras gerais ('wholesale' ou 'retail') |
| id | string | Id da regra |

### conditions

:::note

Conditions é na estrutura de array, porém só será aceito o primeiro índice da condição. Para cadastrar mais regras basta enviá-las em generalRules, pois ele é um array e todas as regras devem estar nele com seus types, conditions e benefits e id.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| operator | string | Operador para sua condição. ('>', '<', '=', '>=', '<=', '!=', 'contains') |
| type | string | Tipo da condição (VALUE ou PAYMENT_TYPE). |
| value | number \| string | Se "type" for VALUE então o atributo "value" deve receber um number. Caso type seja PAYMENT_TYPE então value deve receber uma dessas opções (boleto, presential, pix). |
| startParcel | number | Parcela inicial |
| endParcel | number | Parcela final |

### benefits

:::note

Benefits é na estrutura de array, porém só será aceito o primeiro índice do benefício. Para cadastrar mais regras basta enviá-las em generalRules, pois ele é um array e todas as regras devem estar nele com seus types, conditions e benefits e id.

:::

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| type | string | Tipo do benefício, pode ser ('DISCOUNT' ou 'FREIGHT_FREE') |
| operator | string | Pode ser ('PERCENTAGE' ou 'VALUE') |
| value | number | Valor será conforme o operator informado. |

### creditCard

| Atributos   |    Tipo     | Descrição                                        |
| :---------- | :---------: | :----------------------------------------------- |
| parcelRules | parcelRules | Configurações de parcelas para cartão de crédito |

### parcelRules

:::note

O atributo type somente será utilizado quando a modalidade da loja estiver como ATACAREJO. Ele será utilizado para separar as regras de parcelamento do varejo e do atacado, desta forma você pode ter regras diferentes para atacado e varejo.

Ex: Quando em ATACAREJO você pode vender para o ATACADO e para o VAREJO, isso de acordo com o cadastro do cliente que está comprando, então o sistema irá verificar o tipo conforme o cliente.

:::

| Atributos    |  Tipo  | Descrição                                         |
| :----------- | :----: | :------------------------------------------------ |
| start        | number | Valor inicial (Ex: De X ate 100)                  |
| end          | number | Valor Final (Ex: De 0 ate X)                      |
| installments | number | Parcelas permitidas para o intervalo definido     |
| type\*       | string | Tipo para regras gerais ('wholesale' ou 'retail') |

### RewardBar

| Atributos |  Tipo  | Descrição                                   |
| :-------- | :----: | :------------------------------------------ |
| link      | string | Link para o qual será direcionado ao clicar |
| image     | string | Link para carregar a imagem do banner       |

### zApi

| Atributos | Tipo | Descrição |
| :-- | :-: | :-- |
| id | string | id de instância do z-api ( número cadastrado na instância que fará o envio das notificações ao cliente) |
| integratorName | string | Nome do integrador |
| notifyStore | boolean | Habilita/Desabilita se minha loja receberá notificação de novos pedidos |
| phone | string | Número do celular no qual será notificado os novos pedidos |
| token | string | Token para a integração |

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
    "brand": {
      "active": true
    },
    "active": true,
    "activeWithDraw": true,
    "orderReceiptSetup": {
      "active": true,
      "message":
      "
       - O entregador levará a maquininha de cartão caso seja necessário
       - Pague ao receber o produto em sua casa
      "
    },
      "orderDeliverySetup": {
      "active": true,
      "message":
      "
       - A entrega será feita pela própria loja, após a confirmação do pagamento
      "
    },
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
    "enableMsgTrackingByEmail": true,
    "msgTrackingFiscalNote": "{nome}, vi aqui que a nota fiscal do seu pedido foi emitida.\nToque no link para visualizar {linkNotaFiscal}\nQualquer novidade sobre sua entrega volto aqui para te contar.",
    "msgTrackingNewOrder": "Olá {nome}! \n\nObrigado por comprar em nossa loja.  \nRecebemos seu pedido {numeroPedido} e estamos aguardando a confirmação do pagamento.\n\n{produtos}\n\nAssim que tiver novidades te aviso por aqui.",
    "msgTrackingOrderInvoiced": "Olá {nome}, seu pedido {numeroPedido} acabou de ser aprovado. 😀\nEm breve voltarei para te contar novidades.",
    "msgTrackingReversed": "Hey {nome}! \nTivemos que estornar seu pedido {numeroPedido}.\nMotivo: {motivo}",
    "msgTrackingShipping": "Tô passando pra avisar que seu pedido {numeroPedido} já está com a transportadora responsável pela entrega.\nPara acompanhar a entrega acesse {linkRastreio}",
    "exchangePolicy": "<p>conteúdo sobre a política de troca</p>",
    "facebook": "facebook",
    "facebookDomainTxt": "SAGDHDFHEHDFASD6HF5DFHDFH5H5FHDFH",
    "googleAnalytcs": "GTM-XABC",
    "gAnalytcs": "G-ZYX",
    "favicon": "https://image.png",
    "configPayments": {
      "retail": ["PRESENTIAL", "PIX", "BOLETO"],
      "wholesale": ["CREDIT_CARD", "PRESENTIAL", "PIX"]
    },
    "freeShipping": [
      {
        "active": false,
        "minimalValue": 0,
        "name": "Sudeste",
        "type": "retail",
        "region": "SUDESTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Nordeste",
        "type": "retail",
        "region": "NORDESTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Norte",
        "type": "retail",
        "region": "NORTE"
      },
      {
        "active": false,
        "minimalValue": 0,
        "name": "Centro-Oeste",
        "type": "retail",
        "region": "CENTRO_OESTE"
      },
      {
        "active": true,
        "minimalValue": 0,
        "name": "Sul",
        "type": "retail",
        "region": "SUL"
      },
      {
        "active": true,
        "type": "retail",
        "minimalValue": 100,
        "name": "Exemplo",
        "cepStart": "99999000",
        "cepEnd": "99999100"
      }
    ],
    "freeShippingValue": 100,
    "freightCepOrigin": "99999888",
    "freightConfig": [
      {
        "type": "retail",
        "freightCepOrigin": "87020220",
        "mode": "DINAMIC",
        "deliveryFee": 20
      },
      {
        "freightCepOrigin": "87020220",
        "type": "wholesale",
        "mode": "FIX_TAX",
        "deliveryFee": 20
      }
    ],

    "generalRules": [
      {
        "id": "23818F51E9D0F3F88FE09630727D3338",
        "type": "retail",
        "benefits": [
          {
            "id": "23F8F05B4628BCC2CF666E5DCFC90C05",
            "type": "DISCOUNT",
            "value": 15,
            "operator": "PERCENTAGE"
          }
        ],
        "conditions": [
          {
            "id": "622CFD3EBB821271DE10CCF8DEF8F9AC",
            "type": "PAYMENT_TYPE",
            "value": "pix",
            "operator": "="
          }
        ]
      },
      {
        "id": "D4B61F684B6BB5AE13B7740DEB01BB38",
        "type": "retail",
        "benefits": [
          {
            "id": "491E5BA2D4FD803EFB9F51CEF3EF857E",
            "type": "DISCOUNT",
            "value": 10,
            "operator": "PERCENTAGE"
          }
        ],
        "conditions": [
          {
            "id": "900FA4B84663C60656DD461DE8E20B11",
            "type": "PAYMENT_TYPE",
            "value": "credit_card",
            "operator": "="
          }
        ]
      }
    ],
    "instagram": "instagram",
    "integrationMetadata": {},
    "keywords": [],
    "logo": "https://image.png",
    "modality": "VAREJO",
    "name": "Store",
    "organizationFreightMode": "FIX_TAX",
    "organizationMinimalItens": "",
    "organizationMinimalPrice": 9.9,
    "organizationMinimalPriceWholesale": 999.0,
    "organizationSlogan": "slogan",
    "parcelRules": {
      "creditCard": [
        {"start": 0, "end": 100, "installments": 3, "type": "retail"},
        {"start": 100, "end": 300, "installments": 6, "type": "retail"},
        {"start": 400, "end": 800, "installments": 12, "type": "retail"},
        {"start": 0, "end": 1000, "installments": 12, "type": "wholesale"}
      ]
    },
    "informSellerOnSale": true,
    "phone": "+5544999999999",
    "plugChatCode": "FFFFF5-FFFFFF5-FFFFFFFFF5-FFFFFFFF5-68E4YQE",
    "postbackNewDealer": "https://",
    "presentialDeliveryTime": 1,
    "rewardBar": [{"link": "https://", "image": "https://image.png"}],
    "integratorLogo": "https://image.png",
    "showOnlyProductsAvailable": true,
    "storeMode": "VAREJO",
    "titleSEO": "Título SEO",
    "requireStateAndCity": true,
     "showDescriptionExpandedAutomatic": true,
    "zApi": {
      "id": "123", //id da instancia
      "token": "456", //id do token
      "integratorName": "Z_API",
      "notifyStore": true,
      "phone": "+5544999999999",
      "token": "sgsagdf2g2eew2y25g4sdf25htr5j2"
    },
    "columnsCatalog": "4",
    "imageShape": "RECTANGULAR"
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

Neste caso certifique que esteja enviando corretamente a especificação do método, ou seja, verifique se você enviou o POST ou GET conforme especificado no início deste tópico.

### 415

Caso você receba um erro 415, certifique-se de adicionar na headers da requisição o "Content-Type" do objeto que você está enviando, em sua grande maioria "application/json"

---

## Code

<iframe src="//api.apiembed.com/?source=https://raw.githubusercontent.com/e-vendi/e-vendi-docs/main/json-examples/createOrganization.json" frameborder="0" scrolling="no" width="100%" height="500px" seamless></iframe>
