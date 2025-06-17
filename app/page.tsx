import Timeline from './components/Timeline';
import BackgroundImage from './components/BackgroundImage';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundImage />
      
      <Profile />

      <Skills />

      <section className="relative py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Project</h2>
            <p className="text-center text-gray-700 mb-12">
            PT Inovasi Solusi Internasional &middot; March 2019 &ndash; December 2023
            </p>
          <Timeline projects={projects} />
        </div>
      </section>

      <Contact />
    </main>
  );
}
