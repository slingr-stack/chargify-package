/****************************************************
 Dependencies
 ****************************************************/

var httpService = svc.http;

/****************************************************
 Helpers
 ****************************************************/

exports.apiExports = {};

exports.apiExports.proformaInvoices = {};

exports.apiExports.proformaInvoices.rowsJson = {};

exports.apiExports.invoices = {};

exports.apiExports.invoices.rowsJson = {};

exports.apiExports.subscriptions = {};

exports.apiExports.subscriptions.rowsJson = {};

exports.apiExports.proformaInvoicesJson = {};

exports.apiExports.invoicesJson = {};

exports.apiExports.subscriptionsJson = {};

exports.subscriptions = {};

exports.subscriptions.advanceInvoice = {};

exports.subscriptions.advanceInvoice.issueJson = {};

exports.subscriptions.advanceInvoiceJson = {};

exports.subscriptions.advanceInvoice.voidJson = {};

exports.portal = {};

exports.portal.customers = {};

exports.portal.customers.enableJson = {};

exports.portal.customers.managementLinkJson = {};

exports.portal.customers.invitations = {};

exports.portal.customers.invitations.inviteJson = {};

exports.portal.customers.invitations.revokeJson = {};

exports.productFamilies = {};

exports.productFamilies.couponsJson = {};

exports.coupons = {};

exports.coupons.findJson = {};

exports.productFamilies.coupons = {};

exports.couponsJson = {};

exports.productFamilies.coupons.usageJson = {};

exports.coupons.validateJson = {};

exports.coupon = {};

exports.coupon.currencyPricesJson = {};

exports.coupons.codesJson = {};

exports.coupons.codes = {};

exports.components = {};

exports.components.lookupJson = {};

exports.productFamilies.components = {};

exports.componentsJson = {};

exports.components.pricePoints = {};

exports.components.pricePoints.defaultJson = {};

exports.productFamilies.componentsJson = {};

exports.components.pricePointsJson = {};

exports.components.pricePoints.bulkJson = {};

exports.components.pricePoints.unarchiveJson = {};

exports.pricePoints = {};

exports.pricePoints.currencyPricesJson = {};

exports.componentsPricePointsJson = {};

exports.customersJson = {};

exports.customers = {};

exports.customers.lookupJson = {};

exports.customers.subscriptionsJson = {};

exports.metafieldsJson = {};

exports.metadataJson = {};

exports.eventsJson = {};

exports.subscriptions.eventsJson = {};

exports.events = {};

exports.events.countJson = {};

exports.components.pricePoints.segmentsJson = {};

exports.components.pricePoints.segments = {};

exports.components.pricePoints.segments.bulkJson = {};

exports.statsJson = {};

exports.mrrJson = {};

exports.mrrMovementsJson = {};

exports.subscriptionsMrrJson = {};

exports.invoices = {};

exports.invoices.refundsJson = {};

exports.invoicesJson = {};

exports.invoices.eventsJson = {};

exports.invoices.paymentsJson = {};

exports.creditNotesJson = {};

exports.creditNotes = {};

exports.subscriptions.paymentsJson = {};

exports.invoices.reopenJson = {};

exports.invoices.voidJson = {};

exports.invoices.segmentsJson = {};

exports.subscriptions.invoicesJson = {};

exports.invoices.deliveriesJson = {};

exports.invoices.customerInformation = {};

exports.invoices.customerInformation.previewJson = {};

exports.invoices.customerInformationJson = {};

exports.invoices.issueJson = {};

exports.offersJson = {};

exports.offers = {};

exports.offers.archiveJson = {};

exports.offers.unarchiveJson = {};

exports.paymentProfilesJson = {};

exports.paymentProfiles = {};

exports.subscriptions.paymentProfiles = {};

exports.bankAccounts = {};

exports.bankAccounts.verificationJson = {};

exports.subscriptionGroups = {};

exports.subscriptionGroups.paymentProfiles = {};

exports.subscriptions.paymentProfiles.changePaymentProfileJson = {};

exports.subscriptionGroups.paymentProfiles.changePaymentProfileJson = {};

exports.oneTimeTokens = {};

exports.subscriptions.requestPaymentProfilesUpdateJson = {};

exports.productFamilies.productsJson = {};

exports.productFamiliesJson = {};

exports.products = {};

exports.products.handle = {};

exports.productsJson = {};

exports.products.pricePointsJson = {};

exports.products.pricePoints = {};

exports.products.pricePoints.unarchiveJson = {};

exports.products.pricePoints.defaultJson = {};

exports.products.pricePoints.bulkJson = {};

exports.productPricePoints = {};

exports.productPricePoints.currencyPricesJson = {};

exports.productsPricePointsJson = {};

exports.subscriptionGroups.proformaInvoicesJson = {};

exports.proformaInvoices = {};

exports.subscriptions.proformaInvoicesJson = {};

exports.proformaInvoices.voidJson = {};

exports.subscriptions.proformaInvoices = {};

exports.subscriptions.proformaInvoices.previewJson = {};

exports.reasonCodesJson = {};

exports.reasonCodes = {};

exports.referralCodes = {};

exports.referralCodes.validateJson = {};

exports.sellers = {};

exports.sellers.salesCommissionSettingsJson = {};

exports.sellers.salesRepsJson = {};

exports.sellers.salesReps = {};

exports.siteJson = {};

exports.sites = {};

exports.sites.clearDataJson = {};

