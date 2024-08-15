// import "./styles.css";

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
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
