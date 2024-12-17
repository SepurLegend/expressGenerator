// Mengimpor modul express untuk membuat router
const express = require("express");
// Membuat instance router dari express
const router = express.Router();
// Mengimpor Controller prodi untuk menangani logika bisnis
const prodiController = require("../controllers/prodiController");

// Mengimpor middleware untuk autentikasi dan pengecekan peran
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Definisi rute untuk prodi
// Mengatur rute GET untuk mendapatkan semua data prodi
router.get("/", 
    // authMiddleware,
    // roleMiddleware("admin"),
    prodiController.getAllProdi);
// Mengatur rute POST untuk membuat data prodi baru
router.post("/", 
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.createProdi);
// Mengatur rute GET untuk mendapatkan data prodi berdasarkan ID
router.get("/:id", 
    // authMiddleware,
    // roleMiddleware("admin"),
    prodiController.getProdiById);
// Mengatur rute PUT untuk memperbarui data prodi berdasarkan ID
router.put("/:id", 
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.updateProdi);
// Mengatur rute DELETE untuk menghapus data prodi berdasarkan ID
router.delete("/:id", 
    authMiddleware,
    roleMiddleware("admin"),
    prodiController.deleteProdi);

// Mengeksport router agar dapat digunakan di file lain (misalnya, di app.js)
module.exports = router;
