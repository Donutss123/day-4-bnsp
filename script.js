const barang = {
    kode: "inv-001",
    nama: "Laptop",
    stock: 10,
    harga: 7500000.
};

console.log(`nama ${barang.nama}`); // Output: Laptop
console.log(`stock ${barang.stock}`); // Output: 10

const jumlahBarang = 10;
const hargaSatauan = 15000;
const jumlah = jumlahBarang * hargaSatauan;

console.log("total nilai", jumlah);

const stock = 0;

const item = 9;
const setatus = "readyy";

if (item === 5 || setatus === "ready") {
    console.log("Barang ready");
}else {
    console.log("Barang tidak ready");
}

for (let i = 10; i >= 1; i--) {
    if (i % 2 === 1) {
        console.log("Angka ganjil", i);
    }else {
        console.log("Angka genap", i);
    }
}

// const daftarBarang = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// for (let i = 0; i < daftarBarang.length; i++) {
//     console.log(daftarBarang[i]);
// }

let quantity = 3;

while (quantity > 0) {
    console.log("Quantity", quantity);
    quantity--;
}

const daftarBarang = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (const barang of daftarBarang) {
    console.log(barang);
}

function sapa(namaOrang) {
    console.log(`Halo, selamat datang, ${namaOrang}!, ${namaOrang}!, ${namaOrang}!`);
}
sapa("Alice"); // Output: Halo, selamat datang, Alice!


function tentukaStatusBarang(stock) {
    if (stock === 0) {
        return "Barang ready";
    } else if (stock < 5) {
        return "Barang menipis";
    } else {
        return "Barang banyak";
    }
}

console.log(tentukaStatusBarang(0)); // Output: Barang ready
console.log(tentukaStatusBarang(3)); // Output: Barang menipis
console.log(tentukaStatusBarang(10)); // Output: Barang banyak  


const hitungLuas = function(panjang, lebar) {
    return panjang * lebar;
}   

console.log(hitungLuas(5, 10)); // Output: 50