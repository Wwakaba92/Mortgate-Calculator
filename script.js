 function formatCurrency(num) {
      return `Ksh${num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }

    function calculate() {
      const amount = parseFloat(document.getElementById("amount").value);
      const term = parseFloat(document.getElementById("term").value);
      const rate = parseFloat(document.getElementById("rate").value) / 100;
      const type = document.querySelector("input[name='mortgageType']:checked").value;

      const months = term * 12;
      const monthlyRate = rate / 12;

      let monthlyPayment, totalPayment;

      if (type === "repayment") {
        if (rate === 0) {
          monthlyPayment = amount / months;
        } else {
          monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        }
        totalPayment = monthlyPayment * months;
      } else {
        monthlyPayment = amount * monthlyRate;
        totalPayment = monthlyPayment * months;
      }

      document.getElementById("monthlyRepayment").textContent = formatCurrency(monthlyPayment);
      document.getElementById("totalRepayment").textContent = formatCurrency(totalPayment);
    }

    window.onload = calculate;
