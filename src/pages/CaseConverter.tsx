import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CaseConverter = () => {
  const [text, setText] = useState('');
  const { toast } = useToast();

  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  
  const handleTitleCase = () => {
    setText(
      text.toLowerCase().split(' ').map(word => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ')
    );
  };

  const handleSentenceCase = () => {
    setText(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
    );
  };

  const handleAlternatingCase = () => {
    setText(
      text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "The text has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Case Converter Tool"
        description="Free online tool to convert text to uppercase, lowercase, title case, and sentence case instantly."
      />
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Text Case Converter</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Easily convert text between UPPERCASE, lowercase, Title Case, and more.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Button onClick={handleSentenceCase} variant="secondary">Sentence case</Button>
          <Button onClick={handleLowerCase} variant="secondary">lower case</Button>
          <Button onClick={handleUpperCase} variant="secondary">UPPER CASE</Button>
          <Button onClick={handleTitleCase} variant="secondary">Title Case</Button>
          <Button onClick={handleAlternatingCase} variant="secondary">aLtErNaTiNg cAsE</Button>
        </div>

        <div className="mb-6 relative">
          <Textarea 
            placeholder="Type or paste your text here to convert..."
            className="min-h-[350px] text-lg resize-y p-6 shadow-sm focus-visible:ring-primary/20"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-12">
          <div className="text-sm text-muted-foreground">
            {text.length} characters • {text.trim() ? text.trim().split(/\s+/).length : 0} words
          </div>
          <div className="space-x-3">
            <Button variant="outline" onClick={() => setText('')}>Clear</Button>
            <Button onClick={copyToClipboard} disabled={!text}>Copy to Clipboard</Button>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none border-t pt-8">
          <h2 className="text-2xl font-bold">Why use a Case Converter?</h2>
          <p>
            Accidentally left Caps Lock on? Need to format a title properly? A case converter is a simple but essential productivity tool. Instead of retyping entire paragraphs of text, you can instantly convert your text to the correct format with a single click.
          </p>
          <p>
            Like all our tools, this case converter runs entirely in your browser, meaning your text is never uploaded to any servers and remains completely private.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseConverter;
