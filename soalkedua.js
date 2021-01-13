const data =  [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
var count_bagi = Math.round(data.length / 3);
var data_kelompok = [];
var total_kelompok = [];
var rata_rata_kelompok = [];
var nilai_tertinggi = [];
var nilai_terendah = [];

for (let index = 0; index < data.length; index+=count_bagi) {
    data_kelompok.push(data.slice(index, index+count_bagi))
}

data_kelompok.forEach(function(kelompok, index){
    data_kelompok[index] = data_kelompok[index].sort().reverse();
    var total = kelompok.reduce((a, b) => a + b)
    var rata_rata = total / kelompok.length
    var tertinggi = Math.max(...kelompok);
    var terendah = Math.min(...kelompok);

    total_kelompok.push(total)
    rata_rata_kelompok.push(rata_rata)
    nilai_tertinggi.push(tertinggi)
    nilai_terendah.push(terendah);

})

console.log("Bagi data 3 kelompok urutan besar ke kecil",data_kelompok)
console.log("Total data 3 kelompok",total_kelompok)
console.log("Rata2 data 3 kelompok",rata_rata_kelompok)
console.log("tertinggi data 3 kelompok",nilai_tertinggi)
console.log("terendah data 3 kelompok",nilai_terendah)

