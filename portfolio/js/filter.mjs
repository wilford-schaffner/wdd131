export function initializeFilter() {
    document.addEventListener('DOMContentLoaded', function() {
        // Get all filter options
        const filterOptions = document.querySelectorAll('.container > div > div, .container > div.unselected');
        
        // Add click handlers to each filter option
        filterOptions.forEach(option => {
            option.style.cursor = 'pointer';
            option.addEventListener('click', function() {
                // Remove selected class from all options
                filterOptions.forEach(opt => {
                    opt.className = 'unselected';
                    if (opt.children[0]) {
                        opt.children[0].className = 'unselected';
                    }
                });
                
                // Add selected class to clicked option
                if (this.children[0]) {
                    this.children[0].className = 'selected';
                } else {
                    this.className = 'selected';
                }
                
                // Get the filter category
                const filterCategory = this.textContent.trim().toLowerCase();
                
                // Filter the projects
                const projects = document.querySelectorAll('.project-item-wrapper');
                projects.forEach(project => {
                    const projectCategory = project.querySelector('.project-item-tag-text').textContent.trim().toLowerCase();
                    if (filterCategory === projectCategory) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    });
}