exports.chargifyJsKeysJson = {};

exports.subscriptionsJson = {};

exports.subscriptions.overrideJson = {};

exports.subscriptions.lookupJson = {};

exports.subscriptions.purgeJson = {};

exports.subscriptions.prepaidConfigurationsJson = {};

exports.subscriptions.previewJson = {};

exports.subscriptions.addCouponJson = {};

exports.subscriptions.removeCouponJson = {};

exports.subscriptions.activateJson = {};

exports.subscriptions.components = {};

exports.subscriptions.componentsJson = {};

exports.subscriptions.pricePointsJson = {};

exports.subscriptions.pricePoints = {};

exports.subscriptions.pricePoints.resetJson = {};

exports.subscriptions.components.allocationsJson = {};

exports.subscriptions.allocationsJson = {};

exports.subscriptions.allocations = {};

exports.subscriptions.allocations.previewJson = {};

exports.subscriptions.components.allocations = {};

exports.subscriptions.components.usagesJson = {};

exports.eventBasedBilling = {};

exports.eventBasedBilling.subscriptions = {};

exports.eventBasedBilling.subscriptions.components = {};

exports.eventBasedBilling.subscriptions.components.activateJson = {};

exports.eventBasedBilling.subscriptions.components.deactivateJson = {};

exports.events.bulkJson = {};

exports.subscriptionsComponentsJson = {};

exports.subscriptionGroups.signupJson = {};

exports.subscriptionGroupsJson = {};

exports.subscriptionGroups.lookupJson = {};

exports.subscriptions.groupJson = {};

exports.subscriptionGroups.prepaymentsJson = {};

exports.subscriptionGroups.serviceCreditsJson = {};

exports.subscriptionGroups.serviceCreditDeductionsJson = {};

exports.subscriptionGroups.cancelJson = {};

exports.subscriptionGroups.delayedCancelJson = {};

exports.subscriptionGroups.reactivateJson = {};

exports.subscriptions.accountBalancesJson = {};

exports.subscriptions.prepaymentsJson = {};

exports.subscriptions.serviceCreditsJson = {};

exports.subscriptions.serviceCreditDeductionsJson = {};

exports.subscriptions.prepayments = {};

exports.subscriptions.prepayments.refundsJson = {};

exports.subscriptions.notesJson = {};

exports.subscriptions.notes = {};

exports.subscriptions.migrationsJson = {};

exports.subscriptions.migrations = {};

exports.subscriptions.migrations.previewJson = {};

exports.subscriptions.retryJson = {};

exports.subscriptions.resumeJson = {};

exports.subscriptions.holdJson = {};

exports.subscriptions.reactivateJson = {};

exports.subscriptions.delayedCancelJson = {};

exports.subscriptions.cancelDunningJson = {};

exports.subscriptions.renewals = {};

exports.subscriptions.renewals.previewJson = {};

exports.webhooksJson = {};

exports.webhooks = {};

exports.webhooks.settingsJson = {};

exports.webhooks.replayJson = {};

exports.endpointsJson = {};

exports.endpoints = {};

exports.invoices.chargesJson = {};

exports.invoices.adjustmentsJson = {};

exports.statements = {};

exports.statementsJson = {};

exports.subscriptions.statementsJson = {};

exports.statements.idsJson = {};

exports.subscriptions.statements = {};

exports.subscriptions.statements.idsJson = {};

exports.statements.countJson = {};

exports.subscriptions.adjustmentsJson = {};

exports.subscriptions.chargesJson = {};

exports.subscriptions.refundsJson = {};

exports.subscriptions.resetBalanceJson = {};

exports.transactions = {};

exports.transactionsJson = {};

exports.subscriptions.transactionsJson = {};

exports.transactions.countJson = {};

