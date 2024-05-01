import inquirer from "inquirer";
//  initializing bank balance and pin code..
let myBalance = 0;
const pinCode = 1234;
// making a variable for Do-while-loop..
let isContinue = true;
// print welcome message..
let message = "Welcome to ATM";
console.log(message);
// Pin prompt:
let pin_ans = await inquirer.prompt([{
        name: "code",
        type: "number",
        message: "enter your 4-digit pincode",
    }]);
if (pin_ans.code === pinCode) {
    do {
        let answer = await inquirer.prompt([{
                name: "list",
                type: "list",
                message: "Select an option ",
                choices: ["Deposite", "Withdrwal", "Fast Cash", "Check Balance"],
            }]);
        if (answer.list === "Deposite") {
            let ans = await inquirer.prompt([{
                    name: "Deposite_amount",
                    type: "number",
                    message: "Enter your amount ",
                }]);
            if (ans.Deposite_amount > 0) {
                myBalance = myBalance + ans.Deposite_amount,
                    console.log(myBalance);
            }
        }
        // ----------------------- Withdrwal ------------------------
        else if (answer.list === "Withdrwal") {
            let ans = await inquirer.prompt([{
                    name: "Withdrwal_amount",
                    type: "number",
                    message: "Please enter your amount ",
                }]);
            if (ans.Withdrwal_amount <= myBalance) {
                myBalance = myBalance - ans.Withdrwal_amount,
                    console.log(myBalance);
            }
            else {
                console.log("Not enough money!");
            }
            // ---------------------- Fast Cash ---------------------------
        }
        else if (answer.list === "Fast Cash") {
            let ans = await inquirer.prompt([{
                    name: "fast_cash",
                    type: "list",
                    message: "Select an option",
                    choices: ["500", "1000", "2000", "5000"],
                }]);
            if (ans.fast_cash <= myBalance) {
                if (ans.fast_cash === "500") {
                    myBalance = myBalance - ans.fast_cash,
                        console.log(myBalance);
                }
                else if (ans.fast_cash === "1000") {
                    myBalance = myBalance - ans.fast_cash,
                        console.log(myBalance);
                }
                else if (ans.fast_cash === "2000") {
                    myBalance = myBalance - ans.fast_cash,
                        console.log(myBalance);
                }
                else if (ans.fast_cash === "5000") {
                    myBalance = myBalance - ans.fast_cash,
                        console.log(myBalance);
                }
            }
            // --------------------------------- check Balance -------------------------------
        }
        else if (answer.list === "Check Balance") {
            console.log(`Your current balance is: ${myBalance}`);
        }
        // -------------------------------- Do while condition -------------------------------------
        let while_ans = await inquirer.prompt([{
                name: "condition",
                type: "confirm",
                message: "Do you want to continue?",
                default: true,
            }]);
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid pincode!");
}
