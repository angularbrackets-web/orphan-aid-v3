import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes. Orphan Aid is a registered Canadian charity. Official tax receipts are issued for all donations, which can be used when filing your Canadian income tax return.",
  },
  {
    question: "Who can receive support?",
    answer:
      "Support is provided based on need — regardless of a child's religion, background, or ethnicity. Every orphan we serve is treated with equal dignity and care.",
  },
  {
    question: "Can I cancel a sponsorship at any time?",
    answer:
      "Absolutely. You have full flexibility. You can choose to donate once or commit to a monthly sponsorship, and you can cancel or change your sponsorship at any time — no questions asked.",
  },
  {
    question: "How is my money actually used?",
    answer:
      "We work with trusted local partners and schools to ensure aid is delivered sustainably. Funds are allocated to food, education (school fees and supplies), healthcare, and direct guardian assistance. We maintain rigorous financial management and publish regular impact reports.",
  },
  {
    question: "How do I know my donation is making a real difference?",
    answer:
      "You'll receive regular updates on your sponsored child or region, including how funds are being used and outcomes achieved. We are committed to full transparency in how we report our impact.",
  },
];

export function FAQAccordion() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion
      type="single"
      value={openItem}
      onValueChange={setOpenItem}
      className="w-full space-y-3"
    >
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          onMouseEnter={() => setOpenItem(`item-${i}`)}
          onMouseLeave={() => setOpenItem(undefined)}
          className="border border-[#263238]/10 rounded-2xl px-6 bg-white shadow-sm overflow-hidden hover:border-[#0d47a1]/20 hover:bg-[#f8faff] hover:shadow-[0_4px_20px_rgba(13,71,161,0.07)] transition-all duration-200"
        >
          <AccordionTrigger className="text-left text-base font-[Montserrat] font-semibold text-[#263238] hover:no-underline hover:text-[#0d47a1] py-5 transition-colors duration-200 [&>svg]:text-[#0d47a1]/50">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="font-[Inter] text-[#263238]/65 leading-relaxed text-sm pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
