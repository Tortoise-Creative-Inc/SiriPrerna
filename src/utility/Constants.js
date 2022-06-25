import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Home from "../assets/header/icons/Home.svg";
import Engage from "../assets/header/icons/Engage.svg";
import Kids from "../assets/header/icons/Kids.svg";
import Why from "../assets/header/icons/Why.svg";
import Donate from "../assets/header/icons/Donate.svg";
import sicn1 from "../assets/home/sec2/icon1.svg";
import sicn1_2 from "../assets/home/sec2/icon1_2.png";
import sicn2 from "../assets/home/sec2/puzzle.svg";
import sicn3 from "../assets/home/sec2/icon3.svg";
import sicn4 from "../assets/home/sec2/icon4.svg";
import k1 from "../assets/home/sec3/kids/k1.webp";
import k2 from "../assets/home/sec3/kids/k2.webp";
import k3 from "../assets/home/sec3/kids/k3.webp";
import k4 from "../assets/home/sec3/kids/k4.webp";
import f1 from "../assets/home/sec3/founders/f1.webp";
import f2 from "../assets/home/sec3/founders/f2.webp";
import f3 from "../assets/home/sec3/founders/f3.webp";
import f4 from "../assets/home/sec3/founders/f4.webp";
import i1 from "../assets/home/sec5/i1.webp";
import i2 from "../assets/home/sec5/i2.webp";
import i3 from "../assets/home/sec5/i3.webp";
import i4 from "../assets/home/sec5/i4.webp";
import kid1 from '../assets/ourKids/kids_pic/kid1.webp';
import kid2 from '../assets/ourKids/kids_pic/kid2.webp';
import kid3 from '../assets/ourKids/kids_pic/kid3.webp';
import kid4 from '../assets/ourKids/kids_pic/kid4.webp';
import kid5 from '../assets/ourKids/kids_pic/kid5.webp';
import kid6 from '../assets/ourKids/kids_pic/kid6.webp';
import kid7 from '../assets/ourKids/kids_pic/kid7.webp';
import kid8 from '../assets/ourKids/kids_pic/kid8.webp';
import kid9 from '../assets/ourKids/kids_pic/kid9.webp';
import kid10 from '../assets/ourKids/kids_pic/kid10.webp';
import kid11 from '../assets/ourKids/kids_pic/kid11.webp';
import kid12 from '../assets/ourKids/kids_pic/kid12.webp';
import kid13 from '../assets/ourKids/kids_pic/kid13.webp';
import kid14 from '../assets/ourKids/kids_pic/kid14.webp';
import kid15 from '../assets/ourKids/kids_pic/kid15.webp';
import kid16 from '../assets/ourKids/kids_pic/kid16.webp';
import kid17 from '../assets/ourKids/kids_pic/kid17.webp';
import kid18 from '../assets/ourKids/kids_pic/kid18.webp';
import kid19 from '../assets/ourKids/kids_pic/kid19.webp';
import kid20 from '../assets/ourKids/kids_pic/kid20.webp';
import kid21 from '../assets/ourKids/kids_pic/kid21.webp';
import kid22 from '../assets/ourKids/kids_pic/kid22.webp';
import kid23 from '../assets/ourKids/kids_pic/kid23.webp';
import kid24 from '../assets/ourKids/kids_pic/kid24.webp';
import kid25 from '../assets/ourKids/kids_pic/kid25.webp';
import kid26 from '../assets/ourKids/kids_pic/kid26.webp';
import kid27 from '../assets/ourKids/kids_pic/kid27.webp';
import kid28 from '../assets/ourKids/kids_pic/kid28.webp';
import kid29 from '../assets/ourKids/kids_pic/kid29.webp';
import kbg1 from '../assets/ourKids/backgrounds/bgk1.webp';
import kbg2 from '../assets/ourKids/backgrounds/bgk2.webp';
import kbg3 from '../assets/ourKids/backgrounds/bgk3.webp';
import kbg4 from '../assets/ourKids/backgrounds/bgk4.webp';
import Legislature from "../assets/whyUs/legislature.webp";
import Sports from "../assets/whyUs/sprt.webp";
import Music from "../assets/whyUs/music.webp";
import Wellbeing from "../assets/whyUs/wellbeing.webp";
import Building from "../assets/whyUs/Building.webp";
import Dining from "../assets/whyUs/Dining.webp";
import Indoor from "../assets/whyUs/Indoor.webp";
import Meditation from "../assets/whyUs/Meditation.webp";
import Playground from "../assets/whyUs/Playground.webp";
import Study from "../assets/whyUs/stdy.webp";
import p1 from "../assets/engage/Image (6).png";
import p2 from "../assets/engage/Image (1).png";
import p3 from "../assets/engage/Image (2).png";
import p4 from "../assets/engage/Image (3).png";
import p5 from "../assets/engage/Image (4).png";
import p6 from "../assets/engage/Image (5).png";
import p8 from "../assets/engage/Image (7).png";
import p9 from "../assets/engage/Image (8).png";
import p10 from "../assets/engage/Image (9).png";
import p11 from "../assets/engage/Image (10).png";
import p12 from "../assets/engage/Image (11).png";
import p13 from "../assets/engage/Image (12).png";
import Fb from '../assets/footer/fb.svg'
import Insta from '../assets/footer/insta.svg'
import Linkedin from '../assets/footer/linkdin.svg'
import Youtube from '../assets/footer/youtube.svg'


