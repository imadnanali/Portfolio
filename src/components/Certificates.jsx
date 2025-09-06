import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    link: "https://drive.google.com/file/d/1kLUpU7jKyuRx3wXg3Z_y9DhwlRcw9Lai/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    issuer: "Apna College",
    date: "2024",
    link: "https://drive.google.com/file/d/1Mwa4ewsDfYPSp6kR9TA7vMA9v_JHrOtV/view?usp=drivesdk",
  },
  {
    id: 3,
    title: "Microsoft Certification",
    issuer: "Microsoft",
    date: "2025",
    link: "https://drive.google.com/file/d/16LNifnPOvDyG6jVcbve8adfmi4BmbBZ8/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "Internship Certificate",
    issuer: "Congnifyz Technologies",
    date: "2025",
    link: "https://drive.google.com/file/d/1TQ-GnzR5OVv9_T1z4WcOlwVyhQuQR-h_/view?usp=drivesdk",
  },
];

export default function Certificates() {
  return (
    <section className="py-16 px-6 bg-black text-white" id="certificates">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="bg-gray-800 shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition hover:bg-gray-700 flex flex-col justify-between h-full w-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-xs mb-3">Year: {cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-sm font-medium hover:underline mt-4"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
