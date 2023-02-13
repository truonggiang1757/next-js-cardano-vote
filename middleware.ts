import { NextResponse } from "next/server"
import { verify } from 'jsonwebtoken/verify'
import { NextRequest } from 'next/server'
import { urlToHttpOptions } from "url";

const secret = process.env.ACCESS_TOKEN_SECRET

export default function middleware(req: NextRequest) {
    const { cookies } = req;
    const jwt = cookies.OursiteJWT
    const url = req.url
    if(url.includes('/')) {
        if(jwt === undefined) {
            return NextResponse.redirect('/login')
        }
        try {
            verify(jwt, secret)

            return NextResponse.next()
        } catch (error) {
            return NextResponse.redirect('/login')
        }
    }
    if(url.includes('/login')) {
        if(jwt){
            try {
                verify(jwt, secret)
                return NextResponse.redirect('/')
            } catch (error) {
            }
        }
    }
    if(url.includes('/register')) {
        if(jwt){
            try {
                verify(jwt, secret)
                return NextResponse.redirect('/')
            } catch (error) {
            }
        }
    }

    return NextResponse.next()
}