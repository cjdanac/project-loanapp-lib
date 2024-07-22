export class LoanModel {

    public payload?: {
        loanAmount?: number;
        interestPerMonth?: number;
        loanTerm?: number;
        monthlyPayment?: number;
        paymentDates?: string[];
    };

    constructor(formModel?: LoanModel) {
        this.payload = formModel?.payload || {};
    }
}
