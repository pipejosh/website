let hamburgers = [
    [8.75, 0], 
    [14.25, 0],
    [7.85, 0], 
    [13.25, 0],
    [7.50, 0], 
    [12.75, 0],
    [12.75, 0],
    [8.25, 0], 
    [10.75, 0],
    [9.25, 0]
];

let desserts = [
    [7.50, 0],
    [5.25, 0],
    [4.25, 0],
    [7.50, 0],
    [7.25, 0]
]

function increaseBurger(id)
{
    var labelId = 'qtnInput' + id;

    hamburgers[id][1] += 1;

    console.log(hamburgers[id][1]);

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
    console.log(hamburgers[id][1]);
    currentLabel.value = hamburgers[id][1];
}



function increaseDessert(id)
{
    var labelId = 'qtnInputDessert' + id;

    desserts[id][1] += 1;

    console.log(desserts[id][1]);

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
    console.log(desserts[id][1]);
    currentLabel.value = desserts[id][1];
}

function submit()
{
    var subtotal = 0;

    for (let i = 0; i < hamburgers.length; i++)
    {
        subtotal += (hamburgers[i][0] * hamburgers[i][1]);

    }

    for (let j = 0; j < desserts.length; j++)
    {
        subtotal += (desserts[j][0] * desserts[j][1]);
    }

    var total = subtotal * 1.12;

    console.log(total);
}