// NAVLINKS
export const NAVLINKS = [
    {
        title: "Home",
        to: "/",
        delay: ".10",
        icon: Home,
    },
    {
        title: "Why us",
        to: "/whyus",
        delay: ".12",
        icon: Why,
    },
    {
        title: "Our Kids",
        to: "/ourkids",
        delay: ".14",
        icon: Kids,
    },
    {
        title: "Engage",
        to: "/engage",
        delay: ".16",
        icon: Engage,
    },
    {
        title: "Donate",
        to: "/donate",
        delay: ".18",
        ignore: true,
        icon: Donate,
    },
];

// CONTACT US
export const CONTACT_US = [
    {
        id: 1,
        title: "Phone No.",
        content: "+91 94419 22022",
        Icon: <LocalPhoneIcon id="phone" />,
        to: "tel:9441922022",
        delay: ".29",
    },
    {
        id: 2,
        title: "WhatsApp No.",
        content: "+91 94419 22022",
        Icon: <WhatsAppIcon id="whatsApp" />,
        to: "https://wa.me/919441922022",
        delay: ".31",
    },
    {
        id: 3,
        title: "Mail",
        content: "siri.nonprofit@gmail.com ",
        Icon: <MailOutlineIcon id="mail" />,
        delay: ".33",
        to: "mailto:siri.nonprofit@gmail.com",
    },
];
export const ICONS = [
    {
        name: "Facebook",
        Icon: Fb,
        alt: "Facebook",
        to: "https://www.facebook.com/109076893772565/posts/637617440918505/",
    },
    {
        name: "Instagram",
        Icon: Insta,
        alt: "Instagram",
        to: "https://www.instagram.com/preranachildrenshome/",
    },
    {
        name: "LinkedIn",
        Icon: Linkedin,
        alt: "LinkedIn",
        to: "https://www.linkedin.com/in/prerna-orphanage-9bbb68233/",
    },
    {
        name: "Youtube",
        Icon: Youtube,
        alt: "Youtube",
        to: "https://youtube.com/channel/UCTQc-fSkBgDSFeTDQzc0MQg",
    },

]

// HOME
export const HOME_SEC = [
    {
        key: "1",
        icon: sicn1,
        icon2: sicn1_2,
        text1: "52",
        text2: "Kids Impacted",
    },
    {
        key: "2",
        icon: sicn2,
        text1: "15",
        text2: "Hobbies and interests our kids are engaged in.",
    },
    {
        key: "3",
        icon: sicn3,
        text1: "100+",
        text2: "Plants owned by our kids",
    },
    {
        key: "4",
        icon: sicn4,
        text1: "360",
        text2: "Visitors per month",
    },
];

export const HOME_KIDSCLG = [
    {
        key: "1",
        name: "Chintu",
        age: "15 yrs",
        img: k1,
        ignore: false,
    },
    {
        key: "2",
        name: "Sai Nath",
        age: "7 yrs",
        img: k2,
        ignore: false,
    },
    {
        key: "3",
        name: "Bunny",
        age: "13 yrs",
        img: k3,
        ignore: false,
    },
    {
        key: "4",
        name: "Raja",
        age: "11 yrs",
        img: k4,
        ignore: true,
    },
];

