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

function submit()
{
    var subtotal = 0;

    var output = '';

    for (let i = 0; i < hamburgers.length; i++)
    {
        var hamburger = hamburgers[i][0] * hamburgers[i][1];
        subtotal += (hamburgers[i][0] * hamburgers[i][1]);

        if (hamburgers[i][1] != 0)
        {
            output += hamburgers[i][2] + ' ' + hamburgers[i][1] + '                                   ' + '\$' + hamburger + '\n';
        }
    }

    for (let j = 0; j < desserts.length; j++)
    {

        var desert = desserts[j][0] * desserts[j][1];

        subtotal += (desserts[j][0] * desserts[j][1]);
        
        if (desserts[j][1] != 0)
        {

            output += desserts[j][2] + ' ' + desserts[j][1] + '                                   ' + '\$' + desert + '\n';
        }
    }

    var total = subtotal * 1.12;

    document.getElementById('total').innerHTML = 'Total price: ' + total.toFixed(2) + '$';
    document.getElementById('subtotal').innerHTML = 'Subtotal price: ' + subtotal.toFixed(2) + '$';
    document.getElementById('bill').innerHTML = output ;

    console.log(total);
    console.log(output)
}



