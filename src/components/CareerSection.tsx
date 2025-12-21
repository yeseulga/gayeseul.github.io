const careers = [
  {
    company: '회사명 A',
    period: '2024.05 ~ 2024.08 (4개월)',
    role: '프론트엔드 개발',
    description: '전국의 전통시장과 소비자를 이어주는 웹 이커머스 플랫폼 회사',
    tasks: [
      '프론트엔드 개발 및 유지보수',
      '신규 웹 이커머스 페이지 런칭 및 어드민 페이지 개발',
      '기존 레거시 웹앱(Vue2) 유지보수',
    ],
  },
  {
    company: '회사명 B',
    period: '2023.09 ~ 2024.04 (8개월)',
    role: '프론트엔드 개발',
    description: '헬스케어 정보 플랫폼 서비스',
    tasks: [
      '프론트엔드에 관련된 모든 설계, 개발, 배포, 유지보수 담당',
      '프론트엔드 모노레포 도입, 디렉터리 컨벤션 정립',
      'API 문서화 도구 도입 (Postman → Swagger)',
    ],
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Career</h2>
        <p className="section-subtitle">개발자로서의 경력입니다.</p>

        <div className="space-y-0">
          {careers.map((career, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="info-card ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground">{career.company}</h3>
                  <span className="text-sm text-muted-foreground">{career.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{career.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{career.description}</p>
                <ul className="space-y-1">
                  {career.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      {task}
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

export default CareerSection;
