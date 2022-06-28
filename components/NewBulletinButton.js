export default function createNewBulletinButton(button, { handleNewBulletin }) {
    button.addEventListener('click', () => {
        handleNewBulletin();
    });

    return ({ signedIn }) => {
        button.classList.toggle('hidden', !signedIn);
    };
}