exports.apiExports.proformaInvoices.rowsJson.get = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/api_exports/proforma_invoices/:batch_id/rows.json', [batchId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.apiExports.invoices.rowsJson.get = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/api_exports/invoices/:batch_id/rows.json', [batchId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.apiExports.subscriptions.rowsJson.get = function(batchId, httpOptions) {
    if (!batchId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchId].');
        return;
    }
    var url = parse('/api_exports/subscriptions/:batch_id/rows.json', [batchId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.apiExports.proformaInvoicesJson.post = function(httpOptions) {
    var url = parse('/api_exports/proforma_invoices.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.apiExports.invoicesJson.post = function(httpOptions) {
    var url = parse('/api_exports/invoices.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.apiExports.subscriptionsJson.post = function(httpOptions) {
    var url = parse('/api_exports/subscriptions.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.apiExports.proformaInvoices.get = function(batchIdJson, httpOptions) {
    if (!batchIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchIdJson].');
        return;
    }
    var url = parse('/api_exports/proforma_invoices/:batch_id.json', [batchIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.apiExports.invoices.get = function(batchIdJson, httpOptions) {
    if (!batchIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchIdJson].');
        return;
    }
    var url = parse('/api_exports/invoices/:batch_id.json', [batchIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.apiExports.subscriptions.get = function(batchIdJson, httpOptions) {
    if (!batchIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [batchIdJson].');
        return;
    }
    var url = parse('/api_exports/subscriptions/:batch_id.json', [batchIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.advanceInvoice.issueJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/advance_invoice/issue.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.advanceInvoiceJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/advance_invoice.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.advanceInvoice.voidJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/advance_invoice/void.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.portal.customers.enableJson.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/portal/customers/:customer_id/enable.json', [customerId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.portal.customers.managementLinkJson.get = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/portal/customers/:customer_id/management_link.json', [customerId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.portal.customers.invitations.inviteJson.post = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/portal/customers/:customer_id/invitations/invite.json', [customerId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.portal.customers.invitations.revokeJson.delete = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/portal/customers/:customer_id/invitations/revoke.json', [customerId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.productFamilies.couponsJson.post = function(productFamilyId, httpOptions) {
    if (!productFamilyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons.json', [productFamilyId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.productFamilies.couponsJson.get = function(productFamilyId, httpOptions) {
    if (!productFamilyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons.json', [productFamilyId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.coupons.findJson.get = function(httpOptions) {
    var url = parse('/coupons/find.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.coupons.get = function(productFamilyId, couponIdJson, httpOptions) {
    if (!productFamilyId || !couponIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,couponIdJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons/:coupon_id.json', [productFamilyId, couponIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.coupons.put = function(productFamilyId, couponIdJson, httpOptions) {
    if (!productFamilyId || !couponIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,couponIdJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons/:coupon_id.json', [productFamilyId, couponIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.productFamilies.coupons.delete = function(productFamilyId, couponIdJson, httpOptions) {
    if (!productFamilyId || !couponIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,couponIdJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons/:coupon_id.json', [productFamilyId, couponIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.couponsJson.get = function(httpOptions) {
    var url = parse('/coupons.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.coupons.usageJson.get = function(productFamilyId, couponId, httpOptions) {
    if (!productFamilyId || !couponId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,couponId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/coupons/:coupon_id/usage.json', [productFamilyId, couponId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.coupons.validateJson.get = function(httpOptions) {
    var url = parse('/coupons/validate.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.coupon.currencyPricesJson.put = function(couponId, httpOptions) {
    if (!couponId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [couponId].');
        return;
    }
    var url = parse('/coupon/:coupon_id/currency_prices.json', [couponId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.coupons.codesJson.post = function(couponId, httpOptions) {
    if (!couponId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [couponId].');
        return;
    }
    var url = parse('/coupons/:coupon_id/codes.json', [couponId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.coupons.codesJson.get = function(couponId, httpOptions) {
    if (!couponId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [couponId].');
        return;
    }
    var url = parse('/coupons/:coupon_id/codes.json', [couponId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.coupons.codesJson.put = function(couponId, httpOptions) {
    if (!couponId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [couponId].');
        return;
    }
    var url = parse('/coupons/:coupon_id/codes.json', [couponId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.coupons.codes.delete = function(couponId, subcodeJson, httpOptions) {
    if (!couponId || !subcodeJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [couponId,subcodeJson].');
        return;
    }
    var url = parse('/coupons/:coupon_id/codes/:subcode.json', [couponId, subcodeJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.productFamilies.post = function(productFamilyId, pluralKindJson, httpOptions) {
    if (!productFamilyId || !pluralKindJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,pluralKindJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/:plural_kind.json', [productFamilyId, pluralKindJson]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.components.lookupJson.get = function(httpOptions) {
    var url = parse('/components/lookup.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.components.get = function(productFamilyId, componentIdJson, httpOptions) {
    if (!productFamilyId || !componentIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,componentIdJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/components/:component_id.json', [productFamilyId, componentIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.components.delete = function(productFamilyId, componentIdJson, httpOptions) {
    if (!productFamilyId || !componentIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId,componentIdJson].');
        return;
    }
    var url = parse('/product_families/:product_family_id/components/:component_id.json', [productFamilyId, componentIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.componentsJson.get = function(httpOptions) {
    var url = parse('/components.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.components.pricePoints.defaultJson.put = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/default.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.productFamilies.componentsJson.get = function(productFamilyId, httpOptions) {
    if (!productFamilyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/components.json', [productFamilyId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.components.pricePointsJson.post = function(componentId, httpOptions) {
    if (!componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId].');
        return;
    }
    var url = parse('/components/:component_id/price_points.json', [componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.components.pricePointsJson.get = function(componentId, httpOptions) {
    if (!componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId].');
        return;
    }
    var url = parse('/components/:component_id/price_points.json', [componentId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.components.pricePoints.bulkJson.post = function(componentId, httpOptions) {
    if (!componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/bulk.json', [componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.components.pricePoints.put = function(componentId, pricePointIdJson, httpOptions) {
    if (!componentId || !pricePointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointIdJson].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id.json', [componentId, pricePointIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.components.pricePoints.delete = function(componentId, pricePointIdJson, httpOptions) {
    if (!componentId || !pricePointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointIdJson].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id.json', [componentId, pricePointIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.components.pricePoints.unarchiveJson.put = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/unarchive.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.pricePoints.currencyPricesJson.post = function(pricePointId, httpOptions) {
    if (!pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pricePointId].');
        return;
    }
    var url = parse('/price_points/:price_point_id/currency_prices.json', [pricePointId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.pricePoints.currencyPricesJson.put = function(pricePointId, httpOptions) {
    if (!pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [pricePointId].');
        return;
    }
    var url = parse('/price_points/:price_point_id/currency_prices.json', [pricePointId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.componentsPricePointsJson.get = function(httpOptions) {
    var url = parse('/components_price_points.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.customersJson.post = function(httpOptions) {
    var url = parse('/customers.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.customersJson.get = function(httpOptions) {
    var url = parse('/customers.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.customers.get = function(idJson, httpOptions) {
    if (!idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [idJson].');
        return;
    }
    var url = parse('/customers/:id.json', [idJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.customers.put = function(idJson, httpOptions) {
    if (!idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [idJson].');
        return;
    }
    var url = parse('/customers/:id.json', [idJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.customers.delete = function(idJson, httpOptions) {
    if (!idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [idJson].');
        return;
    }
    var url = parse('/customers/:id.json', [idJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.customers.lookupJson.get = function(httpOptions) {
    var url = parse('/customers/lookup.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.customers.subscriptionsJson.get = function(customerId, httpOptions) {
    if (!customerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerId].');
        return;
    }
    var url = parse('/customers/:customer_id/subscriptions.json', [customerId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.metafieldsJson.post = function(resourceType, httpOptions) {
    if (!resourceType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType].');
        return;
    }
    var url = parse('/:resource_type/metafields.json', [resourceType]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.metafieldsJson.get = function(resourceType, httpOptions) {
    if (!resourceType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType].');
        return;
    }
    var url = parse('/:resource_type/metafields.json', [resourceType]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.metafieldsJson.put = function(resourceType, httpOptions) {
    if (!resourceType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType].');
        return;
    }
    var url = parse('/:resource_type/metafields.json', [resourceType]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.metafieldsJson.delete = function(resourceType, httpOptions) {
    if (!resourceType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType].');
        return;
    }
    var url = parse('/:resource_type/metafields.json', [resourceType]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.metadataJson.post = function(resourceType, resourceId, httpOptions) {
    if (!resourceType || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType,resourceId].');
        return;
    }
    var url = parse('/:resource_type/:resource_id/metadata.json', [resourceType, resourceId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.metadataJson.get = function(resourceType, resourceId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/:resource_type/:resource_id/metadata.json', [resourceType, resourceId]);
			break;
		case 1:
			url = parse('/:resource_type/metadata.json', [resourceType]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Chargify(options));
};

exports.metadataJson.put = function(resourceType, resourceId, httpOptions) {
    if (!resourceType || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType,resourceId].');
        return;
    }
    var url = parse('/:resource_type/:resource_id/metadata.json', [resourceType, resourceId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.metadataJson.delete = function(resourceType, resourceId, httpOptions) {
    if (!resourceType || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [resourceType,resourceId].');
        return;
    }
    var url = parse('/:resource_type/:resource_id/metadata.json', [resourceType, resourceId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.eventsJson.get = function(httpOptions) {
    var url = parse('/events.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.eventsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/events.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.events.countJson.get = function(httpOptions) {
    var url = parse('/events/count.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.components.pricePoints.segmentsJson.post = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.components.pricePoints.segmentsJson.get = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.components.pricePoints.segments.put = function(componentId, pricePointId, idJson, httpOptions) {
    if (!componentId || !pricePointId || !idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId,idJson].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments/:id.json', [componentId, pricePointId, idJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.components.pricePoints.segments.delete = function(componentId, pricePointId, idJson, httpOptions) {
    if (!componentId || !pricePointId || !idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId,idJson].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments/:id.json', [componentId, pricePointId, idJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.components.pricePoints.segments.bulkJson.post = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments/bulk.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.components.pricePoints.segments.bulkJson.put = function(componentId, pricePointId, httpOptions) {
    if (!componentId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [componentId,pricePointId].');
        return;
    }
    var url = parse('/components/:component_id/price_points/:price_point_id/segments/bulk.json', [componentId, pricePointId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.statsJson.get = function(httpOptions) {
    var url = parse('/stats.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.mrrJson.get = function(httpOptions) {
    var url = parse('/mrr.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.mrrMovementsJson.get = function(httpOptions) {
    var url = parse('/mrr_movements.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionsMrrJson.get = function(httpOptions) {
    var url = parse('/subscriptions_mrr.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.invoices.refundsJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/refunds.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoicesJson.get = function(httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/invoices.json');
			break;
		case 0:
			url = parse('/invoices.json');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Chargify(options));
};

exports.invoices.get = function(invoiceIdJson, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/invoices/:uid.json', [uidJson]);
			break;
		case 1:
			url = parse('/invoices/:invoice_id.json', [invoiceIdJson]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Chargify(options));
};

exports.invoices.eventsJson.get = function(httpOptions) {
    var url = parse('/invoices/events.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.invoices.paymentsJson.post = function(invoiceId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/invoices/:uid/payments.json', [uid]);
			break;
		case 0:
			url = parse('/invoices/payments.json');
			break;
		case 1:
			url = parse('/invoices/:invoice_id/payments.json', [invoiceId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Chargify(options));
};

exports.creditNotesJson.get = function(httpOptions) {
    var url = parse('/credit_notes.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.creditNotes.get = function(uidJson, httpOptions) {
    if (!uidJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uidJson].');
        return;
    }
    var url = parse('/credit_notes/:uid.json', [uidJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.paymentsJson.post = function(subscriptionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/subscriptions/:subscription_id/payments.json', [subscriptionId]);
			break;
		case 1:
			url = parse('/subscriptions/:subscription_id/payments.json', [subscriptionId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Chargify(options));
};

exports.invoices.reopenJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/reopen.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.voidJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/void.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.segmentsJson.get = function(invoiceUid, httpOptions) {
    if (!invoiceUid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invoiceUid].');
        return;
    }
    var url = parse('/invoices/:invoice_uid/segments.json', [invoiceUid]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.invoicesJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/invoices.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.deliveriesJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/deliveries.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.customerInformation.previewJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/customer_information/preview.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.customerInformationJson.put = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/customer_information.json', [uid]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.invoices.issueJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/invoices/:uid/issue.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.offersJson.post = function(httpOptions) {
    var url = parse('/offers.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.offersJson.get = function(httpOptions) {
    var url = parse('/offers.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.offers.get = function(offerIdJson, httpOptions) {
    if (!offerIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [offerIdJson].');
        return;
    }
    var url = parse('/offers/:offer_id.json', [offerIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.offers.archiveJson.put = function(offerId, httpOptions) {
    if (!offerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [offerId].');
        return;
    }
    var url = parse('/offers/:offer_id/archive.json', [offerId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.offers.unarchiveJson.put = function(offerId, httpOptions) {
    if (!offerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [offerId].');
        return;
    }
    var url = parse('/offers/:offer_id/unarchive.json', [offerId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.paymentProfilesJson.post = function(httpOptions) {
    var url = parse('/payment_profiles.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.paymentProfilesJson.get = function(httpOptions) {
    var url = parse('/payment_profiles.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.paymentProfiles.get = function(paymentProfileIdJson, httpOptions) {
    if (!paymentProfileIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [paymentProfileIdJson].');
        return;
    }
    var url = parse('/payment_profiles/:payment_profile_id.json', [paymentProfileIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.paymentProfiles.put = function(paymentProfileIdJson, httpOptions) {
    if (!paymentProfileIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [paymentProfileIdJson].');
        return;
    }
    var url = parse('/payment_profiles/:payment_profile_id.json', [paymentProfileIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.paymentProfiles.delete = function(paymentProfileIdJson, httpOptions) {
    if (!paymentProfileIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [paymentProfileIdJson].');
        return;
    }
    var url = parse('/payment_profiles/:payment_profile_id.json', [paymentProfileIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.paymentProfiles.delete = function(subscriptionId, paymentProfileIdJson, httpOptions) {
    if (!subscriptionId || !paymentProfileIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,paymentProfileIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/payment_profiles/:payment_profile_id.json', [subscriptionId, paymentProfileIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.bankAccounts.verificationJson.put = function(bankAccountId, httpOptions) {
    if (!bankAccountId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [bankAccountId].');
        return;
    }
    var url = parse('/bank_accounts/:bank_account_id/verification.json', [bankAccountId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptionGroups.paymentProfiles.delete = function(subscriptionGroupUid, paymentProfileIdJson, httpOptions) {
    if (!subscriptionGroupUid || !paymentProfileIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionGroupUid,paymentProfileIdJson].');
        return;
    }
    var url = parse('/subscription_groups/:subscription_group_uid/payment_profiles/:payment_profile_id.json', [subscriptionGroupUid, paymentProfileIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.paymentProfiles.changePaymentProfileJson.post = function(id, paymentProfileId, httpOptions) {
    if (!id || !paymentProfileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,paymentProfileId].');
        return;
    }
    var url = parse('/subscriptions/:id/payment_profiles/:payment_profile_id/change_payment_profile.json', [id, paymentProfileId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.paymentProfiles.changePaymentProfileJson.post = function(uid, paymentProfileId, httpOptions) {
    if (!uid || !paymentProfileId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid,paymentProfileId].');
        return;
    }
    var url = parse('/subscription_groups/:uid/payment_profiles/:payment_profile_id/change_payment_profile.json', [uid, paymentProfileId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.oneTimeTokens.get = function(chargifyTokenJson, httpOptions) {
    if (!chargifyTokenJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [chargifyTokenJson].');
        return;
    }
    var url = parse('/one_time_tokens/:chargify_token.json', [chargifyTokenJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.requestPaymentProfilesUpdateJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/request_payment_profiles_update.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.productFamilies.productsJson.get = function(productFamilyId, httpOptions) {
    if (!productFamilyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/products.json', [productFamilyId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamiliesJson.post = function(httpOptions) {
    var url = parse('/product_families.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.productFamiliesJson.get = function(httpOptions) {
    var url = parse('/product_families.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.get = function(idJson, httpOptions) {
    if (!idJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [idJson].');
        return;
    }
    var url = parse('/product_families/:id.json', [idJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productFamilies.productsJson.post = function(productFamilyId, httpOptions) {
    if (!productFamilyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productFamilyId].');
        return;
    }
    var url = parse('/product_families/:product_family_id/products.json', [productFamilyId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.products.get = function(productIdJson, httpOptions) {
    if (!productIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productIdJson].');
        return;
    }
    var url = parse('/products/:product_id.json', [productIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.products.put = function(productIdJson, httpOptions) {
    if (!productIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productIdJson].');
        return;
    }
    var url = parse('/products/:product_id.json', [productIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.products.delete = function(productIdJson, httpOptions) {
    if (!productIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productIdJson].');
        return;
    }
    var url = parse('/products/:product_id.json', [productIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.products.handle.get = function(apiHandleJson, httpOptions) {
    if (!apiHandleJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiHandleJson].');
        return;
    }
    var url = parse('/products/handle/:api_handle.json', [apiHandleJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.productsJson.get = function(httpOptions) {
    var url = parse('/products.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.products.pricePointsJson.post = function(productId, httpOptions) {
    if (!productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId].');
        return;
    }
    var url = parse('/products/:product_id/price_points.json', [productId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.products.pricePointsJson.get = function(productId, httpOptions) {
    if (!productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId].');
        return;
    }
    var url = parse('/products/:product_id/price_points.json', [productId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.products.pricePoints.put = function(productId, pricePointIdJson, httpOptions) {
    if (!productId || !pricePointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId,pricePointIdJson].');
        return;
    }
    var url = parse('/products/:product_id/price_points/:price_point_id.json', [productId, pricePointIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.products.pricePoints.get = function(productId, pricePointIdJson, httpOptions) {
    if (!productId || !pricePointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId,pricePointIdJson].');
        return;
    }
    var url = parse('/products/:product_id/price_points/:price_point_id.json', [productId, pricePointIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.products.pricePoints.delete = function(productId, pricePointIdJson, httpOptions) {
    if (!productId || !pricePointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId,pricePointIdJson].');
        return;
    }
    var url = parse('/products/:product_id/price_points/:price_point_id.json', [productId, pricePointIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.products.pricePoints.unarchiveJson.patch = function(productId, pricePointId, httpOptions) {
    if (!productId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId,pricePointId].');
        return;
    }
    var url = parse('/products/:product_id/price_points/:price_point_id/unarchive.json', [productId, pricePointId]);
    sys.logs.debug('[chargify] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Chargify(options));
};

exports.products.pricePoints.defaultJson.patch = function(productId, pricePointId, httpOptions) {
    if (!productId || !pricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId,pricePointId].');
        return;
    }
    var url = parse('/products/:product_id/price_points/:price_point_id/default.json', [productId, pricePointId]);
    sys.logs.debug('[chargify] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Chargify(options));
};

exports.products.pricePoints.bulkJson.post = function(productId, httpOptions) {
    if (!productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productId].');
        return;
    }
    var url = parse('/products/:product_id/price_points/bulk.json', [productId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.productPricePoints.currencyPricesJson.post = function(productPricePointId, httpOptions) {
    if (!productPricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productPricePointId].');
        return;
    }
    var url = parse('/product_price_points/:product_price_point_id/currency_prices.json', [productPricePointId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.productPricePoints.currencyPricesJson.put = function(productPricePointId, httpOptions) {
    if (!productPricePointId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [productPricePointId].');
        return;
    }
    var url = parse('/product_price_points/:product_price_point_id/currency_prices.json', [productPricePointId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.productsPricePointsJson.get = function(httpOptions) {
    var url = parse('/products_price_points.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionGroups.proformaInvoicesJson.post = function(subscriptionGroupUid, httpOptions) {
    if (!subscriptionGroupUid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionGroupUid].');
        return;
    }
    var url = parse('/subscription_groups/:subscription_group_uid/proforma_invoices.json', [subscriptionGroupUid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.proformaInvoicesJson.get = function(subscriptionGroupUid, httpOptions) {
    if (!subscriptionGroupUid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionGroupUid].');
        return;
    }
    var url = parse('/subscription_groups/:subscription_group_uid/proforma_invoices.json', [subscriptionGroupUid]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.proformaInvoices.get = function(proformaInvoiceUidJson, httpOptions) {
    if (!proformaInvoiceUidJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [proformaInvoiceUidJson].');
        return;
    }
    var url = parse('/proforma_invoices/:proforma_invoice_uid.json', [proformaInvoiceUidJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.proformaInvoicesJson.post = function(subscriptionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/subscriptions/:subscription_id/proforma_invoices.json', [subscriptionId]);
			break;
		case 0:
			url = parse('/subscriptions/proforma_invoices.json');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Chargify(options));
};

exports.subscriptions.proformaInvoicesJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/proforma_invoices.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.proformaInvoices.voidJson.post = function(proformaInvoiceUid, httpOptions) {
    if (!proformaInvoiceUid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [proformaInvoiceUid].');
        return;
    }
    var url = parse('/proforma_invoices/:proforma_invoice_uid/void.json', [proformaInvoiceUid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.proformaInvoices.previewJson.post = function(subscriptionId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/subscriptions/:subscription_id/proforma_invoices/preview.json', [subscriptionId]);
			break;
		case 0:
			url = parse('/subscriptions/proforma_invoices/preview.json');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[chargify] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(Chargify(options));
};

exports.reasonCodesJson.post = function(httpOptions) {
    var url = parse('/reason_codes.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.reasonCodesJson.get = function(httpOptions) {
    var url = parse('/reason_codes.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.reasonCodes.get = function(reasonCodeIdJson, httpOptions) {
    if (!reasonCodeIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reasonCodeIdJson].');
        return;
    }
    var url = parse('/reason_codes/:reason_code_id.json', [reasonCodeIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.reasonCodes.put = function(reasonCodeIdJson, httpOptions) {
    if (!reasonCodeIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reasonCodeIdJson].');
        return;
    }
    var url = parse('/reason_codes/:reason_code_id.json', [reasonCodeIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.reasonCodes.delete = function(reasonCodeIdJson, httpOptions) {
    if (!reasonCodeIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reasonCodeIdJson].');
        return;
    }
    var url = parse('/reason_codes/:reason_code_id.json', [reasonCodeIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.referralCodes.validateJson.get = function(httpOptions) {
    var url = parse('/referral_codes/validate.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.sellers.salesCommissionSettingsJson.get = function(sellerId, httpOptions) {
    if (!sellerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sellerId].');
        return;
    }
    var url = parse('/sellers/:seller_id/sales_commission_settings.json', [sellerId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.sellers.salesRepsJson.get = function(sellerId, httpOptions) {
    if (!sellerId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sellerId].');
        return;
    }
    var url = parse('/sellers/:seller_id/sales_reps.json', [sellerId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.sellers.salesReps.get = function(sellerId, salesRepIdJson, httpOptions) {
    if (!sellerId || !salesRepIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [sellerId,salesRepIdJson].');
        return;
    }
    var url = parse('/sellers/:seller_id/sales_reps/:sales_rep_id.json', [sellerId, salesRepIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.siteJson.get = function(httpOptions) {
    var url = parse('/site.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.sites.clearDataJson.post = function(httpOptions) {
    var url = parse('/sites/clear_data.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.chargifyJsKeysJson.get = function(httpOptions) {
    var url = parse('/chargify_js_keys.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionsJson.post = function(httpOptions) {
    var url = parse('/subscriptions.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionsJson.get = function(httpOptions) {
    var url = parse('/subscriptions.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.put = function(subscriptionIdJson, httpOptions) {
    if (!subscriptionIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id.json', [subscriptionIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.get = function(subscriptionIdJson, httpOptions) {
    if (!subscriptionIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id.json', [subscriptionIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.overrideJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/override.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.lookupJson.get = function(httpOptions) {
    var url = parse('/subscriptions/lookup.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.purgeJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/purge.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.prepaidConfigurationsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/prepaid_configurations.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.previewJson.post = function(httpOptions) {
    var url = parse('/subscriptions/preview.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.addCouponJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/add_coupon.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.removeCouponJson.delete = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/remove_coupon.json', [subscriptionId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.activateJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/activate.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.components.get = function(subscriptionId, componentIdJson, httpOptions) {
    if (!subscriptionId || !componentIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id.json', [subscriptionId, componentIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.componentsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.pricePointsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/price_points.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.pricePoints.resetJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/price_points/reset.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.components.allocationsJson.post = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/allocations.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.components.allocationsJson.get = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/allocations.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.allocationsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/allocations.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.allocations.previewJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/allocations/preview.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.components.allocations.put = function(subscriptionId, componentId, allocationIdJson, httpOptions) {
    if (!subscriptionId || !componentId || !allocationIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId,allocationIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json', [subscriptionId, componentId, allocationIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.components.allocations.delete = function(subscriptionId, componentId, allocationIdJson, httpOptions) {
    if (!subscriptionId || !componentId || !allocationIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId,allocationIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json', [subscriptionId, componentId, allocationIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.components.usagesJson.post = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/usages.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.components.usagesJson.get = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/components/:component_id/usages.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.eventBasedBilling.subscriptions.components.activateJson.post = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/event_based_billing/subscriptions/:subscription_id/components/:component_id/activate.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.eventBasedBilling.subscriptions.components.deactivateJson.post = function(subscriptionId, componentId, httpOptions) {
    if (!subscriptionId || !componentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,componentId].');
        return;
    }
    var url = parse('/event_based_billing/subscriptions/:subscription_id/components/:component_id/deactivate.json', [subscriptionId, componentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.events.post = function(subdomain, apiHandleJson, httpOptions) {
    if (!subdomain || !apiHandleJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subdomain,apiHandleJson].');
        return;
    }
    var url = parse('/:subdomain/events/:api_handle.json', [subdomain, apiHandleJson]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.events.bulkJson.post = function(subdomain, apiHandle, httpOptions) {
    if (!subdomain || !apiHandle) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subdomain,apiHandle].');
        return;
    }
    var url = parse('/:subdomain/events/:api_handle/bulk.json', [subdomain, apiHandle]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionsComponentsJson.get = function(httpOptions) {
    var url = parse('/subscriptions_components.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionGroups.signupJson.post = function(httpOptions) {
    var url = parse('/subscription_groups/signup.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroupsJson.post = function(httpOptions) {
    var url = parse('/subscription_groups.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroupsJson.get = function(httpOptions) {
    var url = parse('/subscription_groups.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionGroups.get = function(uidJson, httpOptions) {
    if (!uidJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uidJson].');
        return;
    }
    var url = parse('/subscription_groups/:uid.json', [uidJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptionGroups.put = function(uidJson, httpOptions) {
    if (!uidJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uidJson].');
        return;
    }
    var url = parse('/subscription_groups/:uid.json', [uidJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptionGroups.delete = function(uidJson, httpOptions) {
    if (!uidJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uidJson].');
        return;
    }
    var url = parse('/subscription_groups/:uid.json', [uidJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptionGroups.lookupJson.get = function(httpOptions) {
    var url = parse('/subscription_groups/lookup.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.groupJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/group.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.groupJson.delete = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/group.json', [subscriptionId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptionGroups.prepaymentsJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/prepayments.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.serviceCreditsJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/service_credits.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.serviceCreditDeductionsJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/service_credit_deductions.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.cancelJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/cancel.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.delayedCancelJson.post = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/delayed_cancel.json', [uid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptionGroups.delayedCancelJson.delete = function(uid, httpOptions) {
    if (!uid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [uid].');
        return;
    }
    var url = parse('/subscription_groups/:uid/delayed_cancel.json', [uid]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptionGroups.reactivateJson.post = function(subscriptionGroupUid, httpOptions) {
    if (!subscriptionGroupUid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionGroupUid].');
        return;
    }
    var url = parse('/subscription_groups/:subscription_group_uid/reactivate.json', [subscriptionGroupUid]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.accountBalancesJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/account_balances.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.prepaymentsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/prepayments.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.prepaymentsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/prepayments.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.serviceCreditsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/service_credits.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.serviceCreditDeductionsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/service_credit_deductions.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.prepayments.refundsJson.post = function(subscriptionId, prepaymentId, httpOptions) {
    if (!subscriptionId || !prepaymentId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,prepaymentId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/prepayments/:prepayment_id/refunds.json', [subscriptionId, prepaymentId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.notesJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/notes.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.notesJson.delete = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/notes.json', [subscriptionId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.notesJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/notes.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.notes.get = function(subscriptionId, noteIdJson, httpOptions) {
    if (!subscriptionId || !noteIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,noteIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/notes/:note_id.json', [subscriptionId, noteIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.notes.put = function(subscriptionId, noteIdJson, httpOptions) {
    if (!subscriptionId || !noteIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId,noteIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/notes/:note_id.json', [subscriptionId, noteIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.migrationsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/migrations.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.migrations.previewJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/migrations/preview.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.retryJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/retry.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.delete = function(subscriptionIdJson, httpOptions) {
    if (!subscriptionIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionIdJson].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id.json', [subscriptionIdJson]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.resumeJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/resume.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.holdJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/hold.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.holdJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/hold.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.reactivateJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/reactivate.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.subscriptions.delayedCancelJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/delayed_cancel.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.delayedCancelJson.delete = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/delayed_cancel.json', [subscriptionId]);
    sys.logs.debug('[chargify] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options));
};

exports.subscriptions.cancelDunningJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/cancel_dunning.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.renewals.previewJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/renewals/preview.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.webhooksJson.get = function(httpOptions) {
    var url = parse('/webhooks.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.webhooks.settingsJson.put = function(httpOptions) {
    var url = parse('/webhooks/settings.json');
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.webhooks.replayJson.post = function(httpOptions) {
    var url = parse('/webhooks/replay.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.endpointsJson.post = function(httpOptions) {
    var url = parse('/endpoints.json');
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.endpointsJson.get = function(httpOptions) {
    var url = parse('/endpoints.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.endpoints.put = function(endpointIdJson, httpOptions) {
    if (!endpointIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [endpointIdJson].');
        return;
    }
    var url = parse('/endpoints/:endpoint_id.json', [endpointIdJson]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.invoices.chargesJson.post = function(invoiceId, httpOptions) {
    if (!invoiceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invoiceId].');
        return;
    }
    var url = parse('/invoices/:invoice_id/charges.json', [invoiceId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.invoices.adjustmentsJson.post = function(invoiceId, httpOptions) {
    if (!invoiceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invoiceId].');
        return;
    }
    var url = parse('/invoices/:invoice_id/adjustments.json', [invoiceId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.statements.get = function(statementIdJson, httpOptions) {
    if (!statementIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [statementIdJson].');
        return;
    }
    var url = parse('/statements/:statement_id.json', [statementIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.statementsJson.get = function(httpOptions) {
    var url = parse('/statements.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.statementsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/statements.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.statements.idsJson.get = function(httpOptions) {
    var url = parse('/statements/ids.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.statements.idsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/statements/ids.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.statements.countJson.get = function(httpOptions) {
    var url = parse('/statements/count.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.adjustmentsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/adjustments.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.chargesJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/charges.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.refundsJson.post = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/refunds.json', [subscriptionId]);
    sys.logs.debug('[chargify] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options));
};

exports.subscriptions.resetBalanceJson.put = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/reset_balance.json', [subscriptionId]);
    sys.logs.debug('[chargify] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options));
};

exports.transactions.get = function(transactionIdJson, httpOptions) {
    if (!transactionIdJson) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [transactionIdJson].');
        return;
    }
    var url = parse('/transactions/:transaction_id.json', [transactionIdJson]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.transactionsJson.get = function(httpOptions) {
    var url = parse('/transactions.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.subscriptions.transactionsJson.get = function(subscriptionId, httpOptions) {
    if (!subscriptionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [subscriptionId].');
        return;
    }
    var url = parse('/subscriptions/:subscription_id/transactions.json', [subscriptionId]);
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

exports.transactions.countJson.get = function(httpOptions) {
    var url = parse('/transactions/count.json');
    sys.logs.debug('[chargify] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Chargify(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Chargify(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Chargify(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Chargify(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Chargify(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Chargify(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Chargify(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/

var API_URL = "https://subdomain.chargify.com"; // TODO: Set the base url for the api

/****************************************************
 Configurator
 ****************************************************/

var Chargify = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[chargify] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    if (config.get("authenticationMethod") === "apiKey") { // TODO: Set the authentication method if needed or remove this if
        sys.logs.debug('[chargify] Set header apikey');
        headers = mergeJSON(headers, {"Authorization": "API-Key " + config.get("apiKey")});
    } 
    headers = mergeJSON(headers, {"Content-Type": "application/json"});

    options.headers = headers;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}