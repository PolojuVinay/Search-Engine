document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('resultsList');

    const searchResults = [{
            Name: 'John Smith',
            Age: 35,
            Country: 'USA',
            Mobile: '+1-555-0123',
            Email: 'john.smith@email.com'
        },
        {
            Name: 'Emily Johnson',
            Age: 28,
            Country: 'Canada',
            Mobile: '+1-555-0124',
            Email: 'emily.johnson@email.com'
        },
        {
            Name: 'Michael Williams',
            Age: 42,
            Country: 'UK',
            Mobile: '+44-555-0125',
            Email: 'michael.williams@email.com'
        },
        {
            Name: 'Sophia Brown',
            Age: 19,
            Country: 'Australia',
            Mobile: '+61-555-0126',
            Email: 'sophia.brown@email.com'
        },
        {
            Name: 'William Jones',
            Age: 63,
            Country: 'USA',
            Mobile: '+1-555-0127',
            Email: 'william.jones@email.com'
        },
        {
            Name: 'Emma Garcia',
            Age: 24,
            Country: 'Spain',
            Mobile: '+34-555-0128',
            Email: 'emma.garcia@email.com'
        },
        {
            Name: 'Daniel Rodriguez',
            Age: 31,
            Country: 'Mexico',
            Mobile: '+52-555-0129',
            Email: 'daniel.rodriguez@email.com'
        },
        {
            Name: 'Olivia Martinez',
            Age: 27,
            Country: 'Brazil',
            Mobile: '+55-555-0130',
            Email: 'olivia.martinez@email.com'
        },
        {
            Name: 'Matthew Hernandez',
            Age: 38,
            Country: 'USA',
            Mobile: '+1-555-0131',
            Email: 'matthew.hernandez@email.com'
        },
        {
            Name: 'Ava Gonzalez',
            Age: 22,
            Country: 'Chile',
            Mobile: '+56-555-0132',
            Email: 'ava.gonzalez@email.com'
        },
        {
            Name: 'David Perez',
            Age: 49,
            Country: 'Argentina',
            Mobile: '+54-555-0133',
            Email: 'david.perez@email.com'
        },
        {
            Name: 'Isabella Sanchez',
            Age: 18,
            Country: 'Colombia',
            Mobile: '+57-555-0134',
            Email: 'isabella.sanchez@email.com'
        },
        {
            Name: 'Joseph Ramirez',
            Age: 33,
            Country: 'USA',
            Mobile: '+1-555-0135',
            Email: 'joseph.ramirez@email.com'
        },
        {
            Name: 'Mia Torres',
            Age: 26,
            Country: 'Mexico',
            Mobile: '+52-555-0136',
            Email: 'mia.torres@email.com'
        },
        {
            Name: 'Andrew Rivera',
            Age: 41,
            Country: 'USA',
            Mobile: '+1-555-0137',
            Email: 'andrew.rivera@email.com'
        },
        {
            Name: 'Abigail Flores',
            Age: 29,
            Country: 'Peru',
            Mobile: '+51-555-0138',
            Email: 'abigail.flores@email.com'
        },
        {
            Name: 'Joshua Gomez',
            Age: 36,
            Country: 'USA',
            Mobile: '+1-555-0139',
            Email: 'joshua.gomez@email.com'
        },
        {
            Name: 'Emily Diaz',
            Age: 23,
            Country: 'Spain',
            Mobile: '+34-555-0140',
            Email: 'emily.diaz@email.com'
        }
    ];

    function handleSearch(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredResults = searchResults.filter(result =>
            result.Name.toLowerCase().includes(query) ||
            result.Age.toString().includes(query) ||
            result.Country.toLowerCase().includes(query) ||
            result.Mobile.includes(query) ||
            result.Email.toLowerCase().includes(query)
        );
        displayResults(filteredResults);
    }

    function displayResults(results) {
        resultsList.innerHTML = '';
        results.forEach(result => {
            const li = document.createElement('li');
            li.innerHTML = `
        <h3>${result.Name}</h3>
        <p>Age: ${result.Age}, Country: ${result.Country}, Mobile: ${result.Mobile}, Email: ${result.Email}</p>
      `;
            resultsList.appendChild(li);
        });
    }

    searchForm.addEventListener('submit', handleSearch);
});