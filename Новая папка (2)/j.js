document.addEventListener('DOMContentLoaded', function() {
            const searchBtn = document.getElementById('search-btn');
            const categories = document.querySelectorAll('.category');
            const detailBtns = document.querySelectorAll('.btn-details');
            const favoriteBtns = document.querySelectorAll('.btn-favorite');
            const notification = document.getElementById('notification');
            
            searchBtn.addEventListener('click', function() {
                const searchInput = document.querySelector('.search-box input');
                const query = searchInput.value.trim();
                
                if (query) {
                    showNotification(`Поиск фильма: "${query}"`);
                    console.log(`Выполняется поиск: ${query}`);
                } else {
                    showNotification('Введите название фильма для поиска');
                }
            });
            });