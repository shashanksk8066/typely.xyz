import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Keyboard, Calculator, FileText, Type } from 'lucide-react';

const toolsList = [
  {
    title: 'Typing Speed Test',
    description: 'Measure your WPM and accuracy with our core typing test.',
    icon: <Keyboard className="h-6 w-6 text-primary" />,
    path: '/',
    status: 'Live'
  },
  {
    title: 'WPM Calculator',
    description: 'Calculate Words Per Minute based on keystrokes and time.',
    icon: <Calculator className="h-6 w-6 text-primary" />,
    path: '/tools/wpm-calculator',
    status: 'Live'
  },
  {
    title: 'Word Counter',
    description: 'Count words, characters, and reading time for any text.',
    icon: <FileText className="h-6 w-6 text-primary" />,
    path: '/tools/word-counter',
    status: 'Live'
  },
  {
    title: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, etc.',
    icon: <Type className="h-6 w-6 text-primary" />,
    path: '/tools/case-converter',
    status: 'Live'
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Free Typing Tools"
        description="A collection of free tools for typists, writers, and students including typing tests, word counters, and WPM calculators."
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Free Productivity Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to improve your typing, format text, and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {toolsList.map((tool, idx) => (
            <Link key={idx} to={tool.path} className={tool.status === 'Coming Soon' ? 'pointer-events-none opacity-70' : ''}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      {tool.icon}
                    </div>
                    {tool.status === 'Coming Soon' && (
                      <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
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

export default Tools;
