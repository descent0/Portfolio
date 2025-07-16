import type { Education } from "@/lib/types"

interface EducationSectionProps {
  education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
  const defaultEducation = {
    degree: "Computer Science & Engineering",
    institution: "KIET Group of Institutions",
    focus: [
      "Full-Stack Web Development",
      "MERN Stack Specialist",
      "Open to Tech Partnerships",
      "Knowledge Sharing Enthusiast",
    ],
  }

  const educationData = education.length > 0 ? education[0] : defaultEducation

  return (
    <section id="education" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{educationData.degree}</h3>
              <p className="text-purple-400 text-lg">{educationData.institution}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationData.focus.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
