function contact() {
    const mainContainer = document.querySelector('.mainContainer');
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';

    const address = document.createElement('div');
    address.className = 'address';
    address.textContent = "Address: 17888 Barnacle Rd Shell City, Bikini Bottom, Pacific Ocean";

    const phone = document.createElement('div');
    phone.className = 'phone';
    phone.textContent = 'Contact Us: 555-153 -888'

    const owner = document.createElement('div');
    owner.className = 'owner';

    contentContainer.append(owner, address, phone);
    mainContainer.append(contentContainer);
}

export {contact}