import { Download } from "lucide-react";
import { Link } from 'react-scroll';

const certificates = [
  {
    id: 1,
    date: "Feb 2024",
    title: "Apna College",
    subtitle: "Alpha (DSA with Java)",
    description: "DSA",
    link: "https://drive.google.com/file/d/1Mwa4ewsDfYPSp6kR9TA7vMA9v_JHrOtV/view?usp=drivesdk",
  },
  {
    id: 2,
    date: "August 2024",
    title: "Apna College",
    subtitle: "Delta (Full Stack Web Development)",
    description: "Full-Stack Development",
    link: "https://drive.google.com/file/d/1kLUpU7jKyuRx3wXg3Z_y9DhwlRcw9Lai/view?usp=drivesdk",
  },
  {
    id: 3,
    date: "2025",
    title: "Internship Certificate",
    subtitle: "Congnifyz Technologies",
    description: "Full Stack Development Intern",
    link: "https://drive.google.com/file/d/1TQ-GnzR5OVv9_T1z4WcOlwVyhQuQR-h_/view?usp=drivesdk",
  },
];

export default function Certificate() {
  return (
    <section id="certificate" className="min-h-screen bg-black text-white py-16 px-4" >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">
          CERTIFICATES
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400"></div>
          
          {/* Certificate items */}
          {certificates.map((cert, index) => (
            <div key={cert.id} className="flex w-full mb-12">
              {/* Left side - Date and Course */}
              <div className="w-1/2 pr-8 text-right">
                <p className="text-sm text-gray-400">{cert.date}</p>
                <p className="text-lg font-medium text-gray-300 mt-1">{cert.description}</p>
              </div>
              
              {/* Timeline point */}
              <div className="flex justify-center relative">
                <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-black z-10"></div>
              </div>
              
              {/* Right side - College and Certificate link */}
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-300 mt-1 mb-3">{cert.subtitle}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-sm"
                >
                  <Download className="w-4 h-4" />
                  Click to View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Total certificates */}
        <div className="text-right mt-20 pr-8">
          <p className="text-gray-400 text-sm">Total Certificates</p>
          <p className="text-3xl font-bold text-green-400">
            {certificates.length} Certificates
          </p>
        </div>
      </div>
    </section>
  );
}