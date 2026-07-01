import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const WpmCalculator = () => {
  const [keystrokes, setKeystrokes] = useState<string>('250');
  const [errors, setErrors] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('1');

  // WPM Formula: (Keystrokes / 5) / Minutes
  // Net WPM: Gross WPM - (Errors / Minutes)

  const k = parseInt(keystrokes) || 0;
  const e = parseInt(errors) || 0;
  const m = parseFloat(minutes) || 1;

  const grossWpm = Math.round((k / 5) / m);
  const netWpm = Math.max(0, Math.round(grossWpm - (e / m)));
  const accuracy = k > 0 ? Math.max(0, Math.round(((k - e) / k) * 100)) : 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="WPM Calculator"
        description="Free online Words Per Minute (WPM) calculator. Calculate your typing speed based on keystrokes and time."
      />
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">WPM Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manually calculate your gross and net Words Per Minute (WPM).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Input Form */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="keystrokes">Total Keystrokes</Label>
                <Input 
                  id="keystrokes" 
                  type="number" 
                  min="0"
                  value={keystrokes} 
                  onChange={(e) => setKeystrokes(e.target.value)} 
                />
                <p className="text-xs text-muted-foreground">Total number of characters typed, including spaces.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="errors">Uncorrected Errors</Label>
                <Input 
                  id="errors" 
                  type="number" 
                  min="0"
                  value={errors} 
                  onChange={(e) => setErrors(e.target.value)} 
                />
                <p className="text-xs text-muted-foreground">Number of incorrect keystrokes left uncorrected.</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="minutes">Time (Minutes)</Label>
                <Input 
                  id="minutes" 
                  type="number" 
                  step="0.5"
                  min="0.1"
                  value={minutes} 
                  onChange={(e) => setMinutes(e.target.value)} 
                />
                <p className="text-xs text-muted-foreground">Duration of the typing test in minutes.</p>
              </div>

              <Button className="w-full" variant="outline" onClick={() => {
                setKeystrokes('250');
                setErrors('0');
                setMinutes('1');
              }}>
                Reset Values
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 flex flex-col items-center justify-center min-h-[160px]">
                <div className="text-sm font-medium mb-2 opacity-90">NET SPEED</div>
                <div className="text-6xl font-bold">{netWpm} <span className="text-2xl font-normal opacity-80">WPM</span></div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Gross Speed</div>
                  <div className="text-3xl font-bold">{grossWpm} WPM</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-1">Accuracy</div>
                  <div className="text-3xl font-bold">{accuracy}%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none border-t pt-8">
          <h2 className="text-2xl font-bold">How is WPM Calculated?</h2>
          <p>
            In standard typing tests, a "word" is standardized to exactly 5 characters or keystrokes, including spaces. This ensures that tests with longer words are graded fairly compared to tests with shorter words.
          </p>
          <ul>
            <li><strong>Gross WPM formula:</strong> <code>(Total Keystrokes / 5) / Minutes</code></li>
            <li><strong>Net WPM formula:</strong> <code>Gross WPM - (Uncorrected Errors / Minutes)</code></li>
          </ul>
          <p>
            Net WPM is the most accurate representation of your true typing speed, as it penalizes you for mistakes that are not corrected.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WpmCalculator;
