export default function createNewBulletinForm(form, { handleNewBulletin }) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        handleNewBulletin({
            title: formData.get('title'),
            content: formData.get('content'),
            userInfo: formData.get('contact'),
        });
    });

    return () => {};
}
