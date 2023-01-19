function solve(input){ 
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
         console.log(values[0]);
         
      }
         
   }


solve(["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"])