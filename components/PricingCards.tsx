import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const tiers = [
  {
    name: "Starter",
    id: "",
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message chat limit in chats",
      "2 Participant limit in chat",
      "3 chat rooms limit",
      "supports 2 languages",
      "48 hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "#si_23sdfSFfscjvr",
    href: "#",
    priceMonthly: "$7.99",
    description: "Get unlimitted chatting right away with anyone, anywhere!",
    features: [
      "unlimited messages in chats",
      "unlimited participants in chat",
      "unlimited chat rooms",
      "supports up to 10 languages",
      "Multimedia in chats(comming soon)",
      "1 hour dedicated support response time",
      "Early access in new features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {redirect ? (
              <Link
                href="/register"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm
              font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              cursor-pointer disabled:opacity-80"
              >
                Get Started today
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
