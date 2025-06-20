// type casting pode usar tanto o 'as' quanto o '<>'
const expType = document.getElementById('expense-type')! as HTMLSelectElement;
const expDesc = <HTMLInputElement>document.getElementById('desc')!;
const expAmt = document.getElementById('amount')! as HTMLInputElement;
const addExpBtn = document.querySelector('.add-expense-btn')! as HTMLButtonElement;

const debitDiv = document.querySelector('.expense-debit-item-container')! as HTMLDivElement;
const creditDiv = document.querySelector('.expense-credit-item-container')! as HTMLDivElement;
const totalAmtDiv = document.querySelector('.total-expense-amount')! as HTMLDivElement;
let expenseItems: Expense[] = [];

let totalAmount = 0;

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
                    <button class="delete-expense" onclick="deleteExpense(${expItem.id})">X</button>
                </div>
            </div>
        `;
        containerDiv.insertAdjacentHTML('beforeend', template);
    }
}

function calculateTotal() {
    return expenseItems.reduce((total, exp) => {
        return exp.type === 'credit' ?  total + exp.amount : total - exp.amount;
    }, 0)
}

function showTotal() {
    totalAmtDiv.textContent = 'Aval. Balance: ' + totalAmount.toString();
}

addExpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let type: 'credit' | 'debit' = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmt.value));
    expenseItems.push(exp);
    displayExpenseItems();

    totalAmount = calculateTotal();
    showTotal();
})

function deleteExpense(id: number) {
    const exp = expenseItems.find((el) => {
        return el.id === id;
    }) as Expense
    let index: number = expenseItems.indexOf(exp)
    expenseItems.splice(index, 1);
    displayExpenseItems();
    updateBalance(exp);
}

function updateBalance(expense: Expense) {
    totalAmount = expense.type === 'credit' ? totalAmount - expense.amount : totalAmount + expense.amount;
    showTotal();
}

(window as any).deleteExpense = deleteExpense;
export default undefined