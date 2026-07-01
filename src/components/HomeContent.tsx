import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl prose prose-lg dark:prose-invert">
      <h2 className="text-3xl font-bold mt-12 mb-6">The Ultimate Guide to Improving Your Typing Speed</h2>
      <p>
        In today's fast-paced digital world, typing speed is more than just a convenience—it's a critical skill that impacts your productivity, career prospects, and overall digital communication. Typely.xyz is designed not just to test your speed, but to help you fundamentally improve it through science-backed methods and deliberate practice.
      </p>

      <h3>How is WPM (Words Per Minute) Calculated?</h3>
      <p>
        Words Per Minute (WPM) is the standard metric used to measure typing speed. However, what constitutes a "word" in typing tests is standardized to ensure fairness across different texts. In standard typing tests, a "word" is defined as 5 characters or keystrokes, including spaces and punctuation. 
      </p>
      <p>
        For example, if you type the word "apple" (5 characters), that counts as exactly one word. If you type the word "extraordinary" (13 characters), that counts as 2.6 words. This standardization ensures that a test with longer words doesn't unfairly result in a lower WPM score than a test with shorter words. 
      </p>
      <div className="bg-muted p-4 rounded-lg my-6">
        <strong>The Formula:</strong> <br/>
        WPM = (Total Keystrokes / 5) / (Time in Minutes) <br/>
        Net WPM = WPM - (Uncorrected Errors / Time in Minutes)
      </div>

      <h3>Typing Accuracy: Why It Matters More Than Speed</h3>
      <p>
        A common mistake beginners make is focusing entirely on moving their fingers faster, neglecting accuracy. If you type at 100 WPM but have an 85% accuracy rate, you will spend a massive amount of time hitting the backspace key, interrupting your flow state and drastically reducing your actual, productive speed.
      </p>
      <p>
        At Typely, we recommend striving for a minimum of 98% accuracy before attempting to increase your raw speed. Slow down, build the muscle memory correctly, and the speed will naturally follow. Remember the adage used in professional training: "Slow is smooth, and smooth is fast."
      </p>

      <h3>Common Typing Mistakes That Are Holding You Back</h3>
      <ul>
        <li><strong>Looking at the Keyboard:</strong> This breaks your visual focus on the screen, forcing your brain to context-switch between looking down and reading the output. </li>
        <li><strong>Not Using All Fingers (Hunt and Peck):</strong> If you are only using 2 to 4 fingers, you are placing a hard physical limit on how fast you can type.</li>
        <li><strong>Poor Posture:</strong> Slouching and improper wrist angles lead to fatigue. If you are uncomfortable, you will type slower and make more mistakes.</li>
        <li><strong>Ignoring Punctuation and Numbers:</strong> Many people type letters quickly but completely pause to find a comma, period, or number. You must practice the entire keyboard.</li>
      </ul>

      <h3>Typing for Different Professions</h3>
      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Typing for Programmers</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Programmers need high accuracy with special characters (brackets, semicolons). While raw WPM isn't everything (as coding is mostly thinking), the ability to translate thought to code without friction is vital. A speed of 60-80 WPM is highly recommended.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Typing for Writers</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Authors, journalists, and copywriters benefit immensely from high WPM. When writing flows as fast as you think (typically around 70-90 WPM), you enter a flow state much easier, resulting in better quality and higher output.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Typing for Data Entry</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Data entry requires extreme precision and speed. A minimum of 60 WPM is usually required, with 80+ WPM preferred. Data entry also heavily utilizes the ten-key numeric keypad (measured in Keystrokes Per Hour or KPH).
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Typing for Students</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            From essays to note-taking in lectures, typing speed dictates a student's academic efficiency. Students typing at 60+ WPM spend significantly less time on assignments compared to those typing at 30 WPM.
          </CardContent>
        </Card>
      </div>

      <h3>Keyboard Ergonomics: Saving Your Wrists</h3>
      <p>
        Typing fast is useless if it results in Repetitive Strain Injury (RSI) or Carpal Tunnel Syndrome. Proper ergonomics are non-negotiable for anyone spending hours at a computer. 
      </p>
      <ul>
        <li><strong>Keep Wrists Straight:</strong> Your wrists should hover over the keyboard, not rest on the desk while typing. A wrist rest should only be used when resting, not actively typing.</li>
        <li><strong>Monitor Height:</strong> The top of your screen should be at or slightly below eye level.</li>
        <li><strong>Elbow Angle:</strong> Keep your elbows close to your body, bent at an angle between 90 and 110 degrees.</li>
      </ul>
      <p>
        For a deep dive into avoiding pain, read our comprehensive guide on <Link to="/academy/keyboard-ergonomics-avoid-wrist-pain" className="text-primary hover:underline">Keyboard Ergonomics</Link>.
      </p>

      <h2 className="text-3xl font-bold mt-16 mb-8">Frequently Asked Questions</h2>
      <div className="not-prose">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-semibold">What is a good typing speed?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              An average typing speed is around 40 Words Per Minute (WPM). A "good" speed for professional office work is generally considered to be 50-60 WPM. If you are applying for jobs heavily reliant on typing (transcription, data entry, journalism), you should aim for 70 to 90 WPM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-semibold">How long does it take to learn touch typing?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              If you practice for 15 to 30 minutes every day, you can learn the basic finger placements of touch typing in about 1-2 weeks. Building muscle memory to the point where you don't need to think about the keys, and achieving a speed of 50+ WPM, usually takes 1 to 3 months of consistent daily practice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-semibold">Is QWERTY the best layout?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              QWERTY is the universal standard, making it the most practical layout to learn. However, it was not designed for optimal ergonomics or speed. Alternative layouts like DVORAK and Colemak are designed to minimize finger travel distance and place the most commonly used letters on the home row. While they can be slightly faster and more comfortable, the learning curve and lack of universal availability make QWERTY the default choice for most people.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-semibold">Does a mechanical keyboard make you type faster?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              A mechanical keyboard won't magically double your speed, but it can provide a modest increase (5-10%) for many typists. The tactile feedback (knowing exactly when the key registers without bottoming out) helps reduce errors and typing fatigue, which indirectly increases your sustainable typing speed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-semibold">Why is my typing speed dropping?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Typing speed fluctuations are normal. Common reasons for a temporary drop include physical fatigue, cold hands (which reduces dexterity), lack of focus, or switching to a new, unfamiliar keyboard. If you are learning touch typing after years of hunting and pecking, your speed will drastically drop initially as you overwrite bad muscle memory—this is normal, stick with it!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  );
}
