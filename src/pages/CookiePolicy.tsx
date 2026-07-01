import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Cookie Policy"
        description="Information about how Typely uses cookies and local storage."
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Last Updated: October 2023</p>

          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            At Typely, our primary goal is to provide a fast, seamless experience. We use Local Storage (a modern alternative to cookies) to save your typing test settings and high scores locally on your device. We do not use this data to track you across the web.
          </p>

          <h2>3. Third-Party Cookies (Google AdSense)</h2>
          <p>
            We use Google AdSense to display advertisements on some of our pages. Google uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your browsing history.
          </p>
          <p>
            You may opt-out of personalized advertising by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
