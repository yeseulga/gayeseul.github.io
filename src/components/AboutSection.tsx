import { Github, Mail, BookOpen, User, Calendar } from 'lucide-react';

const AboutSection = () => {
  const infoItems = [
    { icon: User, label: '이름', value: '홍길동' },
    { icon: Calendar, label: '생년월일', value: '1995-01-01' },
    { icon: Mail, label: '이메일', value: 'hello@example.com' },
  ];

  return (
    <section id="about-me" className="py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">안녕하세요. 개발자입니다.</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
          <p>
            <strong className="text-foreground">저는 1년 간 현업에서 소중한 경험을 쌓았습니다.</strong>{' '}
            스타트업에서 프론트엔드를 담당하며 프로젝트의 설계부터 배포까지 전 과정을 경험했습니다. 
            백엔드 개발자, 디자이너, 기획자 등 동료들과의 적극적인 의사소통을 통해 
            프로젝트를 성공적으로 이끌어왔습니다.
          </p>
          <p>
            <strong className="text-foreground">저는 동료가 쉽게 읽을 수 있는 코드를 작성합니다.</strong>{' '}
            코드의 품질을 사수하는 것도 개발자의 덕목이라 생각하며, 
            직관적이지 않거나 기능이 지나치게 결합된 컴포넌트가 있다면 과감히 리팩터링을 진행합니다.
          </p>
          <p>
            <strong className="text-foreground">저는 끊임없이 배우고 있습니다.</strong>{' '}
            기초가 중요하다는 생각 아래 꾸준히 학습하고 있으며, 
            동료 개발자들과 미팅하며 다양한 관점을 접하고자 노력합니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-48 rounded-full bg-muted border-4 border-card shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <User size={64} />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="info-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
