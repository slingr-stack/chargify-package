# Javascript API

The Javascript API of the chargify package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT`,`PATCH` requests to the [chargify API](API_URL_HERE) like this:
```javascript
var response = pkg.chargify.functions.get('/components_price_points.json')
var response = pkg.chargify.functions.post('/:subdomain/events/:api_handle/bulk.json', body)
var response = pkg.chargify.functions.post('/:subdomain/events/:api_handle/bulk.json')
var response = pkg.chargify.functions.delete('/portal/customers/:customer_id/invitations/revoke.json')
var response = pkg.chargify.functions.put('/subscriptions/:subscription_id/reset_balance.json', body)
var response = pkg.chargify.functions.put('/subscriptions/:subscription_id/reset_balance.json')
var response = pkg.chargify.functions.patch('/products/:product_id/price_points/:price_point_id/unarchive.json', body)
var response = pkg.chargify.functions.patch('/products/:product_id/price_points/:price_point_id/unarchive.json')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/:resource_type/metadata.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.metadataJson.get()
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.metafieldsJson.get(resourceType)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.metafieldsJson.post(resourceType, body)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.metafieldsJson.delete(resourceType)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.metafieldsJson.put(resourceType, body)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.metadataJson.get(resourceType)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.metadataJson.post(resourceType, resourceId, body)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.metadataJson.delete(resourceType, resourceId)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.metadataJson.put(resourceType, resourceId, body)
```
---
* API URL: '/:subdomain/events/:api_handle.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.events.post(subdomain, apiHandleJson, body)
```
---
* API URL: '/:subdomain/events/:api_handle/bulk.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.events.bulkJson.post(subdomain, apiHandle, body)
```
---
* API URL: '/api_exports/invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.apiExports.invoicesJson.post(body)
```
---
* API URL: '/api_exports/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.apiExports.proformaInvoicesJson.post(body)
```
---
* API URL: '/api_exports/subscriptions.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.apiExports.subscriptionsJson.post(body)
```
---
* API URL: '/api_exports/invoices/:batch_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.invoices.get(batchIdJson)
```
---
* API URL: '/api_exports/proforma_invoices/:batch_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.proformaInvoices.get(batchIdJson)
```
---
* API URL: '/api_exports/subscriptions/:batch_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.subscriptions.get(batchIdJson)
```
---
* API URL: '/api_exports/invoices/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.invoices.rowsJson.get(batchId)
```
---
* API URL: '/api_exports/proforma_invoices/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.proformaInvoices.rowsJson.get(batchId)
```
---
* API URL: '/api_exports/subscriptions/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.apiExports.subscriptions.rowsJson.get(batchId)
```
---
* API URL: '/bank_accounts/:bank_account_id/verification.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.bankAccounts.verificationJson.put(bankAccountId, body)
```
---
* API URL: '/chargify_js_keys.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.chargifyJsKeysJson.get()
```
---
* API URL: '/components/lookup.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.components.lookupJson.get()
```
---
* API URL: '/components/:component_id/price_points.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.components.pricePointsJson.get(componentId)
```
---
* API URL: '/components/:component_id/price_points.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.components.pricePointsJson.post(componentId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.components.pricePoints.delete(componentId, pricePointIdJson)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.components.pricePoints.put(componentId, pricePointIdJson, body)
```
---
* API URL: '/components/:component_id/price_points/bulk.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.components.pricePoints.bulkJson.post(componentId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/default.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.components.pricePoints.defaultJson.put(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.components.pricePoints.segmentsJson.get(componentId, pricePointId)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.components.pricePoints.segmentsJson.post(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/unarchive.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.components.pricePoints.unarchiveJson.put(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/:id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.components.pricePoints.segments.delete(componentId, pricePointId, idJson)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/:id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.components.pricePoints.segments.put(componentId, pricePointId, idJson, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/bulk.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.components.pricePoints.segments.bulkJson.post(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/bulk.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.components.pricePoints.segments.bulkJson.put(componentId, pricePointId, body)
```
---
* API URL: '/components.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.componentsJson.get()
```
---
* API URL: '/components_price_points.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.componentsPricePointsJson.get()
```
---
* API URL: '/coupon/:coupon_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.coupon.currencyPricesJson.put(couponId, body)
```
---
* API URL: '/coupons/find.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.coupons.findJson.get()
```
---
* API URL: '/coupons/validate.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.coupons.validateJson.get()
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.coupons.codesJson.get(couponId)
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.coupons.codesJson.post(couponId, body)
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.coupons.codesJson.put(couponId, body)
```
---
* API URL: '/coupons/:coupon_id/codes/:subcode.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.coupons.codes.delete(couponId, subcodeJson)
```
---
* API URL: '/coupons.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.couponsJson.get()
```
---
* API URL: '/credit_notes/:uid.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.creditNotes.get(uidJson)
```
---
* API URL: '/credit_notes.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.creditNotesJson.get()
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.customers.get(idJson)
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.customers.delete(idJson)
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.customers.put(idJson, body)
```
---
* API URL: '/customers/lookup.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.customers.lookupJson.get()
```
---
* API URL: '/customers/:customer_id/subscriptions.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.customers.subscriptionsJson.get(customerId)
```
---
* API URL: '/customers.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.customersJson.get()
```
---
* API URL: '/customers.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.customersJson.post(body)
```
---
* API URL: '/endpoints/:endpoint_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.endpoints.put(endpointIdJson, body)
```
---
* API URL: '/endpoints.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.endpointsJson.get()
```
---
* API URL: '/endpoints.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.endpointsJson.post(body)
```
---
* API URL: '/event_based_billing/subscriptions/:subscription_id/components/:component_id/activate.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.eventBasedBilling.subscriptions.components.activateJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/event_based_billing/subscriptions/:subscription_id/components/:component_id/deactivate.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.eventBasedBilling.subscriptions.components.deactivateJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/events/count.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.events.countJson.get()
```
---
* API URL: '/events.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.eventsJson.get()
```
---
* API URL: '/invoices/:invoice_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoices.get()
```
---
* API URL: '/invoices/:uid.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoices.get()
```
---
* API URL: '/invoices/events.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoices.eventsJson.get()
```
---
* API URL: '/invoices/payments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.paymentsJson.post(body)
```
---
* API URL: '/invoices/:invoice_id/adjustments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.adjustmentsJson.post(invoiceId, body)
```
---
* API URL: '/invoices/:invoice_id/charges.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.chargesJson.post(invoiceId, body)
```
---
* API URL: '/invoices/:invoice_id/payments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.paymentsJson.post(body)
```
---
* API URL: '/invoices/:invoice_uid/segments.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoices.segmentsJson.get(invoiceUid)
```
---
* API URL: '/invoices/:uid/customer_information.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.invoices.customerInformationJson.put(uid, body)
```
---
* API URL: '/invoices/:uid/deliveries.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.deliveriesJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/issue.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.issueJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/payments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.paymentsJson.post(body)
```
---
* API URL: '/invoices/:uid/refunds.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.refundsJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/reopen.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.reopenJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/void.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.voidJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/customer_information/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.invoices.customerInformation.previewJson.post(uid, body)
```
---
* API URL: '/invoices.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoicesJson.get()
```
---
* API URL: '/invoices.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.invoicesJson.get()
```
---
* API URL: '/mrr.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.mrrJson.get()
```
---
* API URL: '/mrr_movements.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.mrrMovementsJson.get()
```
---
* API URL: '/offers/:offer_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.offers.get(offerIdJson)
```
---
* API URL: '/offers/:offer_id/archive.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.offers.archiveJson.put(offerId, body)
```
---
* API URL: '/offers/:offer_id/unarchive.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.offers.unarchiveJson.put(offerId, body)
```
---
* API URL: '/offers.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.offersJson.get()
```
---
* API URL: '/offers.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.offersJson.post(body)
```
---
* API URL: '/one_time_tokens/:chargify_token.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.oneTimeTokens.get(chargifyTokenJson)
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.paymentProfiles.get(paymentProfileIdJson)
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.paymentProfiles.delete(paymentProfileIdJson)
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.paymentProfiles.put(paymentProfileIdJson, body)
```
---
* API URL: '/payment_profiles.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.paymentProfilesJson.get()
```
---
* API URL: '/payment_profiles.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.paymentProfilesJson.post(body)
```
---
* API URL: '/portal/customers/:customer_id/enable.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.portal.customers.enableJson.post(customerId, body)
```
---
* API URL: '/portal/customers/:customer_id/management_link.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.portal.customers.managementLinkJson.get(customerId)
```
---
* API URL: '/portal/customers/:customer_id/invitations/invite.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.portal.customers.invitations.inviteJson.post(customerId, body)
```
---
* API URL: '/portal/customers/:customer_id/invitations/revoke.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.portal.customers.invitations.revokeJson.delete(customerId)
```
---
* API URL: '/price_points/:price_point_id/currency_prices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.pricePoints.currencyPricesJson.post(pricePointId, body)
```
---
* API URL: '/price_points/:price_point_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.pricePoints.currencyPricesJson.put(pricePointId, body)
```
---
* API URL: '/product_families/:id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.get(idJson)
```
---
* API URL: '/product_families/:product_family_id/:plural_kind.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.productFamilies.post(productFamilyId, pluralKindJson, body)
```
---
* API URL: '/product_families/:product_family_id/components.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.componentsJson.get(productFamilyId)
```
---
* API URL: '/product_families/:product_family_id/coupons.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.couponsJson.get(productFamilyId)
```
---
* API URL: '/product_families/:product_family_id/coupons.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.productFamilies.couponsJson.post(productFamilyId, body)
```
---
* API URL: '/product_families/:product_family_id/products.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.productsJson.get(productFamilyId)
```
---
* API URL: '/product_families/:product_family_id/products.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.productFamilies.productsJson.post(productFamilyId, body)
```
---
* API URL: '/product_families/:product_family_id/components/:component_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.components.get(productFamilyId, componentIdJson)
```
---
* API URL: '/product_families/:product_family_id/components/:component_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.productFamilies.components.delete(productFamilyId, componentIdJson)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.coupons.get(productFamilyId, couponIdJson)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.productFamilies.coupons.delete(productFamilyId, couponIdJson)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.productFamilies.coupons.put(productFamilyId, couponIdJson, body)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id/usage.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamilies.coupons.usageJson.get(productFamilyId, couponId)
```
---
* API URL: '/product_families.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productFamiliesJson.get()
```
---
* API URL: '/product_families.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.productFamiliesJson.post(body)
```
---
* API URL: '/product_price_points/:product_price_point_id/currency_prices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.productPricePoints.currencyPricesJson.post(productPricePointId, body)
```
---
* API URL: '/product_price_points/:product_price_point_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.productPricePoints.currencyPricesJson.put(productPricePointId, body)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.products.get(productIdJson)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.products.delete(productIdJson)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.products.put(productIdJson, body)
```
---
* API URL: '/products/:product_id/price_points.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.products.pricePointsJson.get(productId)
```
---
* API URL: '/products/:product_id/price_points.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.products.pricePointsJson.post(productId, body)
```
---
* API URL: '/products/handle/:api_handle.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.products.handle.get(apiHandleJson)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.products.pricePoints.get(productId, pricePointIdJson)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.products.pricePoints.delete(productId, pricePointIdJson)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.products.pricePoints.put(productId, pricePointIdJson, body)
```
---
* API URL: '/products/:product_id/price_points/bulk.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.products.pricePoints.bulkJson.post(productId, body)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id/default.json'
* HTTP Method: 'PATCH'
```javascript
pkg.chargify.functions.products.pricePoints.defaultJson.patch(productId, pricePointId, body)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id/unarchive.json'
* HTTP Method: 'PATCH'
```javascript
pkg.chargify.functions.products.pricePoints.unarchiveJson.patch(productId, pricePointId, body)
```
---
* API URL: '/products.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productsJson.get()
```
---
* API URL: '/products_price_points.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.productsPricePointsJson.get()
```
---
* API URL: '/proforma_invoices/:proforma_invoice_uid.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.proformaInvoices.get(proformaInvoiceUidJson)
```
---
* API URL: '/proforma_invoices/:proforma_invoice_uid/void.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.proformaInvoices.voidJson.post(proformaInvoiceUid, body)
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.reasonCodes.get(reasonCodeIdJson)
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.reasonCodes.delete(reasonCodeIdJson)
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.reasonCodes.put(reasonCodeIdJson, body)
```
---
* API URL: '/reason_codes.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.reasonCodesJson.get()
```
---
* API URL: '/reason_codes.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.reasonCodesJson.post(body)
```
---
* API URL: '/referral_codes/validate.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.referralCodes.validateJson.get()
```
---
* API URL: '/sellers/:seller_id/sales_commission_settings.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.sellers.salesCommissionSettingsJson.get(sellerId)
```
---
* API URL: '/sellers/:seller_id/sales_reps.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.sellers.salesRepsJson.get(sellerId)
```
---
* API URL: '/sellers/:seller_id/sales_reps/:sales_rep_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.sellers.salesReps.get(sellerId, salesRepIdJson)
```
---
* API URL: '/site.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.siteJson.get()
```
---
* API URL: '/sites/clear_data.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.sites.clearDataJson.post(body)
```
---
* API URL: '/statements/:statement_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.statements.get(statementIdJson)
```
---
* API URL: '/statements/count.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.statements.countJson.get()
```
---
* API URL: '/statements/ids.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.statements.idsJson.get()
```
---
* API URL: '/statements.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.statementsJson.get()
```
---
* API URL: '/stats.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.statsJson.get()
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionGroups.get(uidJson)
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptionGroups.delete(uidJson)
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptionGroups.put(uidJson, body)
```
---
* API URL: '/subscription_groups/lookup.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionGroups.lookupJson.get()
```
---
* API URL: '/subscription_groups/signup.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.signupJson.post(body)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/proforma_invoices.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionGroups.proformaInvoicesJson.get(subscriptionGroupUid)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.proformaInvoicesJson.post(subscriptionGroupUid, body)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/reactivate.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.reactivateJson.post(subscriptionGroupUid, body)
```
---
* API URL: '/subscription_groups/:uid/cancel.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.cancelJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/delayed_cancel.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.delayedCancelJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/delayed_cancel.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptionGroups.delayedCancelJson.delete(uid)
```
---
* API URL: '/subscription_groups/:uid/prepayments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.prepaymentsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/service_credit_deductions.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.serviceCreditDeductionsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/service_credits.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.serviceCreditsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptionGroups.paymentProfiles.delete(subscriptionGroupUid, paymentProfileIdJson)
```
---
* API URL: '/subscription_groups/:uid/payment_profiles/:payment_profile_id/change_payment_profile.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroups.paymentProfiles.changePaymentProfileJson.post(uid, paymentProfileId, body)
```
---
* API URL: '/subscription_groups.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionGroupsJson.get()
```
---
* API URL: '/subscription_groups.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionGroupsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.get(subscriptionIdJson)
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.delete(subscriptionIdJson)
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.put(subscriptionIdJson, body)
```
---
* API URL: '/subscriptions/lookup.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.lookupJson.get()
```
---
* API URL: '/subscriptions/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.previewJson.post(body)
```
---
* API URL: '/subscriptions/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.proformaInvoicesJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/account_balances.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.accountBalancesJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/activate.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.activateJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/add_coupon.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.addCouponJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/adjustments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.adjustmentsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.advanceInvoiceJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/allocations.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.allocationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/cancel_dunning.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.cancelDunningJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/charges.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.chargesJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.componentsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/delayed_cancel.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.delayedCancelJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/delayed_cancel.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.delayedCancelJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/events.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.eventsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/group.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.groupJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/group.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.groupJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/hold.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.holdJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/hold.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.holdJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.invoicesJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/migrations.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.migrationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.notesJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.notesJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.notesJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/override.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.overrideJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/payments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.paymentsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/payments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.paymentsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/prepaid_configurations.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.prepaidConfigurationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.prepaymentsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.prepaymentsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/price_points.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.pricePointsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.proformaInvoicesJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.proformaInvoicesJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/purge.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.purgeJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/reactivate.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.reactivateJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/refunds.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.refundsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/remove_coupon.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.removeCouponJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/request_payment_profiles_update.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.requestPaymentProfilesUpdateJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/reset_balance.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.resetBalanceJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/resume.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.resumeJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/retry.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.retryJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/service_credit_deductions.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.serviceCreditDeductionsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/service_credits.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.serviceCreditsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/statements.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.statementsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/transactions.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.transactionsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/proforma_invoices/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.proformaInvoices.previewJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice/issue.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.advanceInvoice.issueJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice/void.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.advanceInvoice.voidJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/allocations/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.allocations.previewJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.components.get(subscriptionId, componentIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/migrations/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.migrations.previewJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/notes/:note_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.notes.get(subscriptionId, noteIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/notes/:note_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.notes.put(subscriptionId, noteIdJson, body)
```
---
* API URL: '/subscriptions/:subscription_id/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.paymentProfiles.delete(subscriptionId, paymentProfileIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/price_points/reset.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.pricePoints.resetJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.proformaInvoices.previewJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/renewals/preview.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.renewals.previewJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/statements/ids.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.statements.idsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:id/payment_profiles/:payment_profile_id/change_payment_profile.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.paymentProfiles.changePaymentProfileJson.post(id, paymentProfileId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.components.allocationsJson.get(subscriptionId, componentId)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.components.allocationsJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/usages.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptions.components.usagesJson.get(subscriptionId, componentId)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/usages.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.components.usagesJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments/:prepayment_id/refunds.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptions.prepayments.refundsJson.post(subscriptionId, prepaymentId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json'
* HTTP Method: 'DELETE'
```javascript
pkg.chargify.functions.subscriptions.components.allocations.delete(subscriptionId, componentId, allocationIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.subscriptions.components.allocations.put(subscriptionId, componentId, allocationIdJson, body)
```
---
* API URL: '/subscriptions.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionsJson.get()
```
---
* API URL: '/subscriptions.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.subscriptionsJson.post(body)
```
---
* API URL: '/subscriptions_components.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionsComponentsJson.get()
```
---
* API URL: '/subscriptions_mrr.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.subscriptionsMrrJson.get()
```
---
* API URL: '/transactions/:transaction_id.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.transactions.get(transactionIdJson)
```
---
* API URL: '/transactions/count.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.transactions.countJson.get()
```
---
* API URL: '/transactions.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.transactionsJson.get()
```
---
* API URL: '/webhooks/replay.json'
* HTTP Method: 'POST'
```javascript
pkg.chargify.functions.webhooks.replayJson.post(body)
```
---
* API URL: '/webhooks/settings.json'
* HTTP Method: 'PUT'
```javascript
pkg.chargify.functions.webhooks.settingsJson.put(body)
```
---
* API URL: '/webhooks.json'
* HTTP Method: 'GET'
```javascript
pkg.chargify.functions.webhooksJson.get()
```
---

</details>

