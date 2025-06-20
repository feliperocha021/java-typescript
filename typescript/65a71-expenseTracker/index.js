// type casting pode usar tanto o 'as' quanto o '<>'
const expType = document.getElementById('expense-type');
const expDesc = document.getElementById('desc');
const expAmt = document.getElementById('amount');
const addExpBtn = document.querySelector('.add-expense-btn');
const debitDiv = document.querySelector('.expense-debit-item-container');
const creditDiv = document.querySelector('.expense-credit-item-container');
const totalAmtDiv = document.querySelector('.total-expense-amount');
let expenseItems = [];
let totalAmount = 0;
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
                    <button class="delete-expense" onclick="deleteExpense(${expItem.id})">X</button>
                </div>
            </div>
        `;
        containerDiv.insertAdjacentHTML('beforeend', template);
    }
}
function calculateTotal() {
    return expenseItems.reduce((total, exp) => {
        return exp.type === 'credit' ? total + exp.amount : total - exp.amount;
    }, 0);
}
function showTotal() {
    totalAmtDiv.textContent = 'Aval. Balance: ' + totalAmount.toString();
}
addExpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let type = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, Number(expAmt.value));
    expenseItems.push(exp);
    displayExpenseItems();
    totalAmount = calculateTotal();
    showTotal();
});
function deleteExpense(id) {
    const exp = expenseItems.find((el) => {
        return el.id === id;
    });
    let index = expenseItems.indexOf(exp);
    expenseItems.splice(index, 1);
    displayExpenseItems();
    updateBalance(exp);
}
function updateBalance(expense) {
    totalAmount = expense.type === 'credit' ? totalAmount - expense.amount : totalAmount + expense.amount;
    showTotal();
}
window.deleteExpense = deleteExpense;
export default undefined;
