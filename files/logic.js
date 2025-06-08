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
    []
]



function increase(id)
{
    var labelId = 'qtnInput' + id;

    hamburgers[id][1] += 1;

    console.log(hamburgers[id][1]);

    var currentLabel = document.getElementById(labelId);

    currentLabel.value = hamburgers[id][1];
}

function decrease(id)
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
