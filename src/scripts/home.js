function home() {
    const mainContainer = document.querySelector('.mainContainer');
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer'

    const homeText = document.createElement('div');
    homeText.className = 'homeText'
    homeText.textContent = "Made by yours truly, Spongebob! Remember don't give Plankton the secret recipe!"

    const portrait = document.createElement('div');
    portrait.className = 'portrait';

    contentContainer.append(homeText, portrait);
    mainContainer.append(contentContainer);
}

export {home};