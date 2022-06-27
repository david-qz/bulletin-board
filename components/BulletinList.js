export default function createBulletinList(root) {

    return ({ bulletins }) => {
        root.innerHTML = '';

        for (const bulletin of bulletins) {
            root.append(createBulletin(bulletin));
        }
    };
}

function createBulletin(bulletin) {
    const titleElement = document.createElement('h3');
    titleElement.textContent = bulletin.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = bulletin.description;

    const posterElement = document.createElement('p');
    posterElement.textContent = bulletin.contact;

    const timestampElement = document.createElement('p');
    timestampElement.textContent = bulletin.createdAt;

    const li = document.createElement('li');
    li.append(titleElement, contentElement, posterElement, timestampElement);
    return li;
}