export const HOME_FOUNDERS = [
    {
        key: "1",
        name: "A. Prasad Raju",
        img: f1,
        h1: "Chairman and Managing Trustee",
        h2: "M.A. Dist Judge (Retd)",
    },
    {
        key: "2",
        name: "Prof. B. Indira",
        img: f2,
        h1: "Co-Chairman and Doctor",
        h2: "H.O.D. at Kurnool Medical College",
    },
    {
        key: "3",
        name: "A. Vamsee Krishna",
        img: f3,
        h1: "IIT Kharagpur alumnus",
        h2: "CEO - HappilyEver.co",
    },
    {
        key: "4",
        name: "Prashanth Akki",
        img: f4,
        h1: "BITS-PILANI alumnus",
        h2: "",
    },
];
export const HOME_SEC5_1 = {
    heading: 'Why is Prerna',
    heading1: 'different?',
    to: "whyus",
    img1: i1,
    subheading1: false,
    desc1: 'Prerna aims to provide children with the best care and facilities they deserve.',
    img2: i2,
    subheading2: false,
    desc2: 'At Prerna, we believe in shaping our kids to be independent, aware and inspirational citizens.',
};
export const HOME_SEC5_2 = {
    heading: 'Get Involved With Us !',
    heading1: false,
    to: "engage",
    img1: i3,
    desc1: 'can help the children by spending time with them, tutoring them and donating goods and money.',
    bh: 'Individuals and families',
    toi: "/engage/individuals",
    subheading1: 'Individuals and families ',
    img2: i4,
    subheading2: 'Corporates',
    desc2: 'can help children by enrolling in CSR programs, matching funds, donating IT equipment, etc.',
    bh2: 'Companies',
    toc: "/engage/corporates",
};

export const HOME_MOBSLIDES = [
    {
        key: 1,
        heading: '  This home is uniquely positioned as a place for orphan boys to be nurturned with global thoughts.',
        author: ' - Mr. Jayaramulu L, Diplomat UN vissionary, ',
        to: 'http://jayaramulu.com',
        margin: false,
        width: '29ch'
    },
    {
        key: 2,
        heading: ' Visit place like this. God resides here and no where else. Amazing. Kids taken care by wonderful people.',
        author: '- Mr. Krishna Rao, Well-wisher',
        to: '',
        margin: '-4.5% 0px 0 20%',
        width: '30ch'
    },
    {
        key: 3,
        heading: ' Lovely kids, Hygienic environment and friendly staff.',
        author: '- Mrs. Ashwini, Well-wisher',
        to: '',
        margin: '-4.5% 0px 0 40%',
        width: '34ch'
    },
    {
        key: 4,
        heading: 'The kids are very talented and disciplined.',
        author: '- Mrs. M. Keerthana, Well-wisher',
        to: '',
        margin: '-4.5% 0px 0 60%',
        width: '25ch'
    },
];

