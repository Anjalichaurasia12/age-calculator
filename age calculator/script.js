document.getElementById('ageForm').addEventListener('submit', function(event) {
 event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-based in JS
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() +1;- birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('Calculate Age').
    addEventListener("click,agecalculator");
    
});
