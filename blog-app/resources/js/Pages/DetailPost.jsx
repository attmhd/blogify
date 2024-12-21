import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import DOMPurify from 'dompurify';

export default function DetailPost({ article }) {
    const cleanArticle = DOMPurify.sanitize(article.content, {
        ADD_TAGS: ['blockquote', 'pre', 'em', 'li', 'ul', 'ol'],
        ADD_ATTR: ['style'],
        FORBID_TAGS: ['style'],
        FORBID_ATTR: ['class']
    })
    .replace(/<pre>/g, '<pre class="custom-pre">')
    .replace(/<blockquote>/g, '<blockquote class="custom-blockquote">')
    .replace(/<li>/g, '<li class="custom-li">');

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    const formattedDate = formatDate(article.created_at);

    return (
        <div className="container mx-auto">
            <Head title='Detail' />
            <Navbar />
            <main className="pt-24 pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xxl">
                    <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <span>{formattedDate}</span>
                            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
                                {article.title}
                            </h1>
                        </header>
                        <div className="prose">
                            <div dangerouslySetInnerHTML={{ __html: cleanArticle }} />
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
}