import { Head } from '@inertiajs/react';
import DOMPurify from 'dompurify';

export default function DetailPost({article}) {

    const cleanArticle = DOMPurify.sanitize(article.content);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    const formattedDate = formatDate(article.created_at);

    return (
        <div className="container mx-auto">

        <Head title='Detail' />
        <main className="pt-8 pb-16  lg:pb-24 bg-white dark:bg-gray-900 antialiased">

                    <div class="flex justify-between px-4 mx-auto max-w-screen-xxl ">
                        <article class="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header class="mb-4 lg:mb-6 not-format">
                            <span>{formattedDate}</span>
                            <h1 class="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
                                {article.title}
                            </h1>{" "}
                            </header>
                            <div className="prose dark:prose-dark">
                                <div dangerouslySetInnerHTML={{ __html: cleanArticle }} />
                            </div>
                        </article>
                    </div>
                </main>
        </div>
    );
}