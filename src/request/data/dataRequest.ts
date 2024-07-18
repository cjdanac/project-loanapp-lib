import { Environment } from "../../configs";
import { GetDataModel, SyncDataModel } from "../../model/data/DataModel";
import { PaymentModel } from "../../model/payment/PaymentModel";
import { apiInstance } from "../../services/apiInstance";

export async function getData({ parameter }: GetDataModel) {
    return await apiInstance
        .get(Environment.DATA!, {
            params: parameter
        }).then(async (res) => {
            return res.data;
        })
        .catch(async (error) => {
            console.log(error.request)
            return error;
        });
}

export async function syncData({ payload }: SyncDataModel) {
    return await apiInstance
        .post(Environment.DATA!, payload).then(async (res) => {
            return res.data;
        })
        .catch(async (error) => {
            console.log(error.request)
            return error;
        });
}
