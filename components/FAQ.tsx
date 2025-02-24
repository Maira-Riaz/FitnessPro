import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How often should I work out?",
      answer:
        "The frequency of your workouts depends on your fitness goals and current level. Generally, we recommend 3-5 sessions per week for optimal results, with rest days in between for recovery.",
    },
    {
      question: "Do I need to follow a special diet?",
      answer:
        "While we provide nutrition guidance, you don't need to follow a strict diet. We focus on balanced, sustainable eating habits that complement your fitness goals.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Results vary from person to person, but most clients start seeing noticeable changes within 4-6 weeks of consistent training and proper nutrition.",
    },
    {
      question: "Can I do the workouts at home?",
      answer:
        "Yes, many of our programs include home workout options. We also offer online coaching for those who prefer to train at home or while traveling.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

