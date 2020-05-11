import { useTranslation } from "react-i18next";

export default function smallProjects() {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: "COVID19 Detector",
      demo: null,
      source: "https://github.com/danngalann/covid19-detector",
      imgsrc: null,
    },
    {
      id: 2,
      title: "Image Search Engine",
      demo: null,
      source: "https://github.com/danngalann/cnn-image-search-engine",
      imgsrc: null,
    },
    {
      id: 3,
      title: "ResNet Food5k",
      demo: null,
      source: "https://github.com/danngalann/resnet-food5k",
      imgsrc: null,
    },
    {
      id: 4,
      title: "Titanic Survival Predictor",
      demo: "https://titanicsurvival.pythonanywhere.com",
      source: "https://github.com/danngalann/django-titanic-survial",
      imgsrc: null,
    },
    {
      id: 5,
      title: "Live Deal With It Overlay",
      demo: null,
      source: "https://github.com/danngalann/opencv-deal-with-it",
      imgsrc: null,
    },
    {
      id: 6,
      title: "Blur Detector",
      demo: null,
      source: "https://github.com/danngalann/bulk-blur-detection",
      imgsrc: null,
    },
    {
      id: 7,
      title: "Book Scanner",
      demo: null,
      source: "https://github.com/danngalann/book-scanner",
      imgsrc: null,
    },
  ];
}
