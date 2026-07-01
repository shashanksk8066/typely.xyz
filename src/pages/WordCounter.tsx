import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const WordCounter = () => {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim() !== '').length : 0;
  
  // Average reading speed is ~200-250 wpm, speaking is ~130-150 wpm
  const readingTime = Math.ceil(words / 225) || 0;
  const speakingTime = Math.ceil(words / 140) || 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Word Counter Tool"
        description="Free online word counter, character counter, and reading time calculator. Count words in your text instantly."
      />
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Word & Character Counter</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instantly count words, characters, paragraphs, and estimate reading time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary">{words}</div>
              <div className="text-sm text-muted-foreground mt-1">Words</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-success">{characters}</div>
              <div className="text-sm text-muted-foreground mt-1">Characters</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent">{readingTime}</div>
              <div className="text-sm text-muted-foreground mt-1">Min Read Time</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary">{paragraphs}</div>
              <div className="text-sm text-muted-foreground mt-1">Paragraphs</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 relative">
          <Textarea 
            placeholder="Type or paste your text here..."
            className="min-h-[300px] text-lg resize-y p-6 shadow-sm focus-visible:ring-primary/20"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text && (
            <Button 
              variant="outline" 
              size="sm" 
              className="absolute top-4 right-6"
              onClick={() => setText('')}
            >
              Clear
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Detailed Statistics</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Characters (no spaces)</span>
                <span className="font-medium">{charactersNoSpaces}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Estimated Speaking Time</span>
                <span className="font-medium">{speakingTime} minutes</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Average Word Length</span>
                <span className="font-medium">
                  {words > 0 ? (charactersNoSpaces / words).toFixed(1) : 0} chars
                </span>
              </li>
            </ul>
          </div>
          <div className="prose dark:prose-invert">
            <h3 className="text-xl font-semibold">About This Tool</h3>
            <p className="text-sm text-muted-foreground">
              This free online word counter is perfect for writers, students, and SEO professionals who need to keep track of their word counts to meet specific guidelines. The text is processed locally in your browser, meaning your data is completely secure and never sent to our servers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WordCounter;
