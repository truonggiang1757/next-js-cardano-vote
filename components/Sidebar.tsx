import { UserCircleIcon, DocumentIcon, Cog8ToothIcon, HomeIcon, WalletIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import logo_blue from '../assets/logo-blue.png'
import logo_white from '../assets/logo-white.png'

const Sidebar = () => {
    return (
        <div className="text-white bg-blue-400 shadow-2xl px-10 pt-5 pb-36 text-xs lg:text-lg h-screen overflow-y-auto sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block scrollbar-hidden">
            <div className="space-y-6">
                <div className='py-4'>
                    <a href="/"><Image src={logo_white} alt="Logo"/></a>
                </div>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <HomeIcon className='h-5 w-5' />
                    <span>Home</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <UserCircleIcon className='h-5 w-5' />
                    <span>Profile</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <WalletIcon className='h-5 w-5' />
                    <span>Wallet</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <DocumentIcon className='h-5 w-5' />
                    <span>Your votes</span>
                </button>
                <button className="flex items-center w-full px-2 space-x-2 hover:bg-gray-200 hover:text-blue-400 rounded">
                    <Cog8ToothIcon className='h-5 w-5' />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar