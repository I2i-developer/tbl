export const brand = {
  name: "Thok Bajao Lead",
  short: "TBL",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://thokbajaolead.vercel.app"
  ).replace(/\/+$/, ""),
};
export const locations = [
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    region: "South",
    aliases: "Bengaluru",
    image: "bangalore",
    focus: "A city of possibilities. A pipeline with purpose.",
    description:
      "From neighbourhood-focused residential projects to larger community developments, put your project in front of people looking in the right part of Bangalore.",
    note: "A neighbourhood-first approach",
    areas: "Whitefield, Sarjapur Road, North Bangalore and Electronic City",
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    state: "Beyond Bangalore",
    region: "South",
    aliases: "",
    image: "bangalore",
    focus: "Think beyond one city.",
    description:
      "Reach property audiences across Karnataka with a campaign built around the city, language and project you serve.",
    note: "A wider regional perspective",
    areas: "Mysuru, Mangaluru, Hubballi and your selected local markets",
  },
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    state: "Southern growth markets",
    region: "South",
    aliases: "Andra Pradesh",
    image: "pune",
    focus: "Local ambition. Relevant conversations.",
    description:
      "Bring location, property type and buyer requirements together for your next real estate campaign in Andhra Pradesh.",
    note: "Built around your project catchment",
    areas: "Visakhapatnam, Vijayawada, Guntur and your project location",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    aliases: "Bombay",
    image: "mumbai",
    focus: "Find your audience in a city that never stops.",
    description:
      "In a market of distinct neighbourhoods and property segments, focus your outreach on the location and buyer profile that fit your project.",
    note: "Micro-markets matter",
    areas: "Mumbai, Thane and Navi Mumbai, as agreed in your campaign brief",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West",
    aliases: "",
    image: "pune",
    focus: "Make the next move in Pune.",
    description:
      "Connect your project story to the needs of homebuyers across Pune, with geography and project positioning at the centre of your campaign.",
    note: "From project story to buyer enquiry",
    areas: "Hinjawadi, Wakad, Kharadi and your selected neighbourhoods",
  },
  {
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    region: "West",
    aliases: "Nasik",
    image: "pune",
    focus: "A focused approach for Nashik.",
    description:
      "Give residential projects, plotted developments and local real estate businesses a clear plan for reaching their intended audience.",
    note: "Local relevance from the start",
    areas: "Nashik city and your project’s surrounding catchment",
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    state: "Northern capital region",
    region: "North",
    aliases: "Delhi New Delhi Noida Gurgaon Gurugram",
    image: "delhi",
    focus: "One region. Many different buyer journeys.",
    description:
      "Give each NCR project its own audience strategy, reflecting location, connectivity, property segment and sales priorities.",
    note: "A regional view with local precision",
    areas: "Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Faridabad",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    aliases: "",
    image: "hero",
    focus: "Build your next chapter in Lucknow.",
    description:
      "Start with a clear project proposition and turn it into a locally relevant campaign for your real estate sales team.",
    note: "Clear positioning, considered outreach",
    areas: "Gomti Nagar, Sultanpur Road and your project catchment",
  },
  {
    slug: "gorakhpur",
    name: "Gorakhpur",
    state: "Uttar Pradesh",
    region: "North",
    aliases: "Gurakpur Gorakpur",
    image: "hero",
    focus: "Closer to the people who matter.",
    description:
      "Build awareness and enquiries for your Gorakhpur project with a brief grounded in location and buyer requirements.",
    note: "An audience plan for your local market",
    areas: "Gorakhpur and the surrounding market you serve",
  },
  {
    slug: "patna",
    name: "Bihar (Patna)",
    state: "Bihar",
    region: "East & Central",
    aliases: "Bihar Patna",
    image: "hero",
    focus: "Your Patna project, with a clearer direction.",
    description:
      "Shape a lead generation plan around your property segment, target geography and sales capacity in Patna.",
    note: "Project fit comes first",
    areas: "Patna and surrounding project catchments",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    aliases: "",
    image: "jaipur",
    focus: "Put your Jaipur project on the radar.",
    description:
      "Make the project proposition easy to understand, then build outreach around the people and places that suit it.",
    note: "A sharper story for your project",
    areas: "Jaipur and your selected residential corridors",
  },
  {
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    state: "Central India",
    region: "East & Central",
    aliases: "Chattisgarh",
    image: "pune",
    focus: "Regional understanding. Project-level focus.",
    description:
      "Plan lead generation for your Chhattisgarh business with attention to city, catchment and the requirements of your sales team.",
    note: "A practical regional approach",
    areas: "Raipur, Bhilai, Bilaspur and your selected project location",
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    region: "North",
    aliases: "",
    image: "hero",
    focus: "Give your Kanpur project a focused start.",
    description:
      "Align your local property offering with a clear audience, useful enquiry information and a considered follow-up plan.",
    note: "A plan your sales team can use",
    areas: "Kanpur and your agreed local catchment",
  },
  {
    slug: "bareilly",
    name: "Bareilly",
    state: "Uttar Pradesh",
    region: "North",
    aliases: "Barelli",
    image: "hero",
    focus: "Local property. Meaningful connections.",
    description:
      "Reach the intended audience for your Bareilly property business with a campaign brief that puts buyer fit and local context first.",
    note: "Built for the market you serve",
    areas: "Bareilly city and surrounding project locations",
  },
] as const;
export const services = [
  {
    slug: "real-estate-leads",
    title: "Real estate lead generation",
    short: "The right people. The right project.",
    icon: "target",
    description:
      "A focused approach to finding property enquiries that match your project, location and buyer profile.",
    points: [
      "Audience and location planning",
      "Project-specific campaign messaging",
      "Agreed enquiry requirements",
      "Sales feedback and campaign review",
    ],
    detail:
      "A useful enquiry starts with a clear brief. We begin with what you are selling, where it is, who it suits and what your sales team needs to know. That becomes the foundation for your lead generation plan.",
  },
  {
    slug: "project-launches",
    title: "Project launch campaigns",
    short: "Give your launch a clear direction.",
    icon: "building",
    description:
      "Bring your project story, audience and enquiry journey together for a considered market introduction.",
    points: [
      "Project positioning and brief",
      "Launch audience planning",
      "Enquiry journey design",
      "Review against sales priorities",
    ],
    detail:
      "A launch needs more than visibility. It needs a project proposition people can understand and a practical route from interest to a sales conversation. We shape the campaign around your launch stage and location.",
  },
  {
    slug: "channel-partner-growth",
    title: "Broker & channel partner growth",
    short: "Build a pipeline around your portfolio.",
    icon: "users",
    description:
      "Put your local expertise and property portfolio at the centre of a focused enquiry-generation plan.",
    points: [
      "Portfolio and catchment planning",
      "Buyer requirement alignment",
      "Enquiry handover expectations",
      "A follow-up feedback loop",
    ],
    detail:
      "When your team represents several projects, clarity matters. We help frame the audience, geography and requirements around the portfolio you want to grow, so sales follow-up has a better starting point.",
  },
] as const;
export const steps = [
  {
    title: "Tell us what you’re building.",
    text: "Your project, your market, your goals. We start by understanding the business behind the brief.",
  },
  {
    title: "Find your local focus.",
    text: "Together, we define the audience, locations and buyer requirements that make sense for your project.",
  },
  {
    title: "Bring the plan to market.",
    text: "Agree on the campaign scope, enquiry information and handover process before getting started.",
  },
  {
    title: "Keep learning. Keep improving.",
    text: "Use sales-team feedback to review enquiry relevance and decide what to adjust next.",
  },
];
export const faqs = [
  {
    q: "Who do you work with?",
    a: "We work with real estate businesses, including builders, developers, brokers and channel partners. Start by sharing your project, the locations you serve and the kind of enquiries your team needs.",
  },
  {
    q: "Which locations do you cover?",
    a: "Our experience spans Bangalore, Karnataka, Andhra Pradesh, Mumbai, Pune, Nashik, Delhi NCR, Lucknow, Gorakhpur, Bihar (Patna), Jaipur, Chhattisgarh, Kanpur and Bareilly. Campaign scope is discussed for your particular location.",
  },
  {
    q: "Can you help with a new project launch?",
    a: "Yes. Share your project stage, launch plans, location and intended audience. We can discuss a suitable campaign scope and enquiry journey around those requirements.",
  },
  {
    q: "How do you define a relevant lead?",
    a: "That definition should be agreed before a campaign starts. It can include the project location, property type, budget range and information needed by your sales team. The right criteria depend on your business.",
  },
  {
    q: "Do you guarantee property sales?",
    a: "No. Enquiries and completed sales are different outcomes. Sales depend on factors including project fit, pricing, availability and follow-up. Campaign scope and expectations should be agreed clearly.",
  },
  {
    q: "How much does a campaign cost?",
    a: "The scope depends on your market, project stage, audience and campaign requirements. Share a brief so we can discuss an appropriate approach. We do not list fixed packages before understanding your project.",
  },
  {
    q: "What should I prepare before speaking to you?",
    a: "Bring your project name and location, property segment, target buyer, campaign goals and an indicative budget. If you already run campaigns, examples of sales feedback are useful too.",
  },
  {
    q: "Are the project examples on this website real results?",
    a: "The radar brief on our homepage is an illustration of campaign planning. It is not a live feed, a customer case study or a claim about campaign results.",
  },
];
export const articles = [
  {
    slug: "a-better-real-estate-campaign-brief",
    category: "Campaign planning",
    title: "A better brief builds a better campaign.",
    excerpt:
      "The questions to answer before your next real estate lead generation campaign.",
    time: "4 min read",
    image: "pune",
    sections: [
      [
        "Start with the property, not the platform",
        "Write down the project location, inventory type, stage and main reasons a buyer would consider it. Be specific about the offering. A residential apartment launch and a plotted development need different conversations.",
      ],
      [
        "Define who the project is for",
        "Describe the intended buyer in practical terms: preferred location, likely requirements, property segment and the budget range appropriate to the inventory. Keep assumptions separate from information your sales team has actually heard.",
      ],
      [
        "Agree on what the sales team needs",
        "List the enquiry information that helps your team start a useful conversation. Decide who receives it and how follow-up will work. Clear expectations help avoid a disconnect between marketing activity and sales priorities.",
      ],
      [
        "Make room for feedback",
        "Set a regular review point. Discuss which enquiries were relevant, what questions prospects asked and what your team learned. Use those observations to refine the campaign rather than judging it only by enquiry volume.",
      ],
    ],
  },
  {
    slug: "what-makes-a-property-lead-relevant",
    category: "Lead quality",
    title: "What makes a property lead relevant?",
    excerpt:
      "Look beyond a name and phone number. Start with the buyer’s requirements.",
    time: "3 min read",
    image: "bangalore",
    sections: [
      [
        "Relevance is specific to a project",
        "A person interested in one neighbourhood may not be a fit for another. Start with the location, property type and price segment of the actual inventory before describing an enquiry as relevant.",
      ],
      [
        "Write down your qualification criteria",
        "Decide which information your team needs, such as preferred area, property type, budget range and purchase timeframe. Agree on how unknown or incomplete information will be handled.",
      ],
      [
        "Separate intent from outcome",
        "An enquiry signals interest, not a completed sale. A useful review considers what the prospect asked for and how well the project met that requirement. Avoid treating every unanswered call as the same kind of issue.",
      ],
      [
        "Close the loop with the sales team",
        "Capture concise, consistent feedback from conversations. Reasons such as location mismatch, different budget or later purchase plans are more useful than a single vague quality label.",
      ],
    ],
  },
  {
    slug: "from-enquiry-to-sales-conversation",
    category: "Sales follow-up",
    title: "From enquiry to a useful conversation.",
    excerpt:
      "A practical handover checklist for real estate marketing and sales teams.",
    time: "4 min read",
    image: "mumbai",
    sections: [
      [
        "Give each enquiry an owner",
        "Agree on which team receives enquiries, who makes the first contact and how coverage works when someone is unavailable. A clear handover reduces confusion when campaigns become active.",
      ],
      [
        "Carry the context forward",
        "Include the project and campaign context alongside the enquiry information. Your sales team should know what the prospect saw and which property they asked about before starting a conversation.",
      ],
      [
        "Follow up with useful information",
        "Answer the buyer’s actual question. Share accurate project details and offer a relevant next step. Avoid making assumptions about readiness to purchase or promising availability that has not been checked.",
      ],
      [
        "Record outcomes consistently",
        "Use a small set of meaningful outcomes and capture the reason behind each. Review these with the marketing team so the next campaign decision reflects what is happening in real conversations.",
      ],
    ],
  },
] as const;
