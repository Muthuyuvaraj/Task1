// Table Data and Pagination
let tableData = [
    { name: "Muthu", age: 22, country: "chennai" },
    { name: "Rasik", age: 21, country: "Ramanathapuram" },
    { name: "Suresh", age: 22, country: "Ramnad" },
    { name: "Priyanka", age: 30, country: "Tirupur" },
    { name: "Abinaya", age: 40, country: "Madurai" },
    { name: "Jinesh", age: 32, country: "Madurai" },
    { name: "Preethi", age: 29, country: "Virudhunagar" },
    { name: "Kamal", age: 12, country: "velakani" },
    { name: "Karthikeyan", age: 32, country: "Manali" },
    { name: "Kalai", age: 23, country: "Cuddalore" },
    { name: "Mathesh", age: 23, country: "Chennai" },
    { name: "Varun", age: 35, country: "Ooty" },
    { name: "Anushka", age: 20, country: "Covai" },
    { name: "Pradhiksha", age: 22, country: "Ooty" },
    { name: "Koodi", age: 34, country: "Erode" },
    { name: "mani", age: 28, country: "Salem" },
    { name: "Hari", age: 29, country: "Rameshwaram" },
    { name: "Movin", age: 37, country: "Neyveli" },
    { name: "Keerthana", age: 50, country: "Trichy" },
    // Add more data as needed
];

let currentPage = 1;
let rowsPerPage = 5;

function displayTable(data, page) {
    const tableBody = document.getElementById('table-body');
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    tableBody.innerHTML = '';
    for (let row of paginatedData) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.name}</td><td>${row.age}</td><td>${row.country}</td>`;
        tableBody.appendChild(tr);
    }

    document.getElementById('page-number').innerText = `Page ${currentPage}`;
}

function sortTable(columnIndex) {
    const isAscending = document.querySelectorAll('th')[columnIndex].classList.toggle('asc');
    tableData.sort((a, b) => {
        let valueA = Object.values(a)[columnIndex];
        let valueB = Object.values(b)[columnIndex];
        if (typeof valueA === 'number') {
            return isAscending ? valueA - valueB : valueB - valueA;
        } else {
            return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
    });
    displayTable(tableData, currentPage);
}

function searchTable() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredData = tableData.filter(row => {
        return Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchValue)
        );
    });
    displayTable(filteredData, 1);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayTable(tableData, currentPage);
    }
}

function nextPage() {
    if ((currentPage * rowsPerPage) < tableData.length) {
        currentPage++;
        displayTable(tableData, currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayTable(tableData, currentPage);
});

// Slider Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlider() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    updateSlider();
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    setInterval(() => nextSlide(), 3000); // Auto slide every 3 seconds
});
