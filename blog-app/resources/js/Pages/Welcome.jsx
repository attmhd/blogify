import Card from '@/Components/Card';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Welcome({ articles }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    console.log(articles);

    return (
        <>
            <Head title="Welcome" />

            <Navbar />

            <section className="bg-white dark:bg-gray-900 pt-8">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center lg:mb-16 mb-8">
                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Welcome to Blogify
                        </h1>
                        <p className="mt-4 text-lg font-light text-gray-500 sm:text-xl lg:text-2xl dark:text-gray-400">
                            Blogify is an easy-to-use platform that lets you share your ideas, stories, and knowledge with simple, fast, and fun tools. Start your blogging journey today!
                        </p>
                        
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        
                        {articles.data.map((item, i) => (
                            <div key={i}>
                                
                                {item.is_published == 1 ? (
                                    <Card
                                        title={item.title}
                                        date={item.created_at}
                                        detail={item.id}
                                    />
                                ) : (
                                    ''
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
