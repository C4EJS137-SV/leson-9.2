// xây dung kho 

const storage = {
    name: "shop pi",
    address: "88 phố c",
    owner: "shop",
    item: [
        { id: 1, names: " kẹo", category: "soft", price: 20 },
        { id: 2, names: " chocolate ", category: "red", price: 15 },
        { id: 3, names: " thẻ ", category: "soft", price: 25 },
        { id: 4, names: " card ", category: "hard", price: 50 },
        { id: 5, names: " telephone ", category: "blue", price: 23 },
        { id: 6, names: " nho ", category: " while ", price: 80 },
        { id: 7, names: " fruit ", category: " fresh", price: 45 },
        { id: 8, names: " electronic ", category: " pink", price: 100 },
    ]
};
console.log(storage);
// action = 1
storage.name = "thunder";
storage.address = "100 phố d ";
storage.owner = "Cà Rốt";

console.log(storage);
action =3
let key = prompt('nhập vào từ khóa ')
for (const item in storage) {
    if (storage.item == key) {
        console.log(storage.item);
    }
};
action = 4
let n = prompt("nhập mã mặt hàng");
for (const id in storage.item) {
    if (id === n) {
        console.log(storage.item[id]);
        
    }
    delete storage.item[id];
   };

