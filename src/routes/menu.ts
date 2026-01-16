import { Router, type Request, type Response } from 'express';
import z from 'zod';

// Inisialisasi Router
const router = Router();

// Schema Menu
const MenuSchema = z.object({
  id: z.number(),
  nama: z.string(),
  harga: z.number(),
  tersedia: z.boolean(),
});

// Data Dummy
const daftarMenu = [
  { id: 1, nama: 'Nasi Goreng', harga: 15000, tersedia: true },
  { id: 2, nama: 'Mie Ayam', harga: 12000, tersedia: true },
  { id: 3, nama: 'Es Teh', harga: 5000, tersedia: false },
];

// Dummy API
router.get('/menu', (req: Request, res: Response) => {
  res.json(daftarMenu);
});

export default router;
