import { Helmet } from "react-helmet-async";
import { Terminal, CheckSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ContactCTA } from "@/components/home/ContactCTA";


const tiers = [
  {
    name: "Developer",
    price: "$0",
    description: "Essential access for hobbyists & individuals building their first AI applications.",
    features: [
      "Access to Austral-Core-8B",
      "8K context window",
      "60 Requests / Minute",
      "Shared global edge nodes",
      "Community support"
    ],
    cta: "Get Started Free",
    highlight: false
  },
  {
    name: "Pro",
    price: "$20",
    description: "For power users requiring priority access to flagship intelligence.",
    features: [
      "Priority Austral-MoE-Instruct",
      "32K expanded context",
      "Vision & Audio inputs",
      "Standard DDoS protection",
      "Email support"
    ],
    cta: "Upgrade to Pro",
    highlight: false
  },
  {
    name: "Team",
    price: "$30",
    description: "Designed for engineering teams collaborating on AI infrastructure.",
    features: [
      "Everything in Pro",
      "Higher API rate limits",
      "Shared admin workspace",
      "Zero data retention",
      "Bring-Your-Own-Key (BYOK)"
    ],
    cta: "Start Team Trial",
    highlight: true
  },
  {
    name: "Scale",
    price: "$250",
    description: "Production infrastructure for scaling applications.",
    features: [
      "Pay-as-you-go tokens",
      "Dedicated edge routing",
      "Model fine-tuning",
      "Advanced WAF rules",
      "24/7 Priority support"
    ],
    cta: "Scale Now",
    highlight: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Air-gapped security and SLAs for Fortune 500 compliance.",
    features: [
      "Bare-metal VPC deployments",
      "Unlimited context window",
      "SOC2, HIPAA, GDPR certified",
      "Dedicated Technical Account Mgr",
      "99.99% Uptime SLA"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm mx-auto">
            <Terminal className="w-3 h-3" />
            <span>austral/pricing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
            Transparent pricing.
          </h1>
          
          <p className="text-lg text-gray-600 font-mono leading-relaxed max-w-2xl mx-auto">
            From consumption-based API access to fully custom enterprise engagements. No hidden fees, no vendor lock-in.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`flex flex-col h-full p-6 lg:p-8 ${tier.highlight ? "bg-blue-50/30" : "bg-white"}`}
              >
                <div className="mb-6">
                  <h3 className="text-base font-bold text-gray-900 font-serif mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 font-serif italic mb-3">
                    {tier.price}
                    {tier.price !== "Custom" && tier.price !== "$0" && <span className="text-sm font-sans not-italic text-gray-500 ml-1">/mo</span>}
                  </div>
                  <p className="text-xs font-mono text-gray-600 leading-relaxed min-h-[4rem]">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-gray-600">
                      <CheckSquare className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="mt-auto">
                  <Button 
                    className={`w-full rounded-sm font-mono text-xs shadow-sm ${
                      tier.highlight 
                        ? "bg-blue-600 hover:bg-blue-700 text-white border border-blue-700" 
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
                    }`}
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    {tier.cta} <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
