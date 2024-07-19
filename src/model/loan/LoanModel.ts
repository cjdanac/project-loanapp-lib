export class LoanModel {

    public payload?: {
        loanAmount?: number;
        interestPerMonth?: number;
        loanTerm?: number;
        monthlyPayment?:[]
        dateOfPayment?: string;
    };

    constructor(formModel?: LoanModel) {
        this.payload = formModel?.payload || {};
    }
}
