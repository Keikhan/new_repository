// Add click event to fact to show answer
(() => {
    const answerWrapper = document.querySelectorAll('.answer-wrapper');
    const toggleBtns = document.querySelectorAll('.answer-toggle')

    for (const ans of answerWrapper) {
        ans.style.display = 'none';
    }

    for (const btn of toggleBtns) {
        btn.addEventListener('click', (e) => {
            const answer = e.target.parentElement.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        } );
    }

// Update Fact
const editForm = document.querySelector('#form-update-fact');
const factToEdit = editForm && editForm.dataset.factid;

editForm && editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(editForm));
    fetch(`/fact/${factToEdit}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    })
    .then(() => document.location.href = `/fact/${factToEdit}`);
});

// Delete Fact
const deleteButton = document.querySelector('#delete-fact');
const factToDelete = deleteButton && deleteButton.dataset.factid;

deleteButton && deleteButton.addEventListener('click', () => {
    fetch(`/fact/${factToDelete}`, {
        method: 'DELETE',
    })
    .then(() => document.location.href = '/');
});


})()



