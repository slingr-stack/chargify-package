<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Github package</td>
        <td>August 10, 2023</td>
        <td>Detailed description of the API of the Chargify package.</td>
    </tr>
    </tbody>
</table>

# Overview

## API Overview
The Chargify Package allows you to interact programmatically with our system from your own application. Using the Javascript API, you can interact with resources such as:

- Products
- Subscriptions
- Customers

The Chargify Package aims to adhere to Package design principles. You interact with the resources exposed through the Chargify API by accessing collection and element URIs using HTTP verbs (GET, POST, PUT, and DELETE). Chargify accepts and returns data in JSON format.

## Authentication

To use this package, you will require the following information provided by Chargify

- [ApiKey](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405281550477#api-keys-0-0)

- [Subdomain](https://developers.chargify.com/docs/developer-docs/158e3be5cbdc8-sites-subdomains)

- [Shared Keys](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405030922765#passwords-shared-keys-0-0)


## Chargify's documentation.

- [Chargify REST API](https://developers.chargify.com/docs/api-docs)


# Javascript API

The Javascript API of the chargify endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT`,`PATCH` requests to the [chargify API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.chargify.get('/transactions/:transaction_id.json')
var response = app.endpoints.chargify.post('/api_exports/proforma_invoices.json', body)
var response = app.endpoints.chargify.post('/api_exports/proforma_invoices.json')
var response = app.endpoints.chargify.delete('/subscription_groups/:uid.json')
var response = app.endpoints.chargify.put('/:resource_type/:resource_id/metadata.json', body)
var response = app.endpoints.chargify.put('/:resource_type/:resource_id/metadata.json')
var response = app.endpoints.chargify.patch('/products/:product_id/price_points/:price_point_id/default.json', body)
var response = app.endpoints.chargify.patch('/products/:product_id/price_points/:price_point_id/default.json')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/api_exports/proforma_invoices/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.proformaInvoices.rowsJson.get(batchId)
```
---
* API URL: '/api_exports/invoices/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.invoices.rowsJson.get(batchId)
```
---
* API URL: '/api_exports/subscriptions/:batch_id/rows.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.subscriptions.rowsJson.get(batchId)
```
---
* API URL: '/api_exports/proforma_invoices/:batch_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.proformaInvoices.get(batchIdJson)
```
---
* API URL: '/api_exports/invoices/:batch_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.invoices.get(batchIdJson)
```
---
* API URL: '/api_exports/subscriptions/:batch_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.apiExports.subscriptions.get(batchIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.advanceInvoiceJson.get(subscriptionId)
```
---
* API URL: '/portal/customers/:customer_id/management_link.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.portal.customers.managementLinkJson.get(customerId)
```
---
* API URL: '/product_families/:product_family_id/coupons.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.couponsJson.get(productFamilyId)
```
---
* API URL: '/coupons/find.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.coupons.findJson.get()
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.coupons.get(productFamilyId, couponIdJson)
```
---
* API URL: '/coupons.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.couponsJson.get()
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id/usage.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.coupons.usageJson.get(productFamilyId, couponId)
```
---
* API URL: '/coupons/validate.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.coupons.validateJson.get()
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.coupons.codesJson.get(couponId)
```
---
* API URL: '/components/lookup.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.components.lookupJson.get()
```
---
* API URL: '/product_families/:product_family_id/components/:component_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.components.get(productFamilyId, componentIdJson)
```
---
* API URL: '/components.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.componentsJson.get()
```
---
* API URL: '/product_families/:product_family_id/components.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.componentsJson.get(productFamilyId)
```
---
* API URL: '/components/:component_id/price_points.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.components.pricePointsJson.get(componentId)
```
---
* API URL: '/components_price_points.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.componentsPricePointsJson.get()
```
---
* API URL: '/customers.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.customersJson.get()
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.customers.get(idJson)
```
---
* API URL: '/customers/lookup.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.customers.lookupJson.get()
```
---
* API URL: '/customers/:customer_id/subscriptions.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.customers.subscriptionsJson.get(customerId)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.metafieldsJson.get(resourceType)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.metadataJson.get(resourceType)
```
---
* API URL: '/:resource_type/metadata.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.metadataJson.get()
```
---
* API URL: '/events.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.eventsJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/events.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.eventsJson.get(subscriptionId)
```
---
* API URL: '/events/count.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.events.countJson.get()
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.components.pricePoints.segmentsJson.get(componentId, pricePointId)
```
---
* API URL: '/stats.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.statsJson.get()
```
---
* API URL: '/mrr.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.mrrJson.get()
```
---
* API URL: '/mrr_movements.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.mrrMovementsJson.get()
```
---
* API URL: '/subscriptions_mrr.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionsMrrJson.get()
```
---
* API URL: '/invoices.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoicesJson.get()
```
---
* API URL: '/invoices.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoicesJson.get()
```
---
* API URL: '/invoices/:uid.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoices.get()
```
---
* API URL: '/invoices/:invoice_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoices.get()
```
---
* API URL: '/invoices/events.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoices.eventsJson.get()
```
---
* API URL: '/credit_notes.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.creditNotesJson.get()
```
---
* API URL: '/credit_notes/:uid.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.creditNotes.get(uidJson)
```
---
* API URL: '/invoices/:invoice_uid/segments.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.invoices.segmentsJson.get(invoiceUid)
```
---
* API URL: '/offers.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.offersJson.get()
```
---
* API URL: '/offers/:offer_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.offers.get(offerIdJson)
```
---
* API URL: '/payment_profiles.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.paymentProfilesJson.get()
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.paymentProfiles.get(paymentProfileIdJson)
```
---
* API URL: '/one_time_tokens/:chargify_token.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.oneTimeTokens.get(chargifyTokenJson)
```
---
* API URL: '/product_families/:product_family_id/products.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.productsJson.get(productFamilyId)
```
---
* API URL: '/product_families.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamiliesJson.get()
```
---
* API URL: '/product_families/:id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productFamilies.get(idJson)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.products.get(productIdJson)
```
---
* API URL: '/products/handle/:api_handle.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.products.handle.get(apiHandleJson)
```
---
* API URL: '/products.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productsJson.get()
```
---
* API URL: '/products/:product_id/price_points.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.products.pricePointsJson.get(productId)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.products.pricePoints.get(productId, pricePointIdJson)
```
---
* API URL: '/products_price_points.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.productsPricePointsJson.get()
```
---
* API URL: '/subscription_groups/:subscription_group_uid/proforma_invoices.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionGroups.proformaInvoicesJson.get(subscriptionGroupUid)
```
---
* API URL: '/proforma_invoices/:proforma_invoice_uid.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.proformaInvoices.get(proformaInvoiceUidJson)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.proformaInvoicesJson.get(subscriptionId)
```
---
* API URL: '/reason_codes.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.reasonCodesJson.get()
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.reasonCodes.get(reasonCodeIdJson)
```
---
* API URL: '/referral_codes/validate.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.referralCodes.validateJson.get()
```
---
* API URL: '/sellers/:seller_id/sales_commission_settings.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.sellers.salesCommissionSettingsJson.get(sellerId)
```
---
* API URL: '/sellers/:seller_id/sales_reps.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.sellers.salesRepsJson.get(sellerId)
```
---
* API URL: '/sellers/:seller_id/sales_reps/:sales_rep_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.sellers.salesReps.get(sellerId, salesRepIdJson)
```
---
* API URL: '/site.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.siteJson.get()
```
---
* API URL: '/chargify_js_keys.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.chargifyJsKeysJson.get()
```
---
* API URL: '/subscriptions.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionsJson.get()
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.get(subscriptionIdJson)
```
---
* API URL: '/subscriptions/lookup.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.lookupJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.components.get(subscriptionId, componentIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/components.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.componentsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.components.allocationsJson.get(subscriptionId, componentId)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/usages.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.components.usagesJson.get(subscriptionId, componentId)
```
---
* API URL: '/subscriptions_components.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionsComponentsJson.get()
```
---
* API URL: '/subscription_groups.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionGroupsJson.get()
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionGroups.get(uidJson)
```
---
* API URL: '/subscription_groups/lookup.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptionGroups.lookupJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/account_balances.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.accountBalancesJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.prepaymentsJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.notesJson.get(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/notes/:note_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.notes.get(subscriptionId, noteIdJson)
```
---
* API URL: '/webhooks.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.webhooksJson.get()
```
---
* API URL: '/endpoints.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.endpointsJson.get()
```
---
* API URL: '/statements/:statement_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.statements.get(statementIdJson)
```
---
* API URL: '/statements.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.statementsJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/statements.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.statementsJson.get(subscriptionId)
```
---
* API URL: '/statements/ids.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.statements.idsJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/statements/ids.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.statements.idsJson.get(subscriptionId)
```
---
* API URL: '/statements/count.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.statements.countJson.get()
```
---
* API URL: '/transactions/:transaction_id.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.transactions.get(transactionIdJson)
```
---
* API URL: '/transactions.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.transactionsJson.get()
```
---
* API URL: '/subscriptions/:subscription_id/transactions.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.subscriptions.transactionsJson.get(subscriptionId)
```
---
* API URL: '/transactions/count.json'
* HTTP Method: 'GET'
```javascript
app.endpoints.chargify.transactions.countJson.get()
```
---
* API URL: '/api_exports/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.apiExports.proformaInvoicesJson.post(body)
```
---
* API URL: '/api_exports/invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.apiExports.invoicesJson.post(body)
```
---
* API URL: '/api_exports/subscriptions.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.apiExports.subscriptionsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice/issue.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.advanceInvoice.issueJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/advance_invoice/void.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.advanceInvoice.voidJson.post(subscriptionId, body)
```
---
* API URL: '/portal/customers/:customer_id/enable.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.portal.customers.enableJson.post(customerId, body)
```
---
* API URL: '/portal/customers/:customer_id/invitations/invite.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.portal.customers.invitations.inviteJson.post(customerId, body)
```
---
* API URL: '/product_families/:product_family_id/coupons.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.productFamilies.couponsJson.post(productFamilyId, body)
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.coupons.codesJson.post(couponId, body)
```
---
* API URL: '/product_families/:product_family_id/:plural_kind.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.productFamilies.post(productFamilyId, pluralKindJson, body)
```
---
* API URL: '/components/:component_id/price_points.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.components.pricePointsJson.post(componentId, body)
```
---
* API URL: '/components/:component_id/price_points/bulk.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.components.pricePoints.bulkJson.post(componentId, body)
```
---
* API URL: '/price_points/:price_point_id/currency_prices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.pricePoints.currencyPricesJson.post(pricePointId, body)
```
---
* API URL: '/customers.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.customersJson.post(body)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.metafieldsJson.post(resourceType, body)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.metadataJson.post(resourceType, resourceId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.components.pricePoints.segmentsJson.post(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/bulk.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.components.pricePoints.segments.bulkJson.post(componentId, pricePointId, body)
```
---
* API URL: '/invoices/:uid/refunds.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.refundsJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/payments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.paymentsJson.post(body)
```
---
* API URL: '/invoices/payments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.paymentsJson.post(body)
```
---
* API URL: '/invoices/:invoice_id/payments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.paymentsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/payments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.paymentsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/payments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.paymentsJson.post(body)
```
---
* API URL: '/invoices/:uid/reopen.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.reopenJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/void.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.voidJson.post(uid, body)
```
---
* API URL: '/subscriptions/:subscription_id/invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.invoicesJson.post(subscriptionId, body)
```
---
* API URL: '/invoices/:uid/deliveries.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.deliveriesJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/customer_information/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.customerInformation.previewJson.post(uid, body)
```
---
* API URL: '/invoices/:uid/issue.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.issueJson.post(uid, body)
```
---
* API URL: '/offers.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.offersJson.post(body)
```
---
* API URL: '/payment_profiles.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.paymentProfilesJson.post(body)
```
---
* API URL: '/subscriptions/:id/payment_profiles/:payment_profile_id/change_payment_profile.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.paymentProfiles.changePaymentProfileJson.post(id, paymentProfileId, body)
```
---
* API URL: '/subscription_groups/:uid/payment_profiles/:payment_profile_id/change_payment_profile.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.paymentProfiles.changePaymentProfileJson.post(uid, paymentProfileId, body)
```
---
* API URL: '/subscriptions/:subscription_id/request_payment_profiles_update.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.requestPaymentProfilesUpdateJson.post(subscriptionId, body)
```
---
* API URL: '/product_families.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.productFamiliesJson.post(body)
```
---
* API URL: '/product_families/:product_family_id/products.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.productFamilies.productsJson.post(productFamilyId, body)
```
---
* API URL: '/products/:product_id/price_points.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.products.pricePointsJson.post(productId, body)
```
---
* API URL: '/products/:product_id/price_points/bulk.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.products.pricePoints.bulkJson.post(productId, body)
```
---
* API URL: '/product_price_points/:product_price_point_id/currency_prices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.productPricePoints.currencyPricesJson.post(productPricePointId, body)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.proformaInvoicesJson.post(subscriptionGroupUid, body)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.proformaInvoicesJson.post(body)
```
---
* API URL: '/subscriptions/proforma_invoices.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.proformaInvoicesJson.post(body)
```
---
* API URL: '/proforma_invoices/:proforma_invoice_uid/void.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.proformaInvoices.voidJson.post(proformaInvoiceUid, body)
```
---
* API URL: '/subscriptions/:subscription_id/proforma_invoices/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.proformaInvoices.previewJson.post(body)
```
---
* API URL: '/subscriptions/proforma_invoices/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.proformaInvoices.previewJson.post(body)
```
---
* API URL: '/reason_codes.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.reasonCodesJson.post(body)
```
---
* API URL: '/sites/clear_data.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.sites.clearDataJson.post(body)
```
---
* API URL: '/subscriptions.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/purge.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.purgeJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/prepaid_configurations.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.prepaidConfigurationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.previewJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/add_coupon.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.addCouponJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/price_points.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.pricePointsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/price_points/reset.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.pricePoints.resetJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.components.allocationsJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/subscriptions/:subscription_id/allocations.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.allocationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/allocations/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.allocations.previewJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/usages.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.components.usagesJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/event_based_billing/subscriptions/:subscription_id/components/:component_id/activate.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.eventBasedBilling.subscriptions.components.activateJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/event_based_billing/subscriptions/:subscription_id/components/:component_id/deactivate.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.eventBasedBilling.subscriptions.components.deactivateJson.post(subscriptionId, componentId, body)
```
---
* API URL: '/:subdomain/events/:api_handle.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.events.post(subdomain, apiHandleJson, body)
```
---
* API URL: '/:subdomain/events/:api_handle/bulk.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.events.bulkJson.post(subdomain, apiHandle, body)
```
---
* API URL: '/subscription_groups/signup.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.signupJson.post(body)
```
---
* API URL: '/subscription_groups.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroupsJson.post(body)
```
---
* API URL: '/subscriptions/:subscription_id/group.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.groupJson.post(subscriptionId, body)
```
---
* API URL: '/subscription_groups/:uid/prepayments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.prepaymentsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/service_credits.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.serviceCreditsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/service_credit_deductions.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.serviceCreditDeductionsJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/cancel.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.cancelJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:uid/delayed_cancel.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.delayedCancelJson.post(uid, body)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/reactivate.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptionGroups.reactivateJson.post(subscriptionGroupUid, body)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.prepaymentsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/service_credits.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.serviceCreditsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/service_credit_deductions.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.serviceCreditDeductionsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/prepayments/:prepayment_id/refunds.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.prepayments.refundsJson.post(subscriptionId, prepaymentId, body)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.notesJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/migrations.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.migrationsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/migrations/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.migrations.previewJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/resume.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.resumeJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/hold.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.holdJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/delayed_cancel.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.delayedCancelJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/cancel_dunning.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.cancelDunningJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/renewals/preview.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.renewals.previewJson.post(subscriptionId, body)
```
---
* API URL: '/webhooks/replay.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.webhooks.replayJson.post(body)
```
---
* API URL: '/endpoints.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.endpointsJson.post(body)
```
---
* API URL: '/invoices/:invoice_id/charges.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.chargesJson.post(invoiceId, body)
```
---
* API URL: '/invoices/:invoice_id/adjustments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.invoices.adjustmentsJson.post(invoiceId, body)
```
---
* API URL: '/subscriptions/:subscription_id/adjustments.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.adjustmentsJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/charges.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.chargesJson.post(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/refunds.json'
* HTTP Method: 'POST'
```javascript
app.endpoints.chargify.subscriptions.refundsJson.post(subscriptionId, body)
```
---
* API URL: '/portal/customers/:customer_id/invitations/revoke.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.portal.customers.invitations.revokeJson.delete(customerId)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.productFamilies.coupons.delete(productFamilyId, couponIdJson)
```
---
* API URL: '/coupons/:coupon_id/codes/:subcode.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.coupons.codes.delete(couponId, subcodeJson)
```
---
* API URL: '/product_families/:product_family_id/components/:component_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.productFamilies.components.delete(productFamilyId, componentIdJson)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.components.pricePoints.delete(componentId, pricePointIdJson)
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.customers.delete(idJson)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.metafieldsJson.delete(resourceType)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.metadataJson.delete(resourceType, resourceId)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/:id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.components.pricePoints.segments.delete(componentId, pricePointId, idJson)
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.paymentProfiles.delete(paymentProfileIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.paymentProfiles.delete(subscriptionId, paymentProfileIdJson)
```
---
* API URL: '/subscription_groups/:subscription_group_uid/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptionGroups.paymentProfiles.delete(subscriptionGroupUid, paymentProfileIdJson)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.products.delete(productIdJson)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.products.pricePoints.delete(productId, pricePointIdJson)
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.reasonCodes.delete(reasonCodeIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/remove_coupon.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.removeCouponJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.components.allocations.delete(subscriptionId, componentId, allocationIdJson)
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptionGroups.delete(uidJson)
```
---
* API URL: '/subscriptions/:subscription_id/group.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.groupJson.delete(subscriptionId)
```
---
* API URL: '/subscription_groups/:uid/delayed_cancel.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptionGroups.delayedCancelJson.delete(uid)
```
---
* API URL: '/subscriptions/:subscription_id/notes.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.notesJson.delete(subscriptionId)
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.delete(subscriptionIdJson)
```
---
* API URL: '/subscriptions/:subscription_id/delayed_cancel.json'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.chargify.subscriptions.delayedCancelJson.delete(subscriptionId)
```
---
* API URL: '/product_families/:product_family_id/coupons/:coupon_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.productFamilies.coupons.put(productFamilyId, couponIdJson, body)
```
---
* API URL: '/coupon/:coupon_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.coupon.currencyPricesJson.put(couponId, body)
```
---
* API URL: '/coupons/:coupon_id/codes.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.coupons.codesJson.put(couponId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/default.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.components.pricePoints.defaultJson.put(componentId, pricePointId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.components.pricePoints.put(componentId, pricePointIdJson, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/unarchive.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.components.pricePoints.unarchiveJson.put(componentId, pricePointId, body)
```
---
* API URL: '/price_points/:price_point_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.pricePoints.currencyPricesJson.put(pricePointId, body)
```
---
* API URL: '/customers/:id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.customers.put(idJson, body)
```
---
* API URL: '/:resource_type/metafields.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.metafieldsJson.put(resourceType, body)
```
---
* API URL: '/:resource_type/:resource_id/metadata.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.metadataJson.put(resourceType, resourceId, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/:id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.components.pricePoints.segments.put(componentId, pricePointId, idJson, body)
```
---
* API URL: '/components/:component_id/price_points/:price_point_id/segments/bulk.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.components.pricePoints.segments.bulkJson.put(componentId, pricePointId, body)
```
---
* API URL: '/invoices/:uid/customer_information.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.invoices.customerInformationJson.put(uid, body)
```
---
* API URL: '/offers/:offer_id/archive.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.offers.archiveJson.put(offerId, body)
```
---
* API URL: '/offers/:offer_id/unarchive.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.offers.unarchiveJson.put(offerId, body)
```
---
* API URL: '/payment_profiles/:payment_profile_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.paymentProfiles.put(paymentProfileIdJson, body)
```
---
* API URL: '/bank_accounts/:bank_account_id/verification.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.bankAccounts.verificationJson.put(bankAccountId, body)
```
---
* API URL: '/products/:product_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.products.put(productIdJson, body)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.products.pricePoints.put(productId, pricePointIdJson, body)
```
---
* API URL: '/product_price_points/:product_price_point_id/currency_prices.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.productPricePoints.currencyPricesJson.put(productPricePointId, body)
```
---
* API URL: '/reason_codes/:reason_code_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.reasonCodes.put(reasonCodeIdJson, body)
```
---
* API URL: '/subscriptions/:subscription_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.put(subscriptionIdJson, body)
```
---
* API URL: '/subscriptions/:subscription_id/override.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.overrideJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/activate.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.activateJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/components/:component_id/allocations/:allocation_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.components.allocations.put(subscriptionId, componentId, allocationIdJson, body)
```
---
* API URL: '/subscription_groups/:uid.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptionGroups.put(uidJson, body)
```
---
* API URL: '/subscriptions/:subscription_id/notes/:note_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.notes.put(subscriptionId, noteIdJson, body)
```
---
* API URL: '/subscriptions/:subscription_id/retry.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.retryJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/hold.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.holdJson.put(subscriptionId, body)
```
---
* API URL: '/subscriptions/:subscription_id/reactivate.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.reactivateJson.put(subscriptionId, body)
```
---
* API URL: '/webhooks/settings.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.webhooks.settingsJson.put(body)
```
---
* API URL: '/endpoints/:endpoint_id.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.endpoints.put(endpointIdJson, body)
```
---
* API URL: '/subscriptions/:subscription_id/reset_balance.json'
* HTTP Method: 'PUT'
```javascript
app.endpoints.chargify.subscriptions.resetBalanceJson.put(subscriptionId, body)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id/unarchive.json'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.chargify.products.pricePoints.unarchiveJson.patch(productId, pricePointId, body)
```
---
* API URL: '/products/:product_id/price_points/:price_point_id/default.json'
* HTTP Method: 'PATCH'
```javascript
app.endpoints.chargify.products.pricePoints.defaultJson.patch(productId, pricePointId, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,DELETE,PUT,PATCH</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/api_exports/proforma_invoices/{batch_id}/rows.json<br>/api_exports/invoices/{batch_id}/rows.json<br>/api_exports/subscriptions/{batch_id}/rows.json<br>/api_exports/proforma_invoices/{batch_id.json}<br>/api_exports/invoices/{batch_id.json}<br>/api_exports/subscriptions/{batch_id.json}<br>/subscriptions/{subscription_id}/advance_invoice.json<br>/portal/customers/{customer_id}/management_link.json<br>/product_families/{product_family_id}/coupons.json<br>/coupons/find.json<br>/product_families/{product_family_id}/coupons/{coupon_id.json}<br>/coupons.json<br>/product_families/{product_family_id}/coupons/{coupon_id}/usage.json<br>/coupons/validate.json<br>/coupons/{coupon_id}/codes.json<br>/components/lookup.json<br>/product_families/{product_family_id}/components/{component_id.json}<br>/components.json<br>/product_families/{product_family_id}/components.json<br>/components/{component_id}/price_points.json<br>/components_price_points.json<br>/customers.json<br>/customers/{id.json}<br>/customers/lookup.json<br>/customers/{customer_id}/subscriptions.json<br>/{resource_type}/metafields.json<br>/{resource_type}/{resource_id}/metadata.json<br>/{resource_type}/metadata.json<br>/events.json<br>/subscriptions/{subscription_id}/events.json<br>/events/count.json<br>/components/{component_id}/price_points/{price_point_id}/segments.json<br>/stats.json<br>/mrr.json<br>/mrr_movements.json<br>/subscriptions_mrr.json<br>/invoices.json<br>/invoices.json<br>/invoices/{uid.json}<br>/invoices/{invoice_id.json}<br>/invoices/events.json<br>/credit_notes.json<br>/credit_notes/{uid.json}<br>/invoices/{invoice_uid}/segments.json<br>/offers.json<br>/offers/{offer_id.json}<br>/payment_profiles.json<br>/payment_profiles/{payment_profile_id.json}<br>/one_time_tokens/{chargify_token.json}<br>/product_families/{product_family_id}/products.json<br>/product_families.json<br>/product_families/{id.json}<br>/products/{product_id.json}<br>/products/handle/{api_handle.json}<br>/products.json<br>/products/{product_id}/price_points.json<br>/products/{product_id}/price_points/{price_point_id.json}<br>/products_price_points.json<br>/subscription_groups/{subscription_group_uid}/proforma_invoices.json<br>/proforma_invoices/{proforma_invoice_uid.json}<br>/subscriptions/{subscription_id}/proforma_invoices.json<br>/reason_codes.json<br>/reason_codes/{reason_code_id.json}<br>/referral_codes/validate.json<br>/sellers/{seller_id}/sales_commission_settings.json<br>/sellers/{seller_id}/sales_reps.json<br>/sellers/{seller_id}/sales_reps/{sales_rep_id.json}<br>/site.json<br>/chargify_js_keys.json<br>/subscriptions.json<br>/subscriptions/{subscription_id.json}<br>/subscriptions/lookup.json<br>/subscriptions/{subscription_id}/components/{component_id.json}<br>/subscriptions/{subscription_id}/components.json<br>/subscriptions/{subscription_id}/components/{component_id}/allocations.json<br>/subscriptions/{subscription_id}/components/{component_id}/usages.json<br>/subscriptions_components.json<br>/subscription_groups.json<br>/subscription_groups/{uid.json}<br>/subscription_groups/lookup.json<br>/subscriptions/{subscription_id}/account_balances.json<br>/subscriptions/{subscription_id}/prepayments.json<br>/subscriptions/{subscription_id}/notes.json<br>/subscriptions/{subscription_id}/notes/{note_id.json}<br>/webhooks.json<br>/endpoints.json<br>/statements/{statement_id.json}<br>/statements.json<br>/subscriptions/{subscription_id}/statements.json<br>/statements/ids.json<br>/subscriptions/{subscription_id}/statements/ids.json<br>/statements/count.json<br>/transactions/{transaction_id.json}<br>/transactions.json<br>/subscriptions/{subscription_id}/transactions.json<br>/transactions/count.json<br>/api_exports/proforma_invoices.json<br>/api_exports/invoices.json<br>/api_exports/subscriptions.json<br>/subscriptions/{subscription_id}/advance_invoice/issue.json<br>/subscriptions/{subscription_id}/advance_invoice/void.json<br>/portal/customers/{customer_id}/enable.json<br>/portal/customers/{customer_id}/invitations/invite.json<br>/product_families/{product_family_id}/coupons.json<br>/coupons/{coupon_id}/codes.json<br>/product_families/{product_family_id}/{plural_kind.json}<br>/components/{component_id}/price_points.json<br>/components/{component_id}/price_points/bulk.json<br>/price_points/{price_point_id}/currency_prices.json<br>/customers.json<br>/{resource_type}/metafields.json<br>/{resource_type}/{resource_id}/metadata.json<br>/components/{component_id}/price_points/{price_point_id}/segments.json<br>/components/{component_id}/price_points/{price_point_id}/segments/bulk.json<br>/invoices/{uid}/refunds.json<br>/invoices/{uid}/payments.json<br>/invoices/payments.json<br>/invoices/{invoice_id}/payments.json<br>/subscriptions/{subscription_id}/payments.json<br>/subscriptions/{subscription_id}/payments.json<br>/invoices/{uid}/reopen.json<br>/invoices/{uid}/void.json<br>/subscriptions/{subscription_id}/invoices.json<br>/invoices/{uid}/deliveries.json<br>/invoices/{uid}/customer_information/preview.json<br>/invoices/{uid}/issue.json<br>/offers.json<br>/payment_profiles.json<br>/subscriptions/{id}/payment_profiles/{payment_profile_id}/change_payment_profile.json<br>/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json<br>/subscriptions/{subscription_id}/request_payment_profiles_update.json<br>/product_families.json<br>/product_families/{product_family_id}/products.json<br>/products/{product_id}/price_points.json<br>/products/{product_id}/price_points/bulk.json<br>/product_price_points/{product_price_point_id}/currency_prices.json<br>/subscription_groups/{subscription_group_uid}/proforma_invoices.json<br>/subscriptions/{subscription_id}/proforma_invoices.json<br>/subscriptions/proforma_invoices.json<br>/proforma_invoices/{proforma_invoice_uid}/void.json<br>/subscriptions/{subscription_id}/proforma_invoices/preview.json<br>/subscriptions/proforma_invoices/preview.json<br>/reason_codes.json<br>/sites/clear_data.json<br>/subscriptions.json<br>/subscriptions/{subscription_id}/purge.json<br>/subscriptions/{subscription_id}/prepaid_configurations.json<br>/subscriptions/preview.json<br>/subscriptions/{subscription_id}/add_coupon.json<br>/subscriptions/{subscription_id}/price_points.json<br>/subscriptions/{subscription_id}/price_points/reset.json<br>/subscriptions/{subscription_id}/components/{component_id}/allocations.json<br>/subscriptions/{subscription_id}/allocations.json<br>/subscriptions/{subscription_id}/allocations/preview.json<br>/subscriptions/{subscription_id}/components/{component_id}/usages.json<br>/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json<br>/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json<br>/{subdomain}/events/{api_handle.json}<br>/{subdomain}/events/{api_handle}/bulk.json<br>/subscription_groups/signup.json<br>/subscription_groups.json<br>/subscriptions/{subscription_id}/group.json<br>/subscription_groups/{uid}/prepayments.json<br>/subscription_groups/{uid}/service_credits.json<br>/subscription_groups/{uid}/service_credit_deductions.json<br>/subscription_groups/{uid}/cancel.json<br>/subscription_groups/{uid}/delayed_cancel.json<br>/subscription_groups/{subscription_group_uid}/reactivate.json<br>/subscriptions/{subscription_id}/prepayments.json<br>/subscriptions/{subscription_id}/service_credits.json<br>/subscriptions/{subscription_id}/service_credit_deductions.json<br>/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json<br>/subscriptions/{subscription_id}/notes.json<br>/subscriptions/{subscription_id}/migrations.json<br>/subscriptions/{subscription_id}/migrations/preview.json<br>/subscriptions/{subscription_id}/resume.json<br>/subscriptions/{subscription_id}/hold.json<br>/subscriptions/{subscription_id}/delayed_cancel.json<br>/subscriptions/{subscription_id}/cancel_dunning.json<br>/subscriptions/{subscription_id}/renewals/preview.json<br>/webhooks/replay.json<br>/endpoints.json<br>/invoices/{invoice_id}/charges.json<br>/invoices/{invoice_id}/adjustments.json<br>/subscriptions/{subscription_id}/adjustments.json<br>/subscriptions/{subscription_id}/charges.json<br>/subscriptions/{subscription_id}/refunds.json<br>/portal/customers/{customer_id}/invitations/revoke.json<br>/product_families/{product_family_id}/coupons/{coupon_id.json}<br>/coupons/{coupon_id}/codes/{subcode.json}<br>/product_families/{product_family_id}/components/{component_id.json}<br>/components/{component_id}/price_points/{price_point_id.json}<br>/customers/{id.json}<br>/{resource_type}/metafields.json<br>/{resource_type}/{resource_id}/metadata.json<br>/components/{component_id}/price_points/{price_point_id}/segments/{id.json}<br>/payment_profiles/{payment_profile_id.json}<br>/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id.json}<br>/subscription_groups/{subscription_group_uid}/payment_profiles/{payment_profile_id.json}<br>/products/{product_id.json}<br>/products/{product_id}/price_points/{price_point_id.json}<br>/reason_codes/{reason_code_id.json}<br>/subscriptions/{subscription_id}/remove_coupon.json<br>/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id.json}<br>/subscription_groups/{uid.json}<br>/subscriptions/{subscription_id}/group.json<br>/subscription_groups/{uid}/delayed_cancel.json<br>/subscriptions/{subscription_id}/notes.json<br>/subscriptions/{subscription_id.json}<br>/subscriptions/{subscription_id}/delayed_cancel.json<br>/product_families/{product_family_id}/coupons/{coupon_id.json}<br>/coupon/{coupon_id}/currency_prices.json<br>/coupons/{coupon_id}/codes.json<br>/components/{component_id}/price_points/{price_point_id}/default.json<br>/components/{component_id}/price_points/{price_point_id.json}<br>/components/{component_id}/price_points/{price_point_id}/unarchive.json<br>/price_points/{price_point_id}/currency_prices.json<br>/customers/{id.json}<br>/{resource_type}/metafields.json<br>/{resource_type}/{resource_id}/metadata.json<br>/components/{component_id}/price_points/{price_point_id}/segments/{id.json}<br>/components/{component_id}/price_points/{price_point_id}/segments/bulk.json<br>/invoices/{uid}/customer_information.json<br>/offers/{offer_id}/archive.json<br>/offers/{offer_id}/unarchive.json<br>/payment_profiles/{payment_profile_id.json}<br>/bank_accounts/{bank_account_id}/verification.json<br>/products/{product_id.json}<br>/products/{product_id}/price_points/{price_point_id.json}<br>/product_price_points/{product_price_point_id}/currency_prices.json<br>/reason_codes/{reason_code_id.json}<br>/subscriptions/{subscription_id.json}<br>/subscriptions/{subscription_id}/override.json<br>/subscriptions/{subscription_id}/activate.json<br>/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id.json}<br>/subscription_groups/{uid.json}<br>/subscriptions/{subscription_id}/notes/{note_id.json}<br>/subscriptions/{subscription_id}/retry.json<br>/subscriptions/{subscription_id}/hold.json<br>/subscriptions/{subscription_id}/reactivate.json<br>/webhooks/settings.json<br>/endpoints/{endpoint_id.json}<br>/subscriptions/{subscription_id}/reset_balance.json<br>/products/{product_id}/price_points/{price_point_id}/unarchive.json<br>/products/{product_id}/price_points/{price_point_id}/default.json<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*