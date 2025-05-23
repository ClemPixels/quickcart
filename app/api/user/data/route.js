import connectDB from "@/config/db";
import User from "@/models/Users";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const { userId } = getAuth(request);

    await connectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
