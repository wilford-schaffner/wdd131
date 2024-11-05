let participantCount = 1;

document.getElementById('add').addEventListener('click', () => {
    participantCount++;
    
    const originalSection = document.querySelector('.participant1');
    const newSection = originalSection.cloneNode(true);
    newSection.className = `participant${participantCount}`;
    
    const participantText = newSection.querySelector('p');
    participantText.textContent = `Participant ${participantCount}`;
    
    const elements = newSection.querySelectorAll('input, select');
    
    elements.forEach(element => {
        if (element.id) {
            const newId = `${element.id}_${participantCount}`;
            element.id = newId;
            
            const label = newSection.querySelector(`label[for="${element.id.split('_')[0]}"]`);
            if (label) {
                label.setAttribute('for', newId);
            }
        }
    });
    
    const addButton = document.getElementById('add');
    addButton.parentElement.insertBefore(newSection, addButton);
    
    newSection.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
    
    newSection.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
});