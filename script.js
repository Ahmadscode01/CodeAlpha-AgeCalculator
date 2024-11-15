const ageForm = document.getElementById('ageForm');
const resultDiv = document.getElementById('result');

ageForm.addEventListener('submit', function (event) {
    event.preventDefault();  

     
    const day = parseInt(document.getElementById('dobDay').value);
    const month = parseInt(document.getElementById('dobMonth').value);
    const year = parseInt(document.getElementById('dobYear').value);

    if (!day || !month || !year) {
        resultDiv.textContent = "Please fill all fields correctly.";
        return;
    }

     
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;  
    const todayYear = today.getFullYear();

    
    let ageYears = todayYear - year;
    let ageMonths = todayMonth - month;
    let ageDays = todayDay - day;

    
    if (ageDays < 0) {
        ageDays += new Date(todayYear, todayMonth - 1, 0).getDate();  
        ageMonths--;
    }
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

 
    resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
