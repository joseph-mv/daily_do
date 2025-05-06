import React from 'react'
import { FaClock, FaCoffee, FaBook, FaChartLine } from 'react-icons/fa'
import { MdOutlineStart } from 'react-icons/md'
import { Sidebar } from '../components'
import PomodoroTimer from '../components/pomodoro/PomodoroTimer'

const PomodoroInfo: React.FC = () => {
  return (
    <div className=" flex ">
    
    <Sidebar />

    <section className="min-h-screen elative bg-coral p-3 mx-3    rounded-xl h-[83%]  text-gray-800  md:p-12 max-w-5xl  font-sans">
      <Header />
      <Intro />
      <PomodoroTimer/>
      <TimingDetails />
      <Principles />
      <CallToAction />
    </section>
  </div>
    
  )
}

export default PomodoroInfo

// 🧠 Header Section
const Header: React.FC = () => (
  <header className="mb-8 text-center">
    <h1 className="text-4xl font-bold text-red-600">The Pomodoro Technique</h1>
    <p className="text-gray-600 mt-2 text-lg">Master your time. Stay focused. Avoid burnout.</p>
  </header>
)

// 📝 Intro Paragraph
const Intro: React.FC = () => (
  <div className="text-base leading-relaxed mb-6">
    <p>
      The <strong>Pomodoro Technique</strong> is a proven time management method developed by <strong>Francesco Cirillo</strong> in the late 1980s. It enhances focus and productivity by using timed intervals of work and breaks:
    </p>
  </div>
)

// ⏱️ Timing Details List
const TimingDetails: React.FC = () => (
  <ul className="space-y-4 text-base mb-10">
    <ListItem icon={<FaClock className="text-red-500" />} text="25 minutes of focused work (one Pomodoro)" />
    <ListItem icon={<FaCoffee className="text-yellow-500" />} text="5-minute short break after each Pomodoro" />
    <ListItem icon={<FaBook className="text-green-600" />} text="15–30 minute long break after 4 Pomodoros" />
  </ul>
)

// 📌 Pomodoro Principles
const Principles: React.FC = () => {
  const items = [
    {
      icon: <FaClock className="text-blue-600" />,
      text: <><strong>Work with time, not against it</strong> – build a sense of urgency.</>,
    },
    {
      icon: <FaCoffee className="text-pink-600" />,
      text: <><strong>Avoid burnout</strong> – regular breaks help refresh your mind.</>,
    },
    {
      icon: <FaChartLine className="text-purple-600" />,
      text: <><strong>Track your effort</strong> – use a timer and log what you worked on.</>,
    },
    {
      icon: <FaBook className="text-orange-500" />,
      text: <><strong>Improve workflow</strong> – analyze patterns to plan better in the future.</>,
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Key Principles:</h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <ListItem key={idx} icon={item.icon} text={item.text} />
        ))}
      </ul>
    </div>
  )
}

// ✅ Reusable List Item Component
const ListItem: React.FC<{ icon: React.ReactNode; text: React.ReactNode }> = ({ icon, text }) => (
  <li className="flex items-start gap-4">
    <span className="text-xl mt-1">{icon}</span>
    <span className="leading-relaxed">{text}</span>
  </li>
)

// 🚀 Call to Action Section
const CallToAction: React.FC = () => (
  <div className="text-center mt-12">
    <p className="text-lg mb-4">Ready to boost your productivity?</p>
    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition">
      <MdOutlineStart className="text-xl" />
      Start Pomodoro Timer
    </button>
  </div>
)
