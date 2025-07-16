import type { PersonalInfo } from "@/lib/types"

interface AboutSectionProps {
  personalInfo: PersonalInfo | null
}

export default function AboutSection({ personalInfo }: AboutSectionProps) {
  const defaultInfo = {
    bio: "I am a Computer Science and Engineering student at KIET Group of Institutions, specializing in full-stack web development with a passion for building robust, scalable, and user-friendly web applications. My journey is driven by a commitment to leveraging cutting-edge technologies to solve real-world problems and deliver exceptional digital experiences. I am always eager to collaborate with tech professionals, share knowledge, and stay updated on the latest trends in software development, AI, and cloud technologies.",
  }

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">{personalInfo?.bio || defaultInfo.bio}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-purple-400 font-semibold mb-2">Focus</h3>
              <p className="text-gray-300">Full-Stack Web Development</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-purple-400 font-semibold mb-2">Specialty</h3>
              <p className="text-gray-300">MERN Stack Specialist</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-purple-400 font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-300">Open to Tech Partnerships</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-purple-400 font-semibold mb-2">Passion</h3>
              <p className="text-gray-300">Knowledge Sharing Enthusiast</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
