export const adminloginPost = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server Error",
      error: error.message,
    });
  }
};
