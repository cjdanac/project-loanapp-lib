import { Environment } from "../../configs";
import { LoanModel } from "../../model/loan/LoanModel";
import { apiInstance } from "../../services/apiInstance";

export async function loan({ payload }: LoanModel) {
    return await apiInstance
        .post(Environment.LOAN!, payload).then(async (res) => {
            return res.data;
        })
        .catch(async (error) => {
            console.log(error.request)
            return error;
        });
}