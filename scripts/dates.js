const currenty = new Date().getFullYear();

document.querySelector("#currentyear").innerHTML =  `&copy; ${currenty} Accra, Ghana. Chamber of Commerce.`;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  `Last Modified: ${docMod}`;