// 69
// type casting pode usar tanto o 'as' quanto o '<>'
const expType = document.getElementById('expense-type');
const expDesc = document.getElementById('desc');
const expAmt = document.getElementById('amount');
const addExpBtn = document.querySelector('.add-expense-btn');
const debitDiv = document.querySelector('.expense-debit-item-container');
const creditDiv = document.querySelector('.expense-credit-item-container');
let expenseItems = [];
class Expense {
    constructor(type, desc, amount) {
        this.id = 0;
        this.type = 'debit';
        this.description = '';
        this.amount = 0;
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
function displayExpenseItems() {
    debitDiv.innerHTML = '';
    creditDiv.innerHTML = '';
    for (let i = 0; i < expenseItems.length; i++) {
        let expItem = expenseItems[i];
        let containerDiv = expItem.type === 'credit' ? creditDiv : debitDiv;
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
    let type = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmt.value));
    expenseItems.push(exp);
    displayExpenseItems();
});
export default undefined;