// KIDS
export const KIDSDB = [
    {
        key: 1,
        img: kid1,
        name: "Akash",
        age: "12",
        about: "Akash loves to help others! You will probably find him in the kitchen helping the staff.",
    },
    {
        key: 2,
        img: kid2,
        name: "Akhil",
        age: "9",
        about: "Akhil is super passionate about his studies. Apart from studying, he loves to sing.",
        bg: kbg1,
    },
    {
        key: 3,
        img: kid3,
        name: "Anil",
        age: "13",
        about: "Anil loves to play games, especially chess!",
        bg: kbg2,
    },
    {
        key: 4,
        img: kid4,
        name: "Ashok",
        age: "13",
        about: "Being a great singer, dancer and student, it's safe to say that Ashok is multi-talented!",
        bg: kbg3,
    },
    {
        key: 5,
        img: kid5,
        name: "Bunny",
        age: "13",
        about: "Bunny loves to dance and participate in dance competitions.",
        bg: kbg4,
    },
    {
        key: 6,
        img: kid6,
        name: "Chintu",
        age: "15",
        about: "Chintu loves to cook! His favourite subjects are English and Telugu.",
        bg: kbg1,
    },
    {
        key: 7,
        img: kid7,
        name: "Dhanush",
        age: "9",
        about: "Dhanush is a great student! He loves to draw in his free time.",
        bg: kbg2,
    },
    {
        key: 8,
        img: kid8,
        name: "Durgesh",
        age: "12",
        about: "Durgesh loves to play badminton. His favourite subject is mathematics.",
        bg: kbg3,
    },
    {
        key: 9,
        img: kid9,
        name: "Ganesh",
        age: "10",
        about: "Ganesh is the funny guy of the group! He loves to crack jokes and make people happy.",
        bg: kbg4,
    },
    {
        key: 10,
        img: kid10,
        name: "M. Ganesh",
        age: "12",
        about: "M. Ganesh is a polite and kind boy. His favourite subject is Telugu. ",
        bg: kbg1,
    },
    {
        key: 11,
        img: kid11,
        name: "Kamlesh",
        age: "12",
        about: "Kamlesh is a calm and quite boy. He loves to play games! His favourite subject is Hindi.",
        bg: kbg2,
    },
    {
        key: 12,
        img: kid12,
        name: "Sai Kartik",
        age: "10",
        about: "He loves to play football and his favourite subject is Telugu.",
        bg: kbg3,
    },
    {
        key: 13,
        img: kid13,
        name: "Mahesh",
        age: "10",
        about: "Mahesh loves to dance, play games and skate!",
        bg: kbg4,
    },
    {
        key: 14,
        img: kid14,
        name: "Mokshit",
        age: "9",
        about: "Mokshit loves to study. In his free time, he loves to watch the T.V. and play games and skate.",
        bg: kbg1,
    },
    {
        key: 15,
        img: kid15,
        name: "Nagendra",
        age: "10",
        about: "A master of impressions! Nagendra can impersonate others and make everyone laugh.",
        bg: kbg2,
    },
    {
        key: 16,
        img: kid16,
        name: "Nikhil",
        age: "10",
        about: "Nikhil is a great student and is always ready to help others. But don't be fooled, he loves bananas and will probably take yours.",
        bg: kbg3,
    },
    {
        key: 17,
        img: kid17,
        name: "Padu",
        age: "14",
        about: "Padu loves to play cricket. He likes to study Telugu.",
        bg: kbg4,
    },
    {
        key: 18,
        img: kid18,
        name: "Raja",
        age: "11",
        about: "Raja loves to act and do impersonation!",
        bg: kbg1,
    },
    {
        key: 19,
        img: kid19,
        name: "Ravi",
        age: "12",
        about: "Ravi is fluent in English and Telugu. His favourite subject is Mathematics. He likes to play badminton and cricket.",
        bg: kbg2,
    },
    {
        key: 20,
        img: kid20,
        name: "Ravendra",
        age: "13",
        about: "Ravendra likes to play all sort of games such as badminton, chess, cricket and football.",
        bg: kbg3,
    },
    {
        key: 21,
        img: kid21,
        name: "Sai Nath",
        age: "7",
        about: "Sai Nath is a great student and can speak the multiplication table of numbers upto 18!",
        bg: kbg4,
    },
    {
        key: 22,
        img: kid22,
        name: "Sanjay Kumar",
        age: "16",
        about: "Sanjay likes to watch TV shows. He is calm and quiet and his favourite subject is English.",
        bg: kbg1,
    },
    {
        key: 23,
        img: kid23,
        name: "Shiva",
        age: "7",
        about: "Shiva loves to study Telugu. His favourite activities include skating and playing carrom.",
        bg: kbg2,
    },
    {
        key: 24,
        img: kid24,
        name: "Sunil",
        age: "12",
        about: "Sunil is a natural performer! He loves to fool everyone with his magic tricks!",
        bg: kbg3,
    },
    {
        key: 25,
        img: kid25,
        name: "Sunny",
        age: "14",
        about: "Sunny loves to study. His favourite subjects are English and Mathematics.",
        bg: kbg4,
    },
    {
        key: 26,
        img: kid26,
        name: "Suresh",
        age: "8",
        about: "Suresh enjoys playing carrom. His favourite subjects are Telugu and Mathematics.",
        bg: kbg1,
    },
    {
        key: 27,
        img: kid27,
        name: "Tarun",
        age: "11",
        about: "Tarun likes to skate around!",
        bg: kbg2,
    },
    {
        key: 28,
        img: kid28,
        name: "Varun",
        age: "12",
        about: "Varun loves to have fun and ride around in his bicycle.",
        bg: kbg3,
    },
    {
        key: 29,
        img: kid29,
        name: "Vicky Kumar",
        age: "9",
        about: "Vicky is a calm and quite boy but loves to zoom around in his skates.",
        bg: kbg4,
    },
];
// ENGAGE
export const ENGAGE_INDIVIDUALS = [
    {
        head: "Spend time",
        desc: "with kids",
        img: p4,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
    {
        head: "Buy groceries",
        desc: "Rice, Pulses, Eggs etc.",
        img: p5,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
    {
        head: "Sponsor Infrastructure",
        desc: "IT and sports equipment",
        rs: "large appliances etc.",
        img: p6,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },

];

export const ENGAGE_COORPORATES = [

    {
        head: "CSR enrollment",
        desc: "Gain Tax deductions",
        rs: "upto 50%",
        img: p8,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    }, {
        head: "Fund matching",
        desc: "Match half of what",
        rs: "individual donors donate.",
        img: p9,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
    {
        head: "Donate IT equipment ",
        desc: "New or used computers,",
        rs: "speakers, headphones, projector.",
        img: p10,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    }, {
        head: "Staff training ",
        desc: "Teach English, computer skills,",
        rs: " accounting to our staff.",
        img: p11,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    }, {
        head: "Trip with Kids",
        desc: "Half or full day trips.",
        img: p12,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    }, {
        head: "Sponsor abroad",
        head2: "NGO registration (501C3)",
        rs: "Enables foreign contributions",
        img: p13,
        don: false,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
];




export const WHY_US_SECTION1 = [
    {
        id: 1,
        title: "Emotional Wellbeing",
        desc: "Children's emotional well-being is ensured by regular psychologist visits.",
        img: Wellbeing,
    },
    {
        id: 2,
        title: "Sports Engagement",
        desc: "A variety of extracurricular activities are offered, including basketball, cricket, chess, carrom, Legos, and PT sessions in addition to numerous outdoor games.",
        img: Sports,
    },
    {
        id: 3,
        title: "Music and Dance",
        desc: "We nourish the artistic apprehension of our children through daily carnatic music classes. Our children won first place at BITS-Pilani's IGNITE 2020 dance competition.",
        img: Music,
    },
];

export const WHY_US_SECTION2_TITLE = "The Socially Challenged Children’s Act 2021";
export const WHY_US_SECTION2_DESCRIPTION = <p>The founder of our organization, Sri Prasad Raju, who served for 35 years as a district court judge, is committed to aid socially deprived children, especially orphans. This commitment has manifested into the Socially Challenged Children Act 2021. Shri Prasad Raju Garu is the brainchild behind this Act. He envisioned a safe and nurturing space for orphan children and thus put forward this Bill in <strong>The Telangana Assembly</strong> and worked tirelessly for its approval and implementation.</p>;
export const WHY_US_SECTION2_IMG = Legislature;
export const WHY_US_SECTION3 = [
    {
        id: 1,
        title: "Building elevation",
        img: Building,
    },
    {
        id: 2,
        title: "Dining room",
        img: Dining,
    },
    {
        id: 3,
        title: "Indoor Games room",
        img: Indoor,
    },
    {
        id: 4,
        title: "Meditation Hall",
        img: Meditation,
    },
    {
        id: 5,
        title: "Study Hall",
        img: Study,
    },
    {
        id: 6,
        title: "Playground within the premises",
        img: Playground,
    },
];
export const DONATE_INDIVIDUALS = [
    {
        head: "Sponsor Meal",
        desc: "Onsite or Remote",
        rs: "₹2000",
        img: p2,
        don: true,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
    {
        head: "Contribute cash",
        desc: "Operational support ",
        rs: "for the orphanage",
        img: p1,
        don: true,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
    {
        head: "Sponsor a child",
        desc: "Child’s six months expenses",
        rs: "₹1000 p/m",
        img: p3,
        don: true,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
];

export const DONATE_CORPORATES = [
    {
        head: "Contribute cash",
        desc: "Operational support",
        rs: "for the orphanage",
        img: p1,
        don: true,
        to: 'https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53',
    },
]; 