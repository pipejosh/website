// Create an array with price, quantity and the name
let hamburgers = [
    [8.75, 0, 'Super Boy'], 
    [14.25, 0, 'Double Super Boy'],
    [7.85, 0, 'Cheeseburger'], 
    [13.25, 0, 'Double Cheeseburger'],
    [7.50, 0, 'Hamburger'], 
    [12.75, 0, 'Double Hamburger'],
    [12.75, 0, 'Chili Burger'],
    [8.25, 0, 'Veggie Super Boy Burger'], 
    [10.75, 0, 'Greek Burger'],
    [9.25, 0, 'Chicken Burger']
];

// Create an array with price, quantity and the name
let desserts = [
    [7.50, 0, 'Milkshakes'],
    [5.25, 0, 'Sundaes'],
    [4.25, 0, 'Ice Cream Cone'],
    [7.50, 0, 'Twister'],
    [7.25, 0, 'Banana split']
]

// function increases 
function increaseBurger(id)
{
    // create the labelId, and increase the quantity in the array
    var labelId = 'qtnInput' + id;

    hamburgers[id][1] += 1;

    var currentLabel = document.getElementById(labelId);

    currentLabel.value = hamburgers[id][1];
}

// function decreas
function decreaseBurger(id)
{
    // create the labelId, and decrease the quantity in the array, when it is more than 0
    var labelId = 'qtnInput' + id;
    var currentLabel = document.getElementById(labelId);
    
    if (hamburgers[id][1] <= 0)
    {
        return
    }
    
    
    hamburgers[id][1] -= 1;
    currentLabel.value = hamburgers[id][1];
}

// function incrase for the dessert
function increaseDessert(id)
{
    // create the labelId, and increase the quantity in the array
    var labelId = 'qtnInputDessert' + id;

    desserts[id][1] += 1;


    var currentLabel = document.getElementById(labelId);

    currentLabel.value = desserts[id][1];
}

// function decrease for the dessert
function decreaseDessert(id)
{
    // create the labelId, and decrease the quantity in the array, when it is more than 0
    var labelId = 'qtnInputDessert' + id;
    var currentLabel = document.getElementById(labelId);

    if (desserts[id][1] <= 0)
    {
        return
    }

    desserts[id][1] -= 1;
    currentLabel.value = desserts[id][1];
}

// function that creates the spaces
function padExactly(str, width, padLeft = false) 
{
    // creates an fixed amount of spaces 
    str = str.toString();
    if (str.length > width) 
        {
        return str.slice(0, width);
    }

    if (padLeft) 
        {
        return str.padStart(width, ' ');
    } else 

    {
        return str.padEnd(width, ' ');
    }
}

// for the submit function
function submit() {
    
    // creatse a subtotal variable
    var subtotal = 0;
    var output = '<pre>'; 
    // add the header row for the bill
    output += padExactly('Item', 30) + padExactly('Qty', 5, true) + padExactly('Price', 10, true) + '\n';

    // add a separator line
    output += '-------------------------------------------------------------------\n';
    // for the burgers array
    for (let i = 0; i < hamburgers.length; i++) 
    {
        // counts the amount 
        var price = hamburgers[i][0] * hamburgers[i][1];
        subtotal += price;

        // if the quantity is not zero, add the item to the bill
        if (hamburgers[i][1] != 0) 
        {
            output += padExactly(hamburgers[i][2], 30) + padExactly(hamburgers[i][1], 5, true) + '  $' + padExactly(price.toFixed(2), 8, true) + '\n';
        }
    }

    // for the desserts array
    for (let j = 0; j < desserts.length; j++) 
    {
        // counts the amount
        var price = desserts[j][0] * desserts[j][1];
        subtotal += price;

        // if the quantity is not zero, add the item to the bill
        if (desserts[j][1] != 0) 
        {
            output += padExactly(desserts[j][2], 30) + padExactly(desserts[j][1], 5, true) + '  $' + padExactly(price.toFixed(2), 8, true) + '\n';
        }
    }

    // calculate tax and total
    var tax = subtotal * 0.12;
    var total = subtotal + tax;

    // add a separator line
    output += '-------------------------------------------------------------------\n';
    // add subtotal, tax, and total to the bill
    output += padExactly('Subtotal:', 30) + padExactly('', 5) + '  $' + padExactly(subtotal.toFixed(2), 8, true) + '\n';
    output += padExactly('Tax (12%):', 30) + padExactly('', 5) + '  $' + padExactly(tax.toFixed(2), 8, true) + '\n';
    output += padExactly('Total:', 30) + padExactly('', 5) + '  $' + padExactly(total.toFixed(2), 8, true) + '\n';
    output += '</pre>';

    // print the bill to the console
    console.log(output);

    // display the bill in the HTML element with id 'bill'
    document.getElementById('bill').innerHTML = output;

    // show the pay button
    document.getElementById('btnPay').style.display = 'inline-block';
}
