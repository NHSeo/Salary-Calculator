const form = document.querySelector('#employeeForm');
const tBody = document.querySelector('#employeeTable tbody');
const totalMonthlyCostSpan = document.querySelector('#totalMonthlyCost');

let totalMonthlyCost = 0;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstNameInput').value;
    const lastName = document.querySelector('#lastNameInput').value;
    const id = document.querySelector('#idInput').value;
    const title = document.querySelector('#titleInput').value;
    const annualSalary = parseInt(document.querySelector('#annualSalaryInput').value);

    const monthlySalary = annualSalary / 12;

    totalMonthlyCost += monthlySalary;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button>Delete</button></td>
    `;
    tBody.appendChild(newRow);
    totalMonthlyCostSpan.textContent = totalMonthlyCost.toFixed(2);
    if (totalMonthlyCost > 20000) {
        document.querySelector('footer').classList.add('over-budget');
    }
    form.reset();
});

tBody.addEventListener('click', function(event) {
    if (event.target.textContent === 'Delete') {
        const salary = parseInt(event.target.parentElement.previousElementSibling.textContent);
        const monthlySalary = salary / 12;
        totalMonthlyCost -= monthlySalary;
        totalMonthlyCostSpan.textContent = totalMonthlyCost.toFixed(2);

        if (totalMonthlyCost <= 20000) {
            document.querySelector('footer').classList.remove('over-budget');
        }
        event.target.parentElement.parentElement.remove();
    }
});
