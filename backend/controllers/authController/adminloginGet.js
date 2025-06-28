export const adminloginGet = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      message: "OK",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "error",
      error: error.message,
    });
  }
};
