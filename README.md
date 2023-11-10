<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Chargify package</td>
        <td>November 10, 2023</td>
        <td>Detailed description of the API of the Chargify package.</td>
    </tr>
    </tbody>
</table>

# Overview

## API Overview
The Chargify Package allows you to interact programmatically with our system from your own application.
Using the Javascript API, you can interact with the http service.

The Chargify Package aims to adhere to Package design principles. 
You interact with the resources exposed through the Chargify API by accessing collection and element URIs using HTTP verbs 
(GET, POST, PUT, and DELETE). Chargify accepts and returns data in JSON format.

## Authentication

To use this package, you will require the following information provided by Chargify

- [ApiKey](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405281550477#api-keys-0-0)

- [Subdomain](https://developers.chargify.com/docs/developer-docs/158e3be5cbdc8-sites-subdomains)

- [Shared Keys](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405030922765#passwords-shared-keys-0-0)

## Chargify's documentation.

- [Chargify REST API](https://developers.chargify.com/docs/api-docs)

# Javascript API

The Javascript API of the chargify package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT`,`PATCH` requests to the [chargify API](https://developers.chargify.com/docs/api-docs/7b6ea12f39549-maxio-advanced-billing-formerly-chargify-api) like this:
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

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

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
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
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

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
