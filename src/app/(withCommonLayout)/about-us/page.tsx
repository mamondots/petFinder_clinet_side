import assets from "@/assets";
import AboutServices from "./components/AboutServices/AboutServices";
import AboutMembers from "./components/AboutMembers/AboutMembers";
import AboutUsBanner from "./components/AboutUsBanner/AboutUsBanner";

const servicesData = [
  {
    image: assets.images.about_us_blog1,
    title: "Creating Families",
    sub_title: "Petco Love Adopt",
    description:
      "Bigger smiles. Warmer welcomes. Cozier naps and movie nights. When you adopt a pet, life gets better for you, your family, and the pet you bring home. With Petco Love Adopt, we facilitate adoptions for thousands of dogs, cats, rabbits, and other pets every day. See for yourself.",
    stats: "Over 6.5 million pets adopted since 1999.",
    additional_info:
      "We work closely with over 4,000 adoption partners nationwide to ensure every pet finds the right home. Each adoption comes with resources and support to help integrate the new family member seamlessly.",
    learn_more_link: "/about-us",
  },
  {
    image: assets.images.about_us_blog2,
    title: "Championing Health",
    sub_title: "Petco Love Care",
    description:
      "Love equals care. Petco Love champions initiatives to keep pets healthy by providing free pet vaccines and affordable treatment options. But we can’t do it alone.",
    stats: "Over 1 million free vaccines provided.",
    additional_info:
      "In collaboration with local shelters and veterinary clinics, we offer comprehensive health check-ups, vaccination drives, and low-cost treatment options, ensuring pets receive the care they deserve.",
    learn_more_link: "/about-us",
  },
  {
    image: assets.images.about_us_blog3,
    title: "Supporting Rescues",
    sub_title: "Petco Love Support",
    description:
      "We provide financial and logistical support to rescue organizations nationwide, helping them save more lives.",
    stats: "Over 4,000 animal welfare organizations supported.",
    additional_info:
      "Through our grants and donations, we empower shelters and rescue groups with the resources they need to expand their operations, increase their capacity, and ultimately save more lives.",
    learn_more_link: "/about-us",
  },
];

const leadershipData = [
  {
    image: assets.images.about_author1,
    name: "Susanne Kogut",
    designation: "President",
    bio: "With over 20 years of experience in animal welfare, Susanne leads our organization with a passion for making a difference. Under her leadership, we've expanded our reach and impact nationwide.",
    experience: "20+ years in animal welfare",
    achievements: [
      "Expanded Petco Love Adopt program to over 1,000 locations",
      "Launched the nationwide Shelter Love Grants initiative",
    ],
    social_links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: assets.images.about_author2,
    name: "Jennifer Schulz",
    designation: "Director, Strategic Partnerships & Public Relations",
    bio: "Jennifer is a strategic thinker with a heart for animals. She has spearheaded numerous successful partnerships that have brought significant resources to our cause.",
    experience: "15 years in strategic partnerships",
    achievements: [
      "Negotiated key partnerships with national veterinary networks",
      "Increased public awareness through targeted PR campaigns",
    ],
    social_links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: assets.images.about_author3,
    name: "Daymond John",
    designation: "Vice Chair",
    bio: "As a business leader and philanthropist, Daymond brings a wealth of experience in strategic growth and innovation. His contributions have been instrumental in our organization's success.",
    experience: "30+ years in business leadership",
    achievements: [
      "Led fundraising efforts that brought in $100 million",
      "Introduced new innovative programs for organizational growth",
    ],
    social_links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: assets.images.about_author4,
    name: "Dana Puglish",
    designation: "Head of Marketing",
    bio: "Dana's expertise in marketing and branding has helped us connect with a broader audience, raising awareness about our mission and the importance of pet adoption.",
    experience: "10 years in marketing and branding",
    achievements: [
      "Launched the highly successful 'Adopt Love' campaign",
      "Increased social media engagement by 200%",
    ],
    social_links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const AboutUsPage = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutServices data={servicesData} />
      <AboutMembers data={leadershipData} />
    </>
  );
};

export default AboutUsPage;
