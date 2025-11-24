import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Brain, Users, BookOpen, Pause } from "lucide-react";

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

            <div className="mb-16 flex flex-col items-center gap-6 animate-fade-up [animation-delay:300ms]">
              <Button 
                onClick={handleTake10}
                size="lg"
                className="h-14 px-8 text-lg shadow-[var(--hero-shadow)] hover:shadow-xl transition-all duration-300 bg-[var(--calm-gradient)] hover:scale-105"
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

      {/* When to Use It */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              When to Use <span className="text-gradient">Take 10</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognize the signs of escalation and interrupt the spiral
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
            {[
              {
                icon: Users,
                title: "Heated Arguments",
                description: "When voices are raised and emotions are running high, Take 10 creates breathing room."
              },
              {
                icon: Brain,
                title: "Negative Affect Spirals",
                description: "Break the cycle when anger feeds more anger and the situation escalates rapidly."
              },
              {
                icon: Heart,
                title: "Bullying or Harassment",
                description: "Anyone can invoke Take 10 as a circuit breaker to prevent harmful behavior."
              },
              {
                icon: Pause,
                title: "Impulsive Reactions",
                description: "Catch yourself before saying or doing something you'll regret. Create space for choice."
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

      {/* Research & Evidence */}
      <section className="py-20 md:py-32">
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
                className="h-12 px-6 bg-[var(--calm-gradient)] hover:scale-105 transition-transform"
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-6 hover:bg-primary/10 transition-colors"
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
