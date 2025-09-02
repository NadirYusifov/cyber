export const cyberauthlogout = (req, res) => {
    res.clearCookie("cybercookie", {
        httpOnly: true,
        sameSite: "lax"
    })
    res.status(200).json({
        status: 200,
        success: true,
        message: "Logout successful"
    })
}