import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '통합 어드민 페이지',
    description: '이커머스 웹 어드민 페이지',
    period: '2024.06 ~ 2024.08',
    role: '프론트엔드 개발 (기여도 100%)',
    stack: ['Next.js', 'Tanstack Table', 'Recharts'],
    features: [
      '상품 등록 및 관리 기능',
      '주문 관리 대시보드',
      '데이터 시각화 차트',
    ],
  },
  {
    title: '헬스케어 플랫폼',
    description: '건강 정보 제공 웹 서비스',
    period: '2023.09 ~ 2024.04',
    role: '프론트엔드 개발 (기여도 80%)',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      '반응형 웹 디자인',
      '사용자 인터랙션 최적화',
      '성능 개선 및 SEO 최적화',
    ],
  },
  {
    title: '개인 블로그',
    description: '기술 블로그 및 포트폴리오',
    period: '2023.01 ~ 현재',
    role: '풀스택 개발',
    stack: ['Next.js', 'MDX', 'Vercel'],
    features: [
      'Markdown 기반 포스트 작성',
      'SEO 최적화',
      '다크모드 지원',
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">진행했던 프로젝트의 이력입니다.</p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="info-card hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm mb-4">
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">기간:</span> {project.period}
                </span>
                <span className="text-muted-foreground">
                  <span className="font-medium text-foreground">역할:</span> {project.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-2">주요 구현</p>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
