import { Environment } from "../../configs";
import { PaymentModel } from "../../model/payment/PaymentModel";
import { apiInstance } from "../../services/apiInstance";

export async function payment({ payload }: PaymentModel) {
    return await apiInstance
        .post(Environment.LOAN!, payload).then(async (res) => {
            return res.data;
        })
        .catch(async (error) => {
            console.log(error.request)
            return error;
        });
}