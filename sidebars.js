/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  tutorialSidebar: {
    "Bem-vindo": ['wellcome/introduction'],
    'Criar Loja': [
      'newStore/introduction', //ok
      'newStore/checkDomain', //ok
      'newStore/organizationExist', //ok
      'newStore/createOrganization', //ok
      'newStore/updateOrganizationStatus', //ok
      'newStore/getOrganization', //ok todos aqui devo verificar o externalId e organizationExternalId com miranda
    ],
    Produtos: [
      'products/introduction', //ok
      'products/uploadFile', //ok
      'products/updateStock',
      'products/updateProductStock',
      'products/getProductStock',
      'products/updateProduct',
      'products/getStockReserved',
    ],
    Catálogos: [
      'catalogs/introduction',//ok
      'catalogs/createCatalog',
      'catalogs/getCatalogs',//ok
      'catalogs/getCatalogDetails', //ok
      'catalogs/updateCatalogStatus',
      'catalogs/updateCatalogCover',
  ],
    Pedidos: [
      'requests/introduction',
      'requests/getOrdersOpened',
      'requests/closeOrder',
      'requests/reverseOrderCard',
      'requests/reverseOrderPix',
    ],
    Saque: [
      'loot/introduction',
      'loot/getBanks',
      'loot/bankAccount',
      'loot/getOrganizationFee',
    ],
  },
};
