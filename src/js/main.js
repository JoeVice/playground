function createNavigationLink(url, text) {
    let navList = document.getElementById("navList");
    let navItem = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = url;
    anchor.text = text;
    //anchor.addEventListener("click", aboutClick, false);
    navItem.id = "navItem";
    navItem.appendChild(anchor);
    navList.appendChild(navItem);
}
    //createNavigation();
