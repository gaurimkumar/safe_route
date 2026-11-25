
import { Card,  Button, Label} from 'flowbite-react'
import {  HiShieldCheck } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-[#F0F5F1] flex items-center justify-center p-5">

      <div className="w-full max-w-md">

        <div className="text-center mb-7">
          <div className="w-16 h-16 bg-[#173D34] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <HiShieldCheck className="text-4xl text-white" />
          </div>

          <h1 className="text-3xl font-bold text-[#173D34] mt-4">
            SafeRoute
          </h1>

          <p className="text-gray-500 mt-2">
            Road Safety Management Platform
          </p>
        </div>

        <Card className="shadow-xl border-0 rounded-2xl p-5">

          <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome Back!
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Please sign in to continue to your account.
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <Label htmlFor="email" value="Email Address" className="mb-2 block" />

              <input
               className='border border-gray-300 w-100 rounded-lg p-1'
                id="email"
                type="email"
                placeholder=" Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" value="Password" className="mb-2 block" />

              <input
               className='border border-gray-300 w-100 rounded-lg p-1'
                id="password"
                type="password"
                placeholder=" Enter your password"
                required
              />
            </div>

           

            <Button className="w-full bg-[#26745B] hover:bg-[#173D34] focus:ring-[#26745B]">
              <Link to={'/dashboard'}>Login</Link>
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <Button
              color="light"
              className="w-full border border-gray-300 hover:bg-gray-50"
            >
              <FcGoogle className="text-xl mr-3" />
              Continue with Google
            </Button>

          </div>

          <div className="border-t pt-5 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-[#26745B] hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>

        </Card>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 SafeRoute. Making roads safer together.
        </p>

      </div>
    </div>
  )
}

export default Login
