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
      'newStore/getOrganization', //ok 
      'newStore/getOrganizationFee', //ok 
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
      'catalogs/createCatalog',//ok
      'catalogs/getCatalogs',//ok
      'catalogs/getCatalogDetails', //ok
      'catalogs/updateCatalogStatus', //ok
      'catalogs/updateCatalogCover', //ok
      'catalogs/deleteCatalog', //ok
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
