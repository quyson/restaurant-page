function initiallizePage(){
    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.className = "container";

    const header = document.createElement('div');
    header.className = "header";

    const main = document.createElement('div');
    main.className = 'main';
    container.append(header, main);

    const mainContainer = document.createElement('div');
    mainContainer.className = 'mainContainer';
    main.append(mainContainer)

    const left = document.createElement('div');
    left.className = 'left'

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = "Krusty Krab Pizza"
    left.append(name);

    const right = document.createElement('div');
    right.className = 'right';

    const uList = document.createElement('ul');
    const list1 = document.createElement('li');
    const list2 = document.createElement('li');
    const list3 = document.createElement('li');

    list1.className = 'home';
    list2.className = 'menu';
    list3.className = 'contact'
    list1.textContent = "Home";
    list2.textContent = "Menu";
    list3.textContent = "Contact Us"

    uList.append(list1, list2, list3)
    right.append(uList)
    header.append(left, right);
    body.append(container)
}

export {initiallizePage};