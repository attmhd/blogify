import Card from '@/Components/Card';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ articles, laravelVersion, phpVersion }) {
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

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div> 
                    <div className="grid gap-8 lg:grid-cols-2">

                

                    {articles.data.map((item, i) => (
                        <div key={i}>
                            <Card
                                title={item.title}
                                date={item.created_at}
                            />
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    );
}
