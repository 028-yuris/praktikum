const express = require('express');
const { jadwal } = require('../data/mock');

const router = express.Router();

// GET /api/v1/jadwal?status=aktif
router.get('/', (req, res) => {
  const { status } = req.query;
  const data = status
    ? jadwal.filter((item) => item.status === status)
    : jadwal;

  res.status(200).json({
    status: true,
    message: 'Daftar jadwal berhasil diambil',
    data,
  });
});

// Letakkan route statis sebelum route dinamis /:id.
router.get('/jumlah-jadwal', (_req, res) => {
  res.status(200).json({
    status: true,
    message: 'Jumlah jadwal berhasil dihitung',
    data: { total: jadwal.length },
  });
});

// GET /api/v1/jadwal/1
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ status: false, message: 'id harus berupa angka' });
  }

  const item = jadwal.find((row) => row.id === id);
  if (!item) {
    return res.status(404).json({ status: false, message: 'Jadwal tidak ditemukan' });
  }

  return res.status(200).json({
    status: true,
    message: 'Jadwal berhasil diambil',
    data: item,
  });
});

module.exports = router;