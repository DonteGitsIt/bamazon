var mysql = require("mysql");
var inquire = require("inquirer");

var productPurchased;
var newStock;
var total= 0;

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "karma",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    purchaseItem()
});

function purchaseItem() {
    inquire.prompt([
        {
            name: "productId",
            type: "input",
            message: "Enter the ID of the item you wish to purchase: ",
            validate: function (value) {
                if (isNaN(value) === false && value > 0 && value <= 10) {
                    return true
                } else {
                    console.log("\nEither you entered something that wasn't a number or we couldn't find that ID")
                    return false
                }

            }
        }
    ]).then(function (answer) {

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw (err)

            for (i = 0; i < res.length; i++) {

                if (res[i].id == answer.productId) {
                    productPurchased = answer.productId
                    console.log("You're buying " + res[i].product_name + "\n")
                    console.log("They are " + res[i].price + " dollars each")
                    howMany()
                }
            }
        })
    })
}

function howMany() {
    inquire.prompt([
        {
            message: "How many would you like to purchase?",
            type: "input",
            name: "amount",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true
                }
                return true
            }
        }
    ]).then(function (answer) {
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw (err)
            for (i = 0; i < res.length; i++) {
                if (res[i].id == productPurchased) {

                    var stock = parseInt(res[i].stock_quantity),
                        amount = parseInt(answer.amount);
                        total = (res[i].price * amount) + total;

                        total = Number(Math.round(total+'e2')+'e-2')



                    if (stock < amount) {
                        console.log("Insufficient quantity!")
                        howMany()
                    } else {

                        newStock = stock - amount
                        console.log("Your total is: " + total)
                        
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: newStock
                                },
                                {
                                    id: productPurchased
                                }
                            ],
                            function (error) {
                                if (error) throw (error);

                                console.log("updated stock")
                                runAgain()

                            })
                    }

                }
            }
        })
    })
}

function runAgain (){
    inquire.prompt([
        {
            message: "Would you like to add more to your cart?",
            type: "confirm",
            name: "buyMore"
        }
    ]).then(function(answer){
        if(answer.buyMore){
            purchaseItem()
        }else{
            return false
        }
        
    })
}