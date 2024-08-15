// import "./styles.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

/** Part 1: Getting Started */

// 1. Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector("main");
// 2.  Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>.
// one way
let h1El = document.createElement("h1");
h1El.textContent = "DOM Manipulation";
mainEl.appendChild(h1El);
// another way
//mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// 4.  Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

/** Part 2: Creating a Menu Bar */

// 1.  Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
// 2.  Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// 3.  Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// 4.  Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

/** Part 3: Adding Menu Buttons */

// 1. Iterate over the entire menuLinks array and for each "link" object
menuLinks.forEach((item) => {
  // 2.  Create an <a> element.
  let aEl = document.createElement("a");
  // 3.  On the new element, add an href attribute with its value set to the href property of the "link" object.
  aEl.setAttribute("href", item.href);
  // 4.  Set the new element's content to the value of the text property of the "link" object.
  aEl.textContent = item.text;
  // 5.  Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aEl);
});

/** Part 4: Adding Interactivity */

/** Creating the Submenu */
// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("nav#sub-menu");
// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
// change the position of the submenu to temporarily hide it.
// 5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// 6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

/** Adding Menu Interaction */
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", (e) => {
  //call the event object's preventDefault() method
  e.preventDefault();
  //immediately return if the element clicked was not an <a> element.
  if (e.target.tagName.toLowerCase() !== "a") return;
  //log the content of the <a> to verify the handler is working.
  console.log(e.target);
  //add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }
  //remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not
  topMenuLinks.forEach((link) => {
    if (e.target !== link) link.classList.remove("active");
  });
  /** Adding Submenu Interaction */
  // 1. Check, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked)
  if (e.target.classList.contains("active")) {
    //Cache the clicked <a> element's "link" object
    let linkObj = {};
    menuLinks.forEach((link) => {
      if (link.text === e.target.textContent && link.subLinks) {
        linkObj = link;
        return;
      }
    });
    //a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    if (linkObj.subLinks) {
      subMenuEl.style.top = "100%";
    }
    // b. Otherwise, set the CSS top property of subMenuEl to 0.
    else {
      subMenuEl.style.top = "0";
    }
  }
});
