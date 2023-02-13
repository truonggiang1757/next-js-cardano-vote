import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid"

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen md:py-2 md:bg-gray-100 sm:bg-white'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-blue-400 rounded-2xl md:shadow-2xl lg:flex lg:w-2/3 xs:max-w-full sm:flex-row sm:px-0 max-w-4xl'>
                    {/* Sign in */}
                    <div className='w-full lg:p-5 sm:max-w-screen'>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-white mb-2'>Sign up</h2>
                            <div className='border-2 w-10 border-white inline-block mb-2'></div>
                            <div className='flex justify-center my-2'></div>
                            <p className="text-white mb-5">Enter your new credentials</p>
                            <div className="flex flex-col items-center">
                                <form action="/api/auth/register" method="post">
                                    <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                        <EnvelopeIcon className="text-gray-400 w-6" />
                                        <input type="email" name="email" placeholder="Email" className="bg-gray-200 border-none focus:ring-0 text-sm flex-1"/>    
                                    </div>
                                    <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                        <KeyIcon className="text-gray-400 w-6" />
                                        <input type="password" name="password" placeholder="Password" className="bg-gray-200 border-none focus:ring-0 text-sm flex-1"/>    
                                    </div>
                                    <input type="submit" value="Register" className='border-2 mt-3 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
