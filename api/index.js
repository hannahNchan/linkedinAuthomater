export default function handler(req, res) {
  res.status(200).json({ message: "Hola desde mi API pública en Vercel!" });
}