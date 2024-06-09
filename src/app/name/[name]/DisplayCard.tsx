import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


type CardProps = React.ComponentProps<typeof Card>

export function DisplayCard({ className, name, age, nat, gen,...props }: {
    className?: any ,
    name: string,
    age: number,
    gen: string,
    nat: string,
    props?: any 
}) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Hi {name}</CardTitle>
        <CardDescription>The predict value of the given data.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center rounded-md border p-4">
          <div className="flex gap-3 justify-evenly w-full">
            <p className="text-sm font-medium ">
              Age Predicted
            </p>
            <p className="text-sm text-medium">
              {age}
            </p>
          </div>
        </div>
        <div className=" flex items-center rounded-md border p-4">
          <div className="flex gap-3 justify-evenly w-full">
            <p className="text-sm font-medium ">
              Nationality
            </p>
            <p className="text-sm text-medium">
              {nat}
            </p>
          </div>
        </div>
        <div className=" flex items-center rounded-md border p-4">
          <div className="flex gap-3 justify-evenly w-full">
            <p className="text-sm font-medium ">
              Gender
            </p>
            <p className="text-sm text-medium">
              {gen}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-center">
        <Link href={"/name"}>
        <Button className="w-full">
            Predict Next
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
