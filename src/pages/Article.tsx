import { useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { getArticleBySlug } from '@/data/articles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={article.title}
        description={article.description}
        type="article"
        publishedTime={article.publishedAt}
        modifiedTime={article.updatedAt}
        author={article.author}
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-10 text-center">
          <div className="text-primary font-semibold tracking-wider uppercase mb-4">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {article.description}
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>TE</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{article.author}</span>
            </div>
            <span>•</span>
            <span>{new Date(article.updatedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.readingTime} min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
