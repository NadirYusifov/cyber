export const cyberauthlogout = (req, res) => {
    res.clearCookie("cybercookie", {
        httpOnly: true,
        sameSite: "lax",
        secure: "true",
        path: "/admin/adminlogin"
    })
    res.status(200).json({
        status: 200,
        success: true,
        message: "Logout successful"
    })
}