const categoriesList = document.getElementById('categories');
const categoryItem = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItem.length}`);
for (const item of categoryItem) {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
}