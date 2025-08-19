function calculatePercentage() {
   let obtained = document.getElementById("marksObtained").value;
   let total = document.getElementById("totalMarks").value;
   let result = "";
 
   if (obtained === "" || total === "" || total <= 0) {
     result = "⚠️ Please enter valid marks!";
   } else {
     obtained = parseFloat(obtained);
     total = parseFloat(total);
 
     let percentage = ((obtained / total) * 100).toFixed(2);
 
     result = "Percentage: " + percentage + "%";
 
     // Optional: Pass/Fail message
     if (percentage >= 40) {
       result += " ✅ Pass";
     } else {
       result += " ❌ Fail";
     }
   }
 
   document.getElementById("result").innerText = result;
 }
 