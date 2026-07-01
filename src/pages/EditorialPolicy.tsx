import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const EditorialPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Editorial Policy"
        description="Our commitment to accuracy, quality, and transparency at Typely."
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Editorial Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Last Updated: October 2023</p>

          <h2>1. Fact-Checking and Accuracy</h2>
          <p>
            At Typely, we are committed to providing the most accurate and up-to-date information regarding typing, ergonomics, and productivity. Every article goes through a rigorous fact-checking process before publication. We rely on established medical guidelines for ergonomic advice and industry-standard metrics for typing speed benchmarks.
          </p>

          <h2>2. Content Updates</h2>
          <p>
            The digital landscape and hardware (keyboards) change rapidly. We regularly review and update our existing content to ensure it remains relevant. When an article is updated, we clearly display the "Last Updated" date at the top of the page.
          </p>

          <h2>3. Quality Standards</h2>
          <p>
            We do not publish thin, unhelpful, or purely keyword-stuffed content. Every article must provide unique value, answer user queries comprehensively, and offer practical, actionable advice. Our content is written for humans, by humans.
          </p>

          <h2>4. AI Usage Disclosure</h2>
          <p>
            We may use AI tools to assist in researching topics, outlining structures, or correcting grammar. However, all final content is rigorously reviewed, edited, and verified by our human editorial team to ensure it meets our strict quality and EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) standards.
          </p>

          <h2>5. Human Review</h2>
          <p>
            No article goes live on Typely without a final review by a senior editor. This ensures our tone is consistent, our facts are straight, and our advice is genuinely helpful.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditorialPolicy;
