const categories = ["vehicles"];

function renderItem(obj, category, parent) {
  return `<div class = "card">
    ${category}
    <div>
      <a href = "item.html?=${obj.item}">${obj.item}</a>
      <img class = "image" src = "../meow.jpeg"></img>
      <p>value: ${obj.value}</p>
    </div>
  </div>
  `
}

fetch("../assets/values2.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (const c in categories) {
      let category = data[categories[c]];
      console.log(category);
      let parent = document.getElementById("parent");
      let rows = [];
      for (let i = 1; i < Math.ceil((category.length/8) + 1); i++) {
        let rowEl = document.createElement("div");
        console.log("run")
        rowEl.className = `row ${i}`;
        parent.appendChild(rowEl);
        rows.push(rowEl);
      }
      for (let item in category) {
        let index = Math.ceil(item/8)
        rows[index].innerHTML += renderItem(category[item], categories[c], parent)
      }
    }
  })
  .catch(error => {
    console.log("Error!", error);
});