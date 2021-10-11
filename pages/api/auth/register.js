const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    res.status(200).json({ success: true });
};

export default register;
