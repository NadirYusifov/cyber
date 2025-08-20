import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminHome() {
  return (
      <section className="w-full mt-5">
        <div className="container mx-auto px-4">
          <article className="mb-10">
            <h3 className="text-[3rem] font-medium">Dashboard</h3>
          </article>
          <div className="flex items-center justify-center gap-4">
            <Card className="w-56 text-center">
              <CardHeader>Total Value</CardHeader>
              <CardTitle>$0</CardTitle>
            </Card>
            <Card className="w-56 text-center">
              <CardHeader>Total Value</CardHeader>
              <CardTitle>$0</CardTitle>
            </Card>
            <Card className="w-56 text-center">
              <CardHeader>Total Value</CardHeader>
              <CardTitle>$0</CardTitle>
            </Card>
          </div>
        </div>
      </section>
  )
}
