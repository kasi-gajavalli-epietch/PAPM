import { verify } from "jsonwebtoken";

const isAdmin = (fn) => async (req, res) => {
  verify(
    req.cookies.auth,
    process.env.JWT_SECRET,
    async function (err, decoded) {
      if (!err && decoded && decoded.role === "admin") {
        return await fn(req, res);
      }
      res.status(500).json({ message: "Sorry you are not admin" });
    }
  );
};

export default isAdmin;
