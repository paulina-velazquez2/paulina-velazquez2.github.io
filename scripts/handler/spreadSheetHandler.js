var data = [
    [ 'Hour 1', , , , ],
    [ 'Hour 2', , , , ],
    [ 'Hour 3', , , , ],
    [ 'Hour 4', , , , ],
    [ 'Lunch', 'Lunch', 'Lunch', 'Lunch', ],
    [ 'Hour 5', , , , ],
    [ 'Hour 6', , , , ],
    [ 'Hour 7', , , , ],
    [ 'Hour 8', , , , ],
    [ 'Hour 9', , , , ],
    [ 'Hour 10', , , , ],
    [ '', , , , ],
    [ 'Daily Break Down', '=SUM(B1:B4,B6:B11)', '=SUM(C1:C4,C6:C11)', '=SUM(D1:D4,D6:D11)' ],
    [ 'Total %',  '=ROUND((B13*0.007)*100, 0)+"%"',  '=ROUND((C13*0.011)*100, 0)+"%"', '=ROUND((D13*0.009)*100, 0)+"%"'],
    [ '', , , , ],
    [ 'Total', '=ROUND(((B13*0.007)*100)+((C13*0.011)*100)+((D13*0.009)*100), 0)+"%"', ],

];

jexcel(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: "text", title: 'Per Hour', width:'300' },
        { type: 'numeric', title:'Chats', width:'80' },
        { type: 'text', title:'Calls', width:'80' },
        { type: 'text', title:'Emails', width:'80' },
    ],
    updateTable:function(instance, cell, col, row, val, label, cellName) {
        if (cell.innerHTML == 'Total') {
            cell.parentNode.style.backgroundColor = '#00cccc';
        }

        if (col == 4) {
            if (parseFloat(label) > 10) {
                cell.style.color = 'red';
            }  else {
                cell.style.color = 'green';
            }
        }
    }
});