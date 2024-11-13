interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
}

const SkillBar = ({ skill, percentage, delay }: SkillBarProps) => {
  return (
    <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium">{skill}</span>
        <span className="text-apple-blue">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-apple-blue rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%`, transitionDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;