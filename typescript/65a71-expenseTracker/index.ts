// 69
// type casting pode usar tanto o 'as' quanto o '<>'
const expType = document.getElementById('expense-type')! as HTMLSelectElement;
const expDesc = <HTMLInputElement>document.getElementById('desc')!;
const expAmt = document.getElementById('amount')! as HTMLInputElement;
const addExpBtn = document.querySelector('.add-expense-btn')! as HTMLButtonElement;

const debitDiv = document.querySelector('.expense-debit-item-container')! as HTMLDivElement;
const creditDiv = document.querySelector('.expense-credit-item-container')! as HTMLDivElement;
let expenseItems: Expense[] = [];

class Expense {
    private static currentId: number = 0
    public readonly id: number = 0;
    public type: 'credit' | 'debit' = 'debit';
    public description: string = '';
    public amount: number = 0;

    constructor(type: 'credit' | 'debit', desc: string, amount: number) {
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}

function displayExpenseItems() {
    debitDiv.innerHTML = '';
    creditDiv.innerHTML = '';
    
    for(let i = 0; i < expenseItems.length; i++) {
        let expItem = expenseItems[i];
        let containerDiv =  expItem.type === 'credit' ? creditDiv : debitDiv;

        let cssClass = expItem.type === 'credit' ? 'credit-item' : 'debit-item';
        let template = `
            <div class="${cssClass}">
                <div class="exp-desc">${expItem.description}</div>
                <div class="exp-amt">${expItem.amount}</div>
                <div class="exp-delete">
                    <button class="delete-expense">X</button>
                </div>
            </div>
        `;
        containerDiv.insertAdjacentHTML('beforeend', template);
    }
}

addExpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let type: 'credit' | 'debit' = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmt.value));
    expenseItems.push(exp);
    displayExpenseItems();
})

export default undefined