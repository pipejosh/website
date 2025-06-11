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

let desserts = [
    [7.50, 0, 'Milkshakes'],
    [5.25, 0, 'Sundaes'],
    [4.25, 0, 'Ice Cream Cone'],
    [7.50, 0, 'Twister'],
    [7.25, 0, 'Banana split']
]

function increaseBurger(id)
{
    var labelId = 'qtnInput' + id;

    hamburgers[id][1] += 1;

    var currentLabel = document.getElementById(labelId);

    currentLabel.value = hamburgers[id][1];
}

function decreaseBurger(id)
{
    var labelId = 'qtnInput' + id;
    var currentLabel = document.getElementById(labelId);
    
    if (hamburgers[id][1] <= 0)
    {
        return
    }
    
    
    hamburgers[id][1] -= 1;
    currentLabel.value = hamburgers[id][1];
}

function increaseDessert(id)
{
    var labelId = 'qtnInputDessert' + id;

    desserts[id][1] += 1;


    var currentLabel = document.getElementById(labelId);

    currentLabel.value = desserts[id][1];
}

function decreaseDessert(id)
{
    var labelId = 'qtnInputDessert' + id;
    var currentLabel = document.getElementById(labelId);

    if (desserts[id][1] <= 0)
    {
        return
    }

    desserts[id][1] -= 1;
    currentLabel.value = desserts[id][1];
}

function padExactly(str, width, padLeft = false) {
    str = str.toString();
    if (str.length > width) {
        return str.slice(0, width);
    }
    if (padLeft) {
        return str.padStart(width, ' ');
    } else {
        return str.padEnd(width, ' ');
    }
}

function submit() {
    var subtotal = 0;

    var output = '<pre>'; 
    output += padExactly('Item', 30) + padExactly('Qty', 5, true) + padExactly('Price', 10, true) + '\n';
    output += '-------------------------------------------------------\n';

    for (let i = 0; i < hamburgers.length; i++) 
    {
        var price = hamburgers[i][0] * hamburgers[i][1];
        subtotal += price;

        if (hamburgers[i][1] != 0) 
        {
            output += padExactly(hamburgers[i][2], 30) + padExactly(hamburgers[i][1], 5, true) + '  $' + padExactly(price.toFixed(2), 8, true) + '\n';
        }
    }

    for (let j = 0; j < desserts.length; j++) 
    {
        var price = desserts[j][0] * desserts[j][1];
        subtotal += price;

        if (desserts[j][1] != 0) 
        {
            output += padExactly(desserts[j][2], 30) + padExactly(desserts[j][1], 5, true) + '  $' + padExactly(price.toFixed(2), 8, true) + '\n';
        }
    }

    var tax = subtotal * 0.12;
    var total = subtotal + tax;

    output += '-------------------------------------------------------\n';
    output += padExactly('Subtotal:', 30) + padExactly('', 5) + '  $' + padExactly(subtotal.toFixed(2), 8, true) + '\n';
    output += padExactly('Tax (12%):', 30) + padExactly('', 5) + '  $' + padExactly(tax.toFixed(2), 8, true) + '\n';
    output += padExactly('Total:', 30) + padExactly('', 5) + '  $' + padExactly(total.toFixed(2), 8, true) + '\n';
    output += '</pre>';

    console.log(output);

    document.getElementById('bill').innerHTML = output;

    document.getElementById('btnPay').style.display = 'inline-block';
}
