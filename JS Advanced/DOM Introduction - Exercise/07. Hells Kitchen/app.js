function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelectorAll('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let inputElement of input) {
         let restaurantInfo = inputElement.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo.shift().split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');
            
            if(!output.hasOwnProperty(restaurantName)){
               output[restaurantName] = {}
            } 
            if(output.hasOwnProperty(restaurantName)){
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;

         if(avgSalary > currentAvgSalary){
            currentAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let result = Object.entries(output[bestName])
          .sort((a, b) => b[1] - a[1]);

      let print ='';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p')
      .textContent = `Name: ${bestName} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
         
   }
}