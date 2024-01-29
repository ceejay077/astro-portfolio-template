type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "naveenchamara@gmail.com",
  title: "Hi, I’m Naveen 👋",
  // profile: "/profile.webp",
  description:
    "Keywords are my wand, websites my canvas. I paint them up in the Sri Lankan sunshine, weaving digital spells that lure customers and climb search engine mountains. Forget boring techie stuff, I'm Naveen, the SEO storyteller, crafting narratives that resonate and build more than just traffic, I build fans. So, lost in the online wilderness? Hop on my keyword surfboard, let's ride this SEO wave together.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
