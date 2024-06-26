 // Function to calculate NSSF and display results
 function calculateNSSF() {
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const yearsOfWork = parseInt(document.getElementById('yearsOfWork').value);
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);

    // Validate input values
    if (isNaN(age) || isNaN(yearsOfWork) || isNaN(basicSalary) || age <= 0 || yearsOfWork < 0 || basicSalary <= 0) {
        alert('Please enter valid input values.');
        return;
    }

    // Constants
    const retirementAge = 55;
    const nssfRate = 0.15;

    // Calculate number of years to retirement
    const yearsToRetirement = retirementAge - age;
     // Calculate total NSSF accumulated
     const totalNSSF = yearsOfWork * 12 * (nssfRate * basicSalary);

     // Display results
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `
         <p>Years to Retirement: ${yearsToRetirement < 0 ? 0 : yearsToRetirement}</p>
         <p>Total NSSF Accumulated: UGX ${totalNSSF.toFixed(2)}</p>
     `;
 }