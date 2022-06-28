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
    titleElement.classList.add('title');

    const contentElement = document.createElement('p');
    contentElement.textContent = bulletin.content;
    contentElement.classList.add('content');

    const posterElement = document.createElement('p');
    posterElement.textContent = bulletin.userContact;
    posterElement.classList.add('contact');

    const timestampElement = document.createElement('p');
    timestampElement.textContent = bulletin.createdAt;
    timestampElement.classList.add('timestamp');

    const li = document.createElement('li');
    li.append(titleElement, contentElement, posterElement, timestampElement);
    return li;
}
