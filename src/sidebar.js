
const createContentforSidebar = () => { 

    const mainContentH2 = document.querySelector('#mainContentH2')
    let item = document.querySelectorAll('.sidebarItem')

    item.forEach(item2 => { 
        item2.addEventListener('click', () => { 
            mainContentH2.innerHTML = item2.textContent + ':'
            console.log(mainContentH2.innerHTML);
        })
    })

    


    

}


export default createContentforSidebar