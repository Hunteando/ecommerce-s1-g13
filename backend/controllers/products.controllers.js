import { pool } from "../db.js";

export const createProduct = async (req, res) => {
  const {
    userId,
    title,
    metaTitle,
    slug,
    summary,
    type,
    sku,
    price,
    discount,
    quantity,
    shop,
    updateAt,
    publishedAt,
    startsAt,
    endsAt,
    content,
  } = req.body;
  const [result] = await pool.query(
    "INSERT INTO product (userId, title, metaTitle, slug, summary, type, sku, price, discount, quantity, shop, updatedAt, publishedAt, startsAt, endsAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userId,
      title,
      metaTitle,
      slug,
      summary,
      type,
      sku,
      price,
      discount,
      quantity,
      shop,
      updateAt,
      publishedAt,
      startsAt,
      endsAt,
      content,
    ]
  );
  res.json({ id: result.insertId, userId, title, summary, slug, sku });
};

export const getProducts = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM product ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const getProduct = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(result[0]);
};

export const getCustomProducts = async (req, res) => {
  const [result] = await pool.query("SELECT p.id, p.title, p.summary, i.data FROM product p INNER JOIN image i ON p.id = i.productId");
  res.json(result);
}

export const updateProduct = async (req, res) => {
  const [result] = await pool.query("UPDATE product SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};

export const deleteProduct = async (req, res) => {
  const [result] = await pool.query("DELETE FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};

// export const getCustomProducts = async (req, res) => {
//   const [result] = await pool.query(
//     "SELECT * FROM product ORDER BY createdAt ASC"
//   );
//   res.json(result);
// };