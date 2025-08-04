let hello = () => {
    console.log("hello there")
    return "hello there"
};
let text = document.querySelector("h1")
text.textContent = hello();