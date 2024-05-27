const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#comment-name').value.trim();
    const description = document.querySelector('#comment-desc').value.trim();

    if (name && description) {
        const response = await fetch (`/api/blog/:id`, {
            method: 'POST',
            body: JSON.stringify({ comment_name, comment_description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/blog/id');
        }else {
            alert('Failed to create comment');
        }
    };
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }else {
            alert('Failed to delete comment');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);