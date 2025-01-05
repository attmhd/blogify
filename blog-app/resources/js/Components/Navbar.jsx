import { router } from '@inertiajs/react';


export default function Navbar({ status }) {
    const handleLogout = () => {
        if (status !== 'login') {
            console.log('logout');
            router.post('/logout');
        }
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogify</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href={status === 'Login' ? '/admin' : '#'}>
                        <button onClick={handleLogout} type="button" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            {status}
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
