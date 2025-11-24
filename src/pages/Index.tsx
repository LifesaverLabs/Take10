import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Brain, Users, BookOpen, Pause, CheckCircle2, XCircle } from "lucide-react";
import bookCover from "@/assets/unforgiving-places-cover.jpg";
import barBystanderGif from "@/assets/Take_10_Bar_Bystander_Intervention.gif";
import bowingGif from "@/assets/Take_10_Bar_Three_Indian_Men_Bow_Low.gif";
import elderlyMenGif from "@/assets/Take_10_Bystander_Intervention_Elderly_Men.gif";
import groceryStoreGif from "@/assets/Take_10_Grocery_Store_Asian_Couple.gif";

const Index = () => {
  const [count, setCount] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused && count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setIsPaused(false);
      setCount(10);
    }
  }, [count, isPaused]);

  const handleTake10 = () => {
    setIsPaused(true);
    setCount(10);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(195,65%,45%,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(175,55%,50%,0.1),transparent_50%)]" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary animate-fade-up">
              <Pause className="h-4 w-4" />
              A Simple Phrase That Can Change Everything
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl animate-fade-up [animation-delay:100ms]">
              <span className="text-gradient">Take 10</span>
            </h1>
            
            <p className="mb-12 text-xl text-muted-foreground md:text-2xl animate-fade-up [animation-delay:200ms]">
              A de-escalation phrase that creates space for calm.
              <br />
              When tensions rise, take 10 seconds, minutes, or hours—whatever you need.
            </p>

            <div className="mb-16 flex flex-col items-center gap-6 animate-fade-up [animation-delay:300ms] opacity-100">
              <Button 
                onClick={handleTake10}
                size="lg"
                className="h-14 px-8 text-lg shadow-[var(--hero-shadow)] hover:shadow-xl transition-all duration-300 bg-[var(--calm-gradient)] hover:scale-105 opacity-100 text-primary-foreground"
              >
                <Clock className="mr-2 h-5 w-5" />
                Try It Now
              </Button>
              
              {isPaused && (
                <div className="flex flex-col items-center gap-2 animate-breathe">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-6xl font-bold text-primary ring-4 ring-primary/20">
                    {count}
                  </div>
                  <p className="text-sm text-muted-foreground">Take a breath...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              How <span className="text-gradient">Take 10</span> Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible intervals for different situations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-5xl">
            {[
              {
                icon: Clock,
                time: "10 Seconds",
                description: "A quick pause to breathe and reset. Perfect for catching yourself before reacting."
              },
              {
                icon: Heart,
                time: "10 Minutes",
                description: "Step away, get some space, calm your nervous system. Return with fresh perspective."
              },
              {
                icon: Brain,
                time: "10 Hours+",
                description: "For deeper conflicts, sleep on it. Give yourself time to process and think clearly."
              }
            ].map((item, i) => (
              <Card 
                key={i} 
                className="border-border/50 bg-card/50 backdrop-blur-sm shadow-[var(--card-shadow)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.time}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Take 10 in Action */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="text-gradient">Take 10</span> in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Real scenarios showing how Take 10 interrupts conflict escalation
            </p>
            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Try completing or chanting the phrase:</strong>
                  <br />
                  <span className="text-xl font-semibold italic">"Whether 10 seconds, 10 minutes, or 10 hours..."</span>
                  <br />
                  <span className="text-muted-foreground mt-2 block">
                    This reminds everyone that the pause is flexible and respects each person's needs.
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mx-auto max-w-5xl mb-12">
            {[
              {
                image: barBystanderGif,
                title: "Bar Bystander Intervention",
                description: "A bystander steps in to interrupt escalating tensions before they spiral into conflict."
              },
              {
                image: elderlyMenGif,
                title: "Community De-escalation",
                description: "Community members recognize the warning signs and speak up to create space for calm."
              },
              {
                image: groceryStoreGif,
                title: "Everyday Situations",
                description: "Take 10 works in daily life—wherever tensions rise, anyone can intervene."
              },
              {
                image: bowingGif,
                title: "Respectful Acknowledgment",
                description: "After saying Take 10, bowing to each other shows mutual respect—if consistent with your beliefs."
              }
            ].map((scenario, i) => (
              <Card key={i} className="border-border/50 bg-card backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img 
                      src={scenario.image} 
                      alt={scenario.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                    <p className="text-muted-foreground">{scenario.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-accent/5 border-accent/20 mx-auto max-w-3xl">
            <CardContent className="pt-6">
              <div className="text-center">
                <Heart className="mx-auto mb-4 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  A Sign of Respect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  After invoking Take 10, consider bowing to each other as a sign of mutual respect—if that's consistent with your beliefs and cultural practices. This simple gesture acknowledges the humanity in each person and reinforces that we're all working toward understanding, not victory.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Civic Duty Section */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-card backdrop-blur-sm shadow-[var(--hero-shadow)]">
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-8">
                  <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    It's Your <span className="text-gradient">Civic Duty</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    We all have a responsibility to recognize and interrupt escalation
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-foreground space-y-6">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">Bystanders and participants alike:</strong> It's your duty to recognize the symptoms of a superheated argument and <span className="font-semibold">interject immediately with "Take 10"</span>.
                  </p>

                  <p className="text-lg leading-relaxed">
                    You've got to <strong>speak up</strong>—or it could emotionally spiral and get harder to solve. When we see the signs of escalation, staying silent isn't neutral. It allows harm to grow.
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <p className="text-lg font-medium mb-2 text-primary">Part of Our Civic Obligation</p>
                    <p className="text-muted-foreground">
                      It's part of our <em>civigion</em>—our civic duty—that we recognize these moments and help each other step back from and reconsider superheated arguments. We protect each other by creating space for choice.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    <strong>You're still free</strong> to return to the conversation in 10 seconds if you want. Take 10 doesn't silence anyone—it gives everyone a chance to consider whether pressing forward angrily and continuing a boiling conflict is the <span className="font-semibold text-primary">right, just move</span>.
                  </p>

                  <div className="bg-accent/5 border border-accent/20 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      The Power of Bystander Intervention
                    </h3>
                    <p className="text-muted-foreground">
                      Research shows that bystander intervention is one of the most effective ways to prevent harm. When someone interrupts an escalating situation, it gives everyone permission to pause, breathe, and choose a better path forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Use It */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Recognize the <span className="text-gradient">Warning Signs</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn to spot escalation symptoms and speak up immediately
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
            {[
              {
                icon: Users,
                title: "Raised Voices & Aggressive Tone",
                description: "Volume increases, tone becomes harsh. Don't wait—interject with Take 10 before it spirals further."
              },
              {
                icon: Brain,
                title: "Negative Affect Spirals",
                description: "Anger feeding anger, each response escalating. Speak up immediately to break the cycle."
              },
              {
                icon: Heart,
                title: "Personal Attacks Begin",
                description: "Shifting from issues to insults. This is your moment to step in: 'Take 10, everyone.'"
              },
              {
                icon: Pause,
                title: "Physical Tension Rising",
                description: "Body language changes—clenched fists, invading space. Your civic duty is to interrupt now."
              }
            ].map((item, i) => (
              <Card key={i} className="border-border/50 bg-card backdrop-blur-sm">
                <CardContent className="flex gap-4 pt-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Not "Calm Down"? */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why Not Just Say <span className="text-gradient">"Calm Down"</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                "Take 10" is more effective than "Calm Down" for de-escalation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-destructive/20 bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold">"Calm Down" Often Fails</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Feels dismissive and invalidating of emotions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Implies the person is overreacting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Offers no actionable next step</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Can actually escalate the situation further</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold">"Take 10" Works Better</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provides a clear, concrete action</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Respects everyone's autonomy and choice</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Creates space without judgment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Gets more work done by interrupting the spiral</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-center">
                  <strong className="text-primary">"Take 10"</strong> doesn't tell anyone how to feel or what to do next. It simply creates a pause—a moment to step back and choose your response. That choice and respect make all the difference in de-escalation effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Promotion */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Recommended Reading
              </h2>
              <p className="text-lg text-muted-foreground">
                Deeper insights into violence interruption and prevention
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-card shadow-[var(--hero-shadow)]">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src={bookCover} 
                      alt="Unforgiving Places: The Unexpected Origins of Gun Violence book cover"
                      className="w-48 h-auto shadow-xl rounded-lg"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Unforgiving Places: The Unexpected Origins of Gun Violence
                      </h3>
                      <p className="text-lg text-primary font-semibold">by Jens Ludwig</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      A groundbreaking examination of gun violence that goes beyond the usual debates about gun access. Ludwig explores how creating "forgiving places"—environments that interrupt conflict spirals and provide moments for de-escalation—can dramatically reduce violence. This research-backed approach aligns perfectly with the Take 10 philosophy of interrupting escalation patterns before they lead to harm.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The book demonstrates that violence isn't just about guns; it's about the environments and social practices that either encourage or interrupt conflict escalation. Take 10 represents exactly the kind of cultural intervention Ludwig advocates for: simple, accessible tools that help communities become more "forgiving" by creating space for choice and de-escalation.
                    </p>
                    <div className="pt-4">
                      <Button 
                        size="lg"
                        className="bg-[var(--calm-gradient)] hover:scale-105 transition-transform opacity-100 text-primary-foreground"
                        asChild
                      >
                        <a href="https://press.uchicago.edu/ucp/books/book/chicago/U/bo244203115.html" target="_blank" rel="noopener noreferrer">
                          Learn More About the Book
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Evidence */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Research & Evidence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take 10 is grounded in proven violence interruption and conflict de-escalation research
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-[var(--card-shadow)]">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Violence Interruption Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Studies on violence interruption programs like Cure Violence show that creating pause moments and interrupting escalation patterns can reduce violent incidents by 40-70% in high-risk communities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Emotional Regulation & Cooling Off Periods</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research in psychology demonstrates that brief cooling-off periods significantly improve emotional regulation and decision-making. The prefrontal cortex—responsible for rational thinking—comes back online when we step away from high-arousal situations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Conflict Resolution & De-escalation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experts in conflict resolution emphasize the importance of "taking space" before responding. This aligns with evidence-based practices in domestic violence prevention, workplace conflict resolution, and restorative justice.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Resources:</strong> Cure Violence Global, National Institute of Justice studies on violence interruption, American Psychological Association research on emotional regulation, and conflict resolution frameworks from the Harvard Negotiation Project.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Share <span className="text-gradient">Take 10</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Help spread this simple but powerful practice. When someone says "Take 10," everyone benefits from the pause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="h-12 px-6 bg-[var(--calm-gradient)] hover:scale-105 transition-transform opacity-100 text-primary-foreground shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-6 hover:bg-primary/10 transition-colors opacity-100 border-primary text-primary shadow-md"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Take 10',
                      text: 'Take 10 - A de-escalation phrase that creates space for calm. Whether 10 seconds, 10 minutes, or 10 hours.',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
              >
                Share This Resource
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Take 10 • A de-escalation practice for everyone</p>
          <p className="mt-2">
            <a href="https://take10.us" className="hover:text-primary transition-colors">take10.us</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
