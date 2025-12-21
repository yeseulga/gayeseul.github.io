const skills = [
  { name: 'HTML/CSS/JS', color: 'bg-orange-500' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'React', color: 'bg-cyan-500' },
  { name: 'Next.js', color: 'bg-foreground' },
  { name: 'Vue.js', color: 'bg-green-500' },
  { name: 'Tailwind CSS', color: 'bg-teal-500' },
  { name: 'React Query', color: 'bg-red-500' },
  { name: 'Zustand', color: 'bg-amber-600' },
  { name: 'Node.js', color: 'bg-green-600' },
  { name: 'Docker', color: 'bg-blue-500' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">자바스크립트 생태계를 두루 다룰 수 있습니다.</p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-badge opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-3 h-3 rounded-full ${skill.color}`} />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
