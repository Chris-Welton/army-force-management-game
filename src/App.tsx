import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto p-8">
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              Army Force Management
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Interactive learning tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="default">Check Answers</Button>
              <Button variant="outline">Reset</Button>
              <Button variant="secondary">Show Answers</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App