const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          협업하기 편한 개발자
        </h1>
        <p 
          className="text-lg md:text-xl text-muted-foreground animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          프론트엔드 개발자의 포트폴리오입니다.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
