'use client';
// Quick FAQ Component for Homepage - Shows 4 most common questions

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqData } from '@/lib/faqData';

// Get the 4 specific most common questions
const getCommonQuestions = () => {
  const questions = [
    // 1. "What are the age requirements?"
    faqData
      .find((cat) => cat.category === 'Age Requirements & Residency')
      ?.questions.find((q) => q.question.toLowerCase().includes('age requirements')),
    // 2. "What are the monthly HOA fees?"
    faqData
      .find((cat) => cat.category === 'HOA & Fees')
      ?.questions.find((q) => q.question.toLowerCase().includes('hoa fees')),
    // 3. "Are pets allowed?"
    faqData
      .find((cat) => cat.category === 'Pets & Lifestyle')
      ?.questions.find((q) => q.question.toLowerCase().includes('pets allowed')),
    // 4. "Is Del Webb North Ranch gated?"
    faqData
      .find((cat) => cat.category === 'About the Community')
      ?.questions.find((q) => q.question.toLowerCase().includes('gated')),
  ].filter(Boolean) as Array<{ question: string; answer: string }>; // Remove any undefined values

  return questions;
};

export default function QuickFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const commonQuestions = getCommonQuestions();

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-playfair">
              Common Questions
            </h2>
            <p className="text-base md:text-lg text-text-dark">
              Quick answers about Del Webb North Ranch
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {commonQuestions.map((faq, index) => {
              const isOpen = openIndex === index;
              const ariaExpanded = isOpen ? 'true' : 'false';

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-two overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 min-h-[44px] flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                    aria-expanded={ariaExpanded}
                  >
                    <span className="font-semibold text-text-dark pr-4 flex-1">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-6 py-4 border-t border-gray-200 bg-stone-50">
                      <p className="text-text-dark leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] min-w-[44px] bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
