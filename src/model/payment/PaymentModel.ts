export class PaymentModel {

    public payload?: {
        items?:
        {
            productId?: number,
            sku?: string,
            productName?: string,
            price?: number,
            quantity?: number,
            total?: number
        }[],
        customer?: {
            customerId?: number,
            customerName?: string
        },
        store?: {
            branchId?: number,
            branchName?: string,
            userId?: number,
            userName?: string,
            storeId?: number,
            storeName?: string
        },
        billAmount?: number,
        remarks?: string,
        paidAmount?: number,
        balanceAmount?: number,
        paymentMethod?:  string
    };

    constructor(formModel?: PaymentModel) {
        this.payload = formModel?.payload || {};
    }

    addItem?(item: {
        productId?: number,
        sku?: string,
        productName?: string,
        price?: number,
        quantity?: number,
        total?: number
    }) {

        if (!this.payload?.items) {
            this.payload!.items = [];
        }

        this.payload!.items.push(item);
    }
}