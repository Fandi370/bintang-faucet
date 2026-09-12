export default function handler(req, res) {
  // Menerima data postback dari FaucetPay
  if (req.method === 'POST' || req.method === 'GET') {
    const data = req.query.length ? req.query : req.body;
    
    // Log data yang masuk dari FaucetPay
    console.log("Postback received:", data);

    // Kirim respon sukses ke FaucetPay
    return res.status(200).json({ status: "success", message: "Postback received" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
