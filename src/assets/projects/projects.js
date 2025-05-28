import P1 from "./HungryHub.png";
import P2 from "./URL.png";
import P3 from "./TODO.png";
import P4 from "./AK.png";
import P5 from "./Movie.png";
import P6 from "./Tic-Tac.png";
import P7 from "./Docuflow-1.png";
import P8 from "./Docuflow-2.png";
import P9 from "./Savi.png";
import P10 from "./SpeakUp.png";
import P11 from "./NeuroChest.png";
export const projects = [
  {
    title: "NeuroChest",
    image: P11,
    description:
      "NeuroChest is an ensemble model combining four deep learning architectures—VGG16, VGG19, ResNet50, and DenseNet121—trained on a dataset of over 200,000 chest X-ray images. It is designed to detect 14 different diseases, including Pneumothorax, Cardiomegaly, Pneumonia, and others. The model achieves up to 98.6% accuracy and 95%+ on multiple critical pathologies",
    features: [
      "Developed an ensemble model of 4 different deep learning models (VGG16, VGG19, ResNet50 and DenseNet121) trained on a dataset of 2,00,000+ chest X-ray images.",
      "Designed to detect 14 different diseases including Pneumothorax, Cardiomegaly, Pneumonia, and more.",
      "Achieved an average binary accuracy of 87.41% and average AUC score of 0.7855 on the test set.",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "ReactJS",
    ],
    url: "https://www.github.com/ashkankhan786/NeuroChest",
    demo: "",
  },
  {
    title: "SpeakUp",
    image: P10,
    description:
      "SpeakUp is a web application designed to facilitate anonymous feedback, report unwanted incidents and give suggestions within organizations. It allows users to submit their reports or thoughts without revealing their identity, promoting open communication.",
    features: [
      "Developed a full-stack web application for anonymous feedback and reporting, allowing users to submit reports without revealing their identity.",
      "Implemented a user-friendly interface with Next.js and TailwindCSS, ensuring a responsive design that works seamlessly across devices.",
      "Integrated Next-Auth authentication for secure user login and role-based access control, and ConvexDB for serverless real-time querying and CRUD operations for reports and user management.",
    ],
    tech: ["Next.js", "ConvexDB", "TailwindCSS", "ShadCN", "Next-Auth"],
    url: "https://www.github.com/ashkankhan786/SpeakUp",
    demo: "https://speak-up-one.vercel.app/",
  },
  {
    title: "DocuFlow",
    image: P7,
    description:
      "DocuFlow is a web application designed to streamline document management and workflow processes. It allows users to upload, organize, and share documents efficiently.",
    features: [
      "Developed a full-stack document collaboration platform inspired by Eraser.io, allowing users to write, draw, and manage documents in a structured workspace.",
      "Implemented rich-text editing with Editor.js and collaborative whiteboard drawings using Tldraw, with a responsive UI using ShadCN and TailwindCSS with support for light/dark mode.",
      "Integrated Kinde authentication for secure user login and role-based access to team workspaces, and ConvexDB for serverless real-time querying and CRUD operations for documents and team management.",
    ],
    tech: [
      "Next.js",
      "ConvexDB",
      "TailwindCSS",
      "ShadCN",
      "Tldraw",
      "Editor.js",
    ],
    url: "https://www.github.com/ashkankhan786/DocuFlow",
    demo: "https://docu-flow.vercel.app",
  },
  {
    title: "Movie Recommendation Web App",
    image: P5,
    description:
      " Developed a web application that provides movie recommendations and includes a search feature allowing users to query a database of ~1 million movies. Users can search for specific movies by title or by providing a description, leveraging a machine learning KNN model to recommend movies without needing the exact title.",
    features: [
      "Users can search for specific movies by title or by providing a description, leveraging a machine learning KNN model to recommend movies without needing the exact title.",
      "Built a fully responsive and visually appealing UI using React and Tailwind CSS.",
    ],
    tech: ["ReactJS", "Tailwind CSS", "Python", "Flask", "KNN Model"],
    url: "https://www.github.com/ashkankhan786/Movies-Recommendation-App",
    demo: "",
  },
  {
    title: "Food Delivery App",
    image: P1,
    description:
      "Hungry Hub is a robust food delivery application built using the MERN stack, offering seamless online ordering with a comprehensive set of features tailored for both customers and administrators.",
    features: [
      "Admin Panel: Efficient management interface for overseeing orders, customers, and menu items.",
      "Functional Cart: Smooth shopping cart experience allowing users to add, remove, and modify their orders.",
      "Authentication and Authorization: Secure login and role-based access control ensuring data privacy and system integrity.",
      "Food Categories: Organized menu with categorized food options for easy navigation.",
      "Integrated Payment Gateway: Seamless payment processing to complete transactions securely online.",
    ],
    tech: ["ReactJS", "Express", "NodeJS", "MongoDB"],
    url: "https://www.github.com/ashkankhan786/Hungry-Hub",
    demo: "",
  },
  {
    title: "SAVI - A Dance Club Website",
    image: P9,
    description:
      "SAVI is a dance club website that showcases the club's events, classes, and instructors. It features a modern design and user-friendly navigation.",
    features: [
      "Responsive Design: Ensures a seamless experience across all devices.",
      "Interactive Elements: Includes interactive event calendars and class schedules.",
      "Animations: Features extensive animations to enhance user engagement and provide a dynamic browsing experience.",
    ],
    tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
    url: "https://www.github.com/ashkankhan786/Dance-Club",
    demo: "https://dance-club.onrender.com",
  },
  {
    title: "Multiplayer Tic Tac Toe",
    image: P6,
    description:
      "Developed a fully functional multiplayer Tic-Tac-Toe game allowing players to compete in real time.Implemented game logic, player turns, and win/loss conditions with a user-friendly and responsive interface for a smooth experience.",
    features: [
      "• Developed a fully functional multiplayer Tic-Tac-Toe game allowing players to compete in real time",
      "Implemented game logic, player turns, and win/loss conditions with a user-friendly and responsive interface for a smooth experience",
    ],
    tech: ["ReactJS", "Tailwind CSS", "Socket.io", "ExpressJS", "NodeJS"],
    url: "https://www.github.com/ashkankhan786/Tic-Tac-Toe",
    demo: "",
  },
  {
    title: "Portfolio Website",
    image: P4,
    description:
      " This portfolio website showcases my skills, projects, and professional journey as a full-stack developer. It is designed to be a central hub where potential clients and employers can learn more about me and my work.",
    features: [
      "Responsive Design: Ensures a seamless experience across all devices.",
      "Interactive Elements: Includes interactive project showcases and skill visualizations.",
      "Animations: Features extensive animations to enhance user engagement and provide a dynamic browsing experience.",
    ],
    tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
    url: "https://www.github.com/ashkankhan786/Portfolio",
    demo: "https://ashkan-portfolio.vercel.app/",
  },
];
