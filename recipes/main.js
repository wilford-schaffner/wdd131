import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = e.target.querySelector('input').value;
    });
});