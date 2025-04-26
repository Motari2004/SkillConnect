import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bell, Briefcase, Calendar, Clock, MessageSquare, Plus, Search, Settings, User } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">SkillConnect</span>
            </Link>
            <div className="hidden md:flex md:w-80 lg:w-96">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg?height=32&width=32&text=U"
                width={32}
                height={32}
                alt="User"
                className="rounded-full"
              />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 lg:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <h2 className="px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
            </div>
            <div className="flex-1">
              <nav className="grid gap-1 px-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
                >
                  <BarChart className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
                <Link
                  href="/dashboard/jobs"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Jobs</span>
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
                <Link
                  href="/dashboard/calendar"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Calendar</span>
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, User!</p>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Applications</CardTitle>
                      <User className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+5 since yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Messages</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">+2 unread</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Next: Today at 2:00 PM</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Recent Job Postings</CardTitle>
                      <CardDescription>Your most recent job postings and their status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: "Senior Web Developer", applicants: 12, status: "Active", date: "2 days ago" },
                          { title: "UX Designer", applicants: 8, status: "Active", date: "5 days ago" },
                          { title: "Marketing Specialist", applicants: 4, status: "Active", date: "1 week ago" },
                          { title: "Content Writer", applicants: 0, status: "Draft", date: "Just now" },
                        ].map((job, i) => (
                          <div key={i} className="flex items-center justify-between rounded-md border p-3">
                            <div>
                              <h3 className="font-medium">{job.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {job.applicants} applicants • Posted {job.date}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  job.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {job.status}
                              </span>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-center">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-3.5 w-3.5" />
                          <span>Post New Job</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Upcoming Schedule</CardTitle>
                      <CardDescription>Your meetings and deadlines for the week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: "Interview with John Doe", type: "Interview", time: "Today, 2:00 PM" },
                          { title: "Project Deadline: Website Redesign", type: "Deadline", time: "Tomorrow, 11:59 PM" },
                          { title: "Team Meeting", type: "Meeting", time: "Wed, 10:00 AM" },
                          { title: "Interview with Jane Smith", type: "Interview", time: "Thu, 3:30 PM" },
                        ].map((event, i) => (
                          <div key={i} className="flex items-center gap-4 rounded-md border p-3">
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                event.type === "Interview"
                                  ? "bg-blue-100 text-blue-700"
                                  : event.type === "Deadline"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-green-100 text-green-700"
                              }`}
                            >
                              {event.type === "Interview" ? (
                                <User className="h-5 w-5" />
                              ) : event.type === "Deadline" ? (
                                <Clock className="h-5 w-5" />
                              ) : (
                                <Calendar className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{event.title}</h3>
                              <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>View your job posting and application analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/50">
                      <p className="text-muted-foreground">Analytics chart placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generate and view reports about your activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/50">
                      <p className="text-muted-foreground">Reports placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
