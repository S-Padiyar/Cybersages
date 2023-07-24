      const menu = Array.from(document.getElementsByClassName("hamburger-menu"));
      const menuicon = Array.from(document.getElementsByClassName("hamburger-menu-icon"));
      const dropdownMenu = Array.from(document.getElementsByClassName("dropdown-container"));
      const aboutUsLink = Array.from(document.getElementsByClassName("about-us-link-mobile"));
      const aboutUsButton = Array.from(document.getElementsByClassName("about-us-button-mobile"));
      const Shadow = document.getElementsByClassName("header");
      const ShadowMobile = document.getElementsByClassName("header-mobile");
      const arrow = document.getElementsByClassName("arrow-mobile");

      var isMenu = false;
      var isDropdown = false;

      function menuFunction() {
        if (isMenu === false) {
          for (var i = 0; i < menu.length; i++) {
            menu[i].style.transform = "translateX(0)";
          }
          for (var i = 0; i < menuicon.length; i++) {
            menuicon[i].style.filter = "invert(90%) sepia(0%) saturate(59%) hue-rotate(142deg) brightness(96%) contrast(88%)";
          }
          isMenu = true;
        } 
        else {
          for (var i = 0; i < menu.length; i++) {
            menu[i].style.transform = "";
          }
          for (var i = 0; i < menuicon.length; i++) {
            menuicon[i].style.filter = "";
          }
          isMenu = false;
        }
      }

      function dropdownFunction() {
        if (isDropdown === false) {
          for (var i = 0; i < menu.length; i++) {
            menu[i].style.gridTemplateRows = "1fr 50px 50px";
            menu[i].style.height = "250px";
            menu[i].style.bottom = "-250px";
          }
          for (var i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].style.display = "grid";
          }
          for (var i = 0; i < aboutUsLink.length; i++) {
            aboutUsLink[i].style.boxShadow = "inset 1px 1px 5px rgba(0, 0, 0, 0.7)";
          }
          for (var i = 0; i < aboutUsButton.length; i++) {
            aboutUsButton[i].style.color = "lightgrey";
          }
          for (var i = 0; i < arrow.length; i++) {
            arrow[i].style.rotate = "180deg";
            arrow[i].style.filter = "invert(90%) sepia(0%) saturate(59%) hue-rotate(142deg) brightness(96%) contrast(88%)";
          }
          isDropdown = true; 
          
        } 
        else {
          for (var i = 0; i < menu.length; i++) {
            menu[i].style.gridTemplateRows = ""; 
            menu[i].style.height = ""; 
            menu[i].style.bottom = ""; 
          }
          for (var i = 0; i < dropdownMenu.length; i++) {
            dropdownMenu[i].style.display = ""; 
          }
          for (var i = 0; i < aboutUsLink.length; i++) {
            aboutUsLink[i].style.boxShadow = "";
          }
          for (var i = 0; i < aboutUsButton.length; i++) {
            aboutUsButton[i].style.color = "";
          }
          for (var i = 0; i < arrow.length; i++) {
            arrow[i].style.rotate = "";
            arrow[i].style.filter = "";
          }
          isDropdown = false; 
        }
      }
      function toggle(){
        if(window.scrollY == 0){
          for (let i = 0; i < Shadow.length; i++) {
            Shadow[i].style.boxShadow = "none";
          }
          for (let i = 0; i < ShadowMobile.length; i++) {
            ShadowMobile[i].style.boxShadow = "none";
          }
        }
        else{
          for (let i = 0; i < Shadow.length; i++) {
            Shadow[i].style.boxShadow = "0px 2px 5px rgba(55, 124, 145, 0.5)";
          }
          for (let i = 0; i < ShadowMobile.length; i++) {
            ShadowMobile[i].style.boxShadow = "0px 2px 5px rgba(55, 124, 145, 0.5)";;
          }
        }
      }
      window.onscroll = toggle;


      let resizeTimer;
      window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
      });
