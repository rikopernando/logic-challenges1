//Soal Pertama => Logic Challenge - Palindrome

var palindrome = (kata) => {

	var newKata = ""
	for (var i = kata.length -1; i >= 0; i--) {
		newKata += kata[i]
	}
	return newKata == kata ? true : false
}

console.log('Soal Pertama => Logic Challenge - palindrome')
console.log(palindrome('katak')) // true
console.log(palindrome('blanket')) // false
console.log(palindrome('civic')) // true
console.log(palindrome('kasur rusak')) // true
console.log(palindrome('mister')) // false
console.log()


// Soal Kedua => Logic Challenge - Number Palindrome
var angkaPalindrome = (angka) => {
	
	for (var i = angka + 1; i > angka; i++) {

		var stringAngka = String(i)
		var newAngka = 0
		for (var j = stringAngka.length - 1; j >= 0; j--) {
			newAngka += stringAngka[j]
		}

		if (i == newAngka) {
			return i
			break
		}

	}
}

console.log(`Soal Kedua => Logic Challenge - Number Palindrome`)
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log()


// Soal Ketiga => Logic Challenge - Menghitung Jumlah Kata

var hitungJumlahKata = (kalimat) => {
	// var JumlahKata = kalimat.split(" ")
	// return JumlahKata.length
	var array = []	
	var newKata = ""
	for (var i = 0; i < kalimat.length; i++) {
		
		if (kalimat[i] != " ") {
			newKata += kalimat[i]
		}else{
			array.push(newKata)
			newKata = ""
		}	
		if (i == (kalimat.length - 1) && kalimat[i] != " ") {
			array.push(newKata)
		}	
	}

	return array.length
}

console.log(`Soal Ketiga => Logic Challenge - Menghitung Jumlah Kata`)
console.log(hitungJumlahKata('I have a dream')) // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')) // 6
console.log(hitungJumlahKata('A song to sing')) // 4
console.log(hitungJumlahKata('I')) // 1
console.log(hitungJumlahKata('I believe I can code')) // 5
console.log()


// Soal Ke Empat => Logic Challenge - Pasangan Angka Terbesar

var pasanganTerbesar = (angka) => {

	var simpanAngka = 0
	var pasangan_terbesar = 0
	var angka = String(angka)	
	for (var i = 0; i <= angka.length - 1; i++) {
		
		if (simpanAngka.length == 2) {

			var simpanAngka = String(simpanAngka[1]) + String(angka[i])
			if (simpanAngka > pasangan_terbesar) {
				pasangan_terbesar = simpanAngka
			}
			
		}else{

			simpanAngka += String(angka[i])	
			pasangan_terbesar = simpanAngka

		}
		
	}

	return pasangan_terbesar
}

console.log(`Soal Ke Empat => Logic Challenge - Pasangan Angka Terbesar`)
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99
