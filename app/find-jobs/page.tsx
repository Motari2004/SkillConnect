import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Briefcase, Clock, DollarSign, MapPin, Search } from "lucide-react"

export default function FindJobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">SkillConnect</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/find-jobs" className="text-sm font-medium text-primary">
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

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Your Perfect Job</h1>
            <p className="mt-2 text-muted-foreground">Browse thousands of job opportunities from top companies</p>
          </div>

          <div className="mb-8 rounded-lg border bg-card p-4 shadow-sm">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Job title, keywords, or company" className="pl-8" />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                    <SelectItem value="admin">Admin Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="anywhere">Anywhere</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Search Jobs</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h3 className="mb-4 font-medium">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Job Type</h4>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <input type="checkbox" id={type.toLowerCase()} className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor={type.toLowerCase()} className="text-sm">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Experience Level</h4>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={level.toLowerCase().replace(/\s+/g, "-")}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label htmlFor={level.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Salary Range</h4>
                    <Slider defaultValue={[50000]} max={150000} step={1000} className="py-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">$0</span>
                      <span className="text-xs font-medium">$50,000</span>
                      <span className="text-xs text-muted-foreground">$150,000+</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Date Posted</h4>
                    <div className="space-y-2">
                      {["Last 24 hours", "Last 3 days", "Last 7 days", "Last 14 days", "Last 30 days"].map((date) => (
                        <div key={date} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="date-posted"
                            id={date.toLowerCase().replace(/\s+/g, "-")}
                            className="h-4 w-4 rounded-full border-gray-300"
                          />
                          <label htmlFor={date.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                            {date}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Popular Searches</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["React Developer", "UX Designer", "Content Writer", "Marketing Manager", "Data Analyst"].map(
                    (search) => (
                      <Button key={search} variant="outline" size="sm" className="w-full justify-start">
                        {search}
                      </Button>
                    ),
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 1-10 of 256 jobs</p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="relevant">Most Relevant</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "TechCorp Inc.",
                    location: "Remote",
                    type: "Full-time",
                    salary: "$90,000 - $120,000",
                    posted: "2 days ago",
                    description:
                      "We're looking for a Senior Frontend Developer with 5+ years of experience in React, TypeScript, and modern frontend frameworks.",
                  },
                  {
                    title: "UX/UI Designer",
                    company: "DesignHub",
                    location: "New York, NY",
                    type: "Full-time",
                    salary: "$75,000 - $95,000",
                    posted: "3 days ago",
                    description:
                      "Join our creative team as a UX/UI Designer to create beautiful, intuitive interfaces for our clients' digital products.",
                  },
                  {
                    title: "Content Marketing Specialist",
                    company: "GrowthMedia",
                    location: "Remote",
                    type: "Contract",
                    salary: "$50 - $65 / hour",
                    posted: "1 week ago",
                    description:
                      "We need a Content Marketing Specialist to develop and execute content strategies that drive engagement and conversions.",
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Innovate Solutions",
                    location: "San Francisco, CA",
                    type: "Full-time",
                    salary: "$100,000 - $130,000",
                    posted: "Just now",
                    description:
                      "Looking for a Full Stack Developer proficient in Node.js, React, and database technologies to join our growing team.",
                  },
                  {
                    title: "Data Analyst",
                    company: "DataDriven",
                    location: "Remote",
                    type: "Part-time",
                    salary: "$40 - $55 / hour",
                    posted: "5 days ago",
                    description:
                      "Seeking a Data Analyst to help us extract insights from our customer data and improve our product offerings.",
                  },
                ].map((job, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Save
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-sm">{job.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Briefcase className="mr-1 h-3 w-3" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <DollarSign className="mr-1 h-3 w-3" />
                          {job.salary}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/50 px-6 py-3">
                      <div className="flex items-center justify-between w-full">
                        <Link href={`/jobs/${i}`}>
                          <Button variant="link" className="h-auto p-0 text-primary">
                            View Details
                          </Button>
                        </Link>
                        <Link href={`/jobs/${i}/apply`}>
                          <Button size="sm">Apply Now</Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 py-4">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  12
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
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
