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
    'Bem-vindo': ['wellcome/introduction'],
    'Criar Loja': [
      'newStore/introduction', // ok
      'newStore/checkDomain', // ok
      'newStore/organizationExist', // ok
      'newStore/createOrganization', // ok
      'newStore/updateOrganizationStatus', // ok
      'newStore/getOrganization', // ok
      'newStore/getOrganizationFee', // ok
      'newStore/deleteOrganization', // ok
    ],
    Catálogos: [
      'catalogs/introduction', // ok
      'catalogs/createCatalog', // ok
      'catalogs/getCatalogs', // ok
      'catalogs/deleteCatalog', // ok
      'catalogs/addProductsCatalog', // ok
      'catalogs/removeProductCatalog', // ok
      // 'catalogs/getCatalogDetails', //ok
      'catalogs/updateCatalogStatus', // ok
      'catalogs/updateCatalogCover', // ok
      // 'catalogs/uploadFile', //ok
    ],
    Produtos: [
      'products/introduction', // ok
      'products/updateProduct',
      // 'products/getProduct', //ok
      // 'products/getAllProducts', //ok
      'products/getProductStock', // ok
      'products/getStockReserved', // ok
      'products/updateProductStock', // ok
      'products/getProductCategory', // ok
      'products/updateProductCategory', // ok
    ],
    Clientes: [
      'customers/introduction', // ok
      'customers/getClients', // ok
      'customers/updateClient', // ok
    ],
    Vendedores: [
      'employees/introduction', // ok
      'employees/getEmployees', // ok
      'employees/updateEmployee', // ok
    ],
    Cupons: [
      'coupons/introduction', // ok
      'coupons/saveCoupon', // ok
      'coupons/deleteCoupon', // ok
      'coupons/getCoupons', // ok
    ],
    Pedidos: [
      'orders/introduction',
      'orders/getOrdersOpened', //ok
      'orders/closeOrder', //ok
      'orders/cancelOrder', //ok
      'orders/searchOrders', //ok
      'orders/getOrderById', //ok
      'orders/reverseOrder', //ok
      'orders/saveOrderFiscalNote', //ok
      'orders/saveOrderTrackingCode', //ok
      'orders/simulatePayment', //ok
    ],
    Promoção: [
      'promotion/introduction', // ok
      'promotion/savePromotion', // ok
      'promotion/deletePromotion', // ok
    ],
    PagarMe: [
      'pagarme/introduction',
      'pagarme/withdraw',
      'pagarme/getDaysWithTransactionsByFilters',
      'pagarme/getTransactionsByFilters',
      'pagarme/accountBalanceByRecipientId',
    ],
    // CTA: [
    // 'cta/introduction',
    // 'cta/getCta',
    // 'cta/saveCta',
    // ],

    // Saque: [
    //   'loot/introduction',
    //   'loot/getBanks',
    //   'loot/bankAccount',
    //   'loot/getOrganizationFee',
    // ],
  },
};
