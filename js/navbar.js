class mobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelector(navLinks)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.navList.classlist.toggle(this.activeClass)
    }
    addClickEvent(){
        this.mobileMenu.addEventListner("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent(); 
        }
        return this;
    }
}
const mobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
)
mobileNavbar.init();