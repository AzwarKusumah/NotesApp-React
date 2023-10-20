# Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React + Vite

Buatlah aplikasi web menggunakan React yang dapat menambahkan dan menghapus catatan. Agar lebih jelasnya, berikut 3 kriteria utama pada “Aplikasi Catatan Pribadi” yang harus Anda buat.

### Kriteria 1: Mampu Menampilkan Daftar Catatan

- Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan.
- Memanfaatkan state component untuk menyimpan data catatan.
- Menggunakan teknik array map untuk menampilkan daftar catatan.

Berikut contoh data riilnya:

```javascript
  {
  id: 3657848524,
  title: 'Harry Potter and the Philosopher\'s Stone',
  author: 'J.K Rowling',
  year: 1997,
  isComplete: false,
}
```

### Kriteria 2: Mampu Menambahkan Catatan

- Aplikasi harus mampu menambahkan data catatan baru.
- Memanfaatkan controlled component dalam membuat form input.
- Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh).
- Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut

```javascript
{
  id: number | string,
  title: string,
  body: string,
  archived: boolean,
  createdAt: string,
}
```

Berikut contoh data riilnya:

```javascript
 {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  }
```

Catatan:

> Untuk id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date()

### Kriteria 3: Mampu Menghapus Catatan

- Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan.
- Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong.

Selain kriteria utama, terdapat kriteria opsional yang yang dapat Anda penuhi agar mendapat nilai yang lebih tinggi.

### Kriteria Opsional 1: Terdapat Fitur Pencarian Catatan

- Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
  - Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan.
  - Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
- Memanfaatkan controlled component dalam membangun fitur catatan.

### Kriteria Opsional 2: Terdapat Limit Karakter pada Input Judul Catatan

- Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter.
- Menggunakan state dalam melimitasi, bukan atribut maxlength.
- Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.

### Kriteria Opsional 3: Terdapat Fitur Arsip Catatan

- Aplikasi memiliki fitur arsip catatan.
- Aplikasi harus menyediakan tombol arsipkan/pindahkan untuk mengarsipkan atau memindahkan catatan dari arsip.
- Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.

### Website View

![Website View](public/webview1.png)
![Website View](public/webview.png)
