import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export default function ProgramComparison() {
  const features = [
    "Personalized Workout Plan",
    "Nutrition Guidance",
    "1-on-1 Coaching",
    "Progress Tracking",
    "Access to Mobile App",
    "Group Classes",
  ]

  const programs = [
    { name: "Basic", price: "$49/month", features: [true, true, false, true, false, false] },
    { name: "Pro", price: "$99/month", features: [true, true, true, true, true, false] },
    { name: "Elite", price: "$149/month", features: [true, true, true, true, true, true] },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Program Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              {programs.map((program, index) => (
                <TableHead key={index}>{program.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, featureIndex) => (
              <TableRow key={featureIndex}>
                <TableCell>{feature}</TableCell>
                {programs.map((program, programIndex) => (
                  <TableCell key={programIndex}>
                    {program.features[featureIndex] ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Price</TableCell>
              {programs.map((program, index) => (
                <TableCell key={index}>{program.price}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

