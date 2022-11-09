function menu(){
    const mainContainer = document.querySelector('.mainContainer');
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';

    const menu = {
        "Krabby Patty" : "$15",
        "Krabby Pizza": "$25"
    }
    let i = 0;
    
    for(let element in menu){
        const foodContainer = document.createElement('div');
        foodContainer.className = 'foodContainer';
        let images = document.createElement('div');
        images.className = 'images';
        images.id = "images" + i;
        let description = document.createElement('div');
        description.classList = 'description';
        description.textContent = element;
        let price = document.createElement('div');
        price.className = 'price';
        price.textContent = menu[element];

        foodContainer.append(images, description, price);
        contentContainer.append(foodContainer);
        mainContainer.append(contentContainer);
        i++;
    }
}

export {menu};