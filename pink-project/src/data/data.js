import Stratus from "@/assets/cloudStratus.jpg";
import Cumulus from "@/assets/cloudCumulus.jpg";
import Rose from "@/assets/rose.jpg";
import Nimbus from "@/assets/cloudNimbus.jpg";
import Champ from "@/assets/champ.jpg";
import Willow from "@/assets/WillowBrise.jpg";
import Aurore from "@/assets/AuroreBrume.jpg";
import Eden from "@/assets/Eden.jpg";
import Iris from "@/assets/Iris.jpg";
import Ondine from "@/assets/Ondine.jpg";
import Pinterest from "@/assets/pinterest.svg";
import Xtwitter from "@/assets/x-twitter.svg";
import Instagram from "@/assets/instagram.svg";

export const articles = [
  {
    id: 1,
    image: Stratus,
    date: "12 oct. 2023",
    title: "Stratus",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "",
    type: "interview",
  },
  {
    id: 2,
    image: Cumulus,
    date: "12 aout 2023",
    title: "Cumulus",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "",
    type: "interview",
  },
  {
    id: 3,
    image: Rose,
    date: "35 mai",
    title: "Pluie",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "",
    type: "article",
  },
  {
    id: 4,
    image: Nimbus,
    date: "12 mai 2023",
    title: "Nimbus",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "",
    type: "interview",
  },
  {
    id: 5,
    image: Champ,
    date: "31 février",
    title: "Vent",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "",
    type: "article",
  },
];

export const testimonials = [
  {
    id: 101,
    photo: Willow,
    name: "Willow Brise",
    date: "30 février",
    title: "Jour où les lapins dansent",
    content:
      "J'ai passé du temps avec Nimbus, ce merveilleux nuage curieux. Il m'a raconté que puisqu'il ne pouvait pas danser avec les lapins ce 30 février, il apporterait sa contribution en créant des couchers de soleil magiques pour égayer leur danse. C'était une leçon sur la diversité et l'importance de chacun dans la nature.",
  },
  {
    id: 102,
    photo: Aurore,
    name: "Aurore Brume",
    date: "42 octobre",
    content:
      "Ce moment avec Nimbus, le nuage du 42 octobre, était un cadeau que je me suis fait à moi-même. C'était une expérience magique qui m'a rappelé que la beauté et le réconfort sont partout, même dans les endroits les plus inattendus. Ce jour restera gravé dans ma mémoire comme une parenthèse enchantée, un instant de connexion profonde avec la nature et avec moi-même.",
  },
  {
    id: 103,
    photo: Eden,
    name: "Éden Pluie",
    date: "4 avril",
    content:
      "Ensemble, nous avons contemplé le ciel infini. Cumulus flottait doucement au-dessus de moi, comme s'il voulait me montrer à quoi ressemblait un monde sans limites. Le 4 avril était un jour où l'impossible devenait possible, et j'ai ressenti une vague d'optimisme, une croyance en la réalisation des rêves les plus fous.",
  },
  {
    id: 104,
    photo: Iris,
    name: "Iris Orage",
    date: "31 février",
    content:
      "Au moment de partir, j'ai regardé Cumulus s'élever lentement dans le ciel, réalisant que même  certains rêves étaient encore hors de portée. Cependant, ce jour unique m'avait rappelé l'importance de rêver, de croire en l'impossible, et de célébrer la magie qui peut surgir, même au cœur des jours les plus farfelus.",
  },
  {
    id: 105,
    photo: Ondine,
    name: "Ondine Cascade",
    date: "36 décembre",
    content:
      "En m'approchant de lui, j'ai ressenti une énergie particulière, une connexion mystérieuse. Cumulus semblait me murmurer ses rêves. Il désirait s'élever plus haut, quitter la gravité, et explorer les confins du ciel. Son rêve était de vivre en apesanteur, de danser entre les étoiles.",
  },
];

export const reservation = [
  {
    id: 201,
    title: "nuage de pluie",
    name: "Nimbus",
    content: "Pour les mélancoliques",
  },
  {
    id: 202,
    title: "nuage de glace",
    name: "Cirrus",
    content: "Pour ceux qui n'ont pas froid aux yeux",
  },
  {
    id: 203,
    title: "nuage moelleux",
    name: "Cumulus",
    content: "Pour faire le plein de sérénité",
  },
  {
    id: 204,
    title: "nuage gris",
    name: "Stratus",
    content: "Pour broyer du noir en paix",
  },
];

export const listFooter = [
  {
    innovation: ["ressources", "blog", "produits"],
    inspiration: [
      "succes stories",
      "galerie de projets",
      "citations inspiratantes",
    ],
    shop: ["catalogue", "offres spéciales", "promotions"],
    socials: [Pinterest, Xtwitter, Instagram],
  },
];
