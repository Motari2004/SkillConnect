import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Search, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">SkillConnect</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/find-jobs" className="text-sm font-medium hover:text-primary">
              Find Jobs
            </Link>
            <Link href="/find-talent" className="text-sm font-medium hover:text-primary">
              Find Talent
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connect with the right skills and opportunities
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  SkillConnect brings together talented professionals and businesses looking for skills. Post a job or
                  offer your expertise today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/find-talent">
                    <Button size="lg" className="w-full sm:w-auto">
                      Find Talent <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/find-jobs">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Find Jobs <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] rounded-lg bg-muted p-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
                <div className="relative h-full flex items-center justify-center">
                 
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">How SkillConnect Works</h2>
              <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
                A simple process to connect talent with opportunities
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-muted-foreground mt-2">
                  Sign up and create a detailed profile showcasing your skills or company needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Post or Apply</h3>
                <p className="text-muted-foreground mt-2">
                  Post a job listing or offer your skills. Browse opportunities that match your expertise.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect & Collaborate</h3>
                <p className="text-muted-foreground mt-2">
                  Find the perfect match, connect directly, and start working together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Popular Skill Categories</h2>
              <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
                Browse through the most in-demand skills on our platform
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Web Development",
                "Graphic Design",
                "Digital Marketing",
                "Content Writing",
                "Mobile Development",
                "Data Analysis",
                "UI/UX Design",
                "Video Production",
              ].map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-medium">{category}</h3>
                  <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Success Stories</h2>
              <p className="text-muted-foreground mt-4 max-w-[700px] mx-auto">
                Hear from professionals and businesses who found success on SkillConnect
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=48&width=48&text=User${i}`}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">User Name {i}</h4>
                      <p className="text-sm text-muted-foreground">Professional Title</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "SkillConnect helped me find the perfect opportunity to showcase my skills. The platform is
                    intuitive and connecting with clients was seamless."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
              Join thousands of professionals and businesses already connecting on SkillConnect
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg">Create an Account</Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">SkillConnect</h3>
              <p className="text-sm text-muted-foreground">Connecting talent with opportunities worldwide.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Talent</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/find-jobs" className="text-muted-foreground hover:text-foreground">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/create-profile" className="text-muted-foreground hover:text-foreground">
                    Create Profile
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="text-muted-foreground hover:text-foreground">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/find-talent" className="text-muted-foreground hover:text-foreground">
                    Browse Talent
                  </Link>
                </li>
                <li>
                  <Link href="/post-job" className="text-muted-foreground hover:text-foreground">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SkillConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
