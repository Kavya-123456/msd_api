document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:3000/api/data')
    .then(response => response.json())
    .then(data => {
        
        const userData = data.map(user => `
            <tr>
            <td>${user.id}</td>
            <td>${user.bookname}</td>
            <td>${user.author}</td>
            <td>${user.cost}</td>
          
            </tr>
        `).join('' );

        document.getElementById('json-data-holder').innerHTML = userData;
    })
});