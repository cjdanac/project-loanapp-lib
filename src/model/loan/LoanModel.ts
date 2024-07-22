export class LoanModel {

    public payload?: {
        loanAmount?: number;
        interestPerMonth?: number;
        loanTerm?: number;
        monthlyPayment?:string
        paymentDates?: string[];
    };

    constructor(formModel?: LoanModel) {
        this.payload = formModel?.payload || {};
    }
}
