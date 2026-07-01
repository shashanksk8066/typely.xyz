import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { articles } from '@/data/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Academy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Typing Academy"
        description="Learn touch typing, improve your typing speed, and master keyboard ergonomics at the Typely Academy."
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Typely Academy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your complete resource for mastering typing skills, ergonomics, and productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} to={`/academy/${article.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-sm text-primary mb-2 font-medium">{article.category}</div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground flex justify-between">
                    <span>{article.readingTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Academy;
