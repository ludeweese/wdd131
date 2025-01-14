// Activity 2 - Step 1: Adding a paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Activity 2 - Step 2: Adding an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from Picsum.");
document.body.appendChild(newImage);

// Activity 2 - Step 3: Adding a list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Activity 2 - Step 4: Adding a new section
const newSection = document.createElement("section");
newSection.innerHTML = `
  <h2>DOM Basics</h2>
  <p>This was added through Javascript</p>
`;
document.body.appendChild(newSection);
