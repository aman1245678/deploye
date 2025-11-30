import { Request, Response } from "express";
import { mail } from "../lib/Utils"; 
import CONFIG from "../config";

export const sendStockEmail = async (req: Request, res: Response) => {
  try {
    const { orderData } = req.body;

    if (!orderData) {
      return res.status(400).json({
        success: false,
        message: "orderData is required",
      });
    }

    await mail({
      to: orderData.manufacturingEmailAddress,
      subject: orderData.purchaseOrderNo,
      html: "<p>Order Details Attached</p>",
    });

    return res.json({ success: true, message: "Email sent" });
  } catch (error: any) {
    console.log("EMAIL ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
