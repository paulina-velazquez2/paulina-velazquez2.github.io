var COLORIZE = function(v) {
    v = '<span style="color:' + v + '">' + v.toUpperCase() + '</span>';
    return v;
}

var data1 = [
    [ 'red', '=COLORIZE(A1)' ],
    [ 'green', '=COLORIZE(A2)' ],
    [ 'blue', '=COLORIZE(A3)' ],
];

jexcel(document.getElementById('spreadsheet1'), {
    data:data1,
    columns: [
        { type: 'text', width:'300' },
        { type: 'text', width:'200' },
    ]
});