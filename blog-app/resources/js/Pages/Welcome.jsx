import Card from '@/Components/Card';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useState } from 'react';

export default function Welcome({ posts, auth , category}) {

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    const filteredPosts = selectedCategory && selectedCategory !== 'All'
        ? posts.data.filter((post) => post.category.name === selectedCategory)
        : posts.data;
    
    return (
        <>
            <Head title="Welcome" />

            {auth.user != null ? (
                <Navbar status="Logout" />
            ) : (
                <Navbar status="Login" />
            )}


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

                    <div className="flex justify-center my-10">
                        <label className="mx-2">
                            <input
                                type="radio"
                                name="category"
                                value="All"
                                checked={selectedCategory === 'All'}
                                onChange={handleCategoryChange}
                                className="mr-1"
                            />
                            All
                        </label>
                        {category.map((item, i) => (
                            <label key={i} className="mx-2">
                                <input
                                    type="radio"
                                    name="category"
                                    value={item.name}
                                    checked={selectedCategory === item.name}
                                    onChange={handleCategoryChange}
                                    className="mr-1"
                                />
                                {item.name}
                            </label>
                        ))}
                    </div>
                    
                    <div className="grid gap-8 lg:grid-cols-2">
            {filteredPosts.map((item, i) => (
                <div key={i}>
                    {item.article.is_published == 1 ? (
                        <Card
                            title={item.article.title}
                            date={item.article.created_at}
                            detail={item.article.id}
                            category={item.category.name}
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
