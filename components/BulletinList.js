export default function createBulletinList(root, { handleDeleteBulletin }) {

    return ({ bulletins }) => {
        root.innerHTML = '';

        for (const bulletin of bulletins) {
            root.append(createBulletin(bulletin, { handleDeleteBulletin }));
        }
    };
}

function createBulletin(bulletin, { handleDeleteBulletin }) {
    const titleElement = document.createElement('h3');
    titleElement.textContent = bulletin.title;
    titleElement.classList.add('title');

    const contentElement = document.createElement('p');
    contentElement.textContent = bulletin.content;
    contentElement.classList.add('content');

    const userInfoElement = document.createElement('p');
    userInfoElement.textContent = bulletin.userInfo;
    userInfoElement.classList.add('contact');

    const timestampElement = document.createElement('p');
    timestampElement.textContent = new Date(bulletin.createdAt).toLocaleString();
    timestampElement.classList.add('timestamp');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        handleDeleteBulletin(bulletin.id);
    });

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can', 'fa-lg');

    deleteButton.append(trashIcon);

    const li = document.createElement('li');
    li.append(
        titleElement,
        contentElement,
        userInfoElement,
        timestampElement,
        deleteButton
    );
    return li;
}
