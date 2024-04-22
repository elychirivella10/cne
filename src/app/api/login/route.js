
import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();
  if (token) {
    const response = NextResponse.json({
      token,
    });

    response.cookies.set({
      name: "access",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    })
    return response
  }else{
    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    )
  }
  
    
  }