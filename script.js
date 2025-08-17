document.addEventListener('DOMContentLoaded', () => {
    const mobileTableBody = document.getElementById('mobile-table-body');
    const searchBar = document.getElementById('search-bar');
    const addMobileBtn = document.getElementById('add-mobile-btn');
    const mobiles = [
      {
        "model": "iPhone X",
        "price": "$300",
        "condition": "Used",
        "contact": "123-456-7890"
      },
      {
        "model": "Samsung Galaxy S10",
        "price": "$250",
        "condition": "Used - Good",
        "contact": "234-567-8901"
      },
      {
        "model": "Google Pixel 4a",
        "price": "$200",
        "condition": "Refurbished",
        "contact": "345-678-9012"
      },
      {
        "model": "OnePlus 7T",
        "price": "$280",
        "condition": "Used - Like New",
        "contact": "456-789-0123"
      },
      {
        "model": "Xiaomi Redmi Note 9",
        "price": "$150",
        "condition": "Used",
        "contact": "567-890-1234"
      }
    ];

    displayMobiles(mobiles);

    // Function to display mobiles in the table
    function displayMobiles(mobilesToDisplay) {
        mobileTableBody.innerHTML = ''; // Clear existing rows
        mobilesToDisplay.forEach(mobile => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${mobile.model}</td>
                <td>${mobile.price}</td>
                <td>${mobile.condition}</td>
                <td>${mobile.contact}</td>
            `;
            mobileTableBody.appendChild(row);
        });
    }

    // Event listener for the search bar
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMobiles = mobiles.filter(mobile =>
            mobile.model.toLowerCase().includes(searchTerm)
        );
        displayMobiles(filteredMobiles);
    });

    // Event listener for the "Add Your Mobile" button
    addMobileBtn.addEventListener('click', () => {
        alert('Coming soon!');
    });
});
