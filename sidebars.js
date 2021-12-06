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
    Catálogos: [
      'catalogs/introduction',//ok
      'catalogs/createCatalog',//ok
      'catalogs/getCatalogs',//ok
      'catalogs/deleteCatalog', //ok
      // 'catalogs/getCatalogDetails', //ok
      'catalogs/updateCatalogStatus', //ok
      'catalogs/updateCatalogCover', //ok
      // 'catalogs/uploadFile', //ok
      'catalogs/getProductStock', //ok
      'catalogs/getStockReserved', //ok
      'catalogs/updateProductStock', //ok
    ],
    Clientes : [
      'customers/introduction', //ok
      'customers/getClients', //ok
    ],
    Cupons: [
      'coupons/introduction', //ok
      'coupons/saveCoupon', //ok
      'coupons/deleteCoupon', //ok
      'coupons/getCoupons', //ok
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
