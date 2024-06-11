document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.sheetmonkey.io/v1/sheets/{sheet-id}')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('dataTable');
            const headers = ['Data', 'Descrição', 'Receita', 'Despesa', 'Saldo'];
            
            // Create table header
            const headerRow = document.createElement('tr');
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            
            // Fill table with data
            data.slice(1).forEach(rowData => {
                const row = document.createElement('tr');
                rowData.forEach(cellData => {
                    const td = document.createElement('td');
                    td.textContent = cellData;
                    row.appendChild(td);
                });
                table.appendChild(row);
            });
        });
});
