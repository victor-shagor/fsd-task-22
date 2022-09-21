const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default function handler(req, res) {
  const { email } = req.body;
  if (!email || !validateEmail(email)) {
    res
      .status(400)
      .json({ status: 400, error: "please provide a valid email" });
  }
  res.status(200).json({ status: 200, message: "email sent succesfully" });
}
