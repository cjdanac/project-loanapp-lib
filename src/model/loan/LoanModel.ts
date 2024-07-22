export class LoanModel {

    public payload?: {
        loanAmount?: number;
        interestPerMonth?: number;
        loanTerm?: number;
        monthlyPayment?: number;
        // paymentDates?: number;
    };

    constructor(formModel?: LoanModel) {
        this.payload = formModel?.payload || {};
    }
}
