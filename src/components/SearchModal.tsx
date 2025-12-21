import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchItem {
  id: string;
  section: string;
  title: string;
  content: string;
}

const searchData: SearchItem[] = [
  { id: 'about-me', section: 'About Me', title: '자기소개', content: '현업 경험 프론트엔드 스타트업 협업 동료 코드 리팩터링 배움' },
  { id: 'skills', section: 'Skills', title: '기술 스택', content: 'HTML CSS JavaScript TypeScript React Next.js Vue.js Tailwind React Query Zustand Node.js Docker' },
  { id: 'career', section: 'Career', title: '경력', content: '회사명 A 프론트엔드 개발 이커머스 어드민 Vue2 회사명 B 헬스케어 모노레포 Swagger' },
  { id: 'projects', section: 'Projects', title: '프로젝트', content: '통합 어드민 페이지 이커머스 Next.js Tanstack Table Recharts 헬스케어 플랫폼 React TypeScript 개인 블로그 MDX Vercel' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(
      item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery) ||
        item.section.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleResultClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      onClose();
      setQuery('');
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('search-highlight');
        setTimeout(() => {
          element.classList.remove('search-highlight');
        }, 2000);
      }, 100);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-xl border border-border shadow-2xl overflow-hidden animate-fade-in">
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="페이지 내 검색..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {query.trim() !== '' && (
          <div className="max-h-80 overflow-y-auto">
            {results.length > 0 ? (
              <ul className="py-2">
                {results.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleResultClick(item.id)}
                      className="w-full px-4 py-3 text-left hover:bg-muted transition-colors flex flex-col gap-1"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.section}
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {item.title} - {item.content}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-8 text-center text-muted-foreground text-sm">
                검색 결과가 없습니다
              </div>
            )}
          </div>
        )}

        {query.trim() === '' && (
          <div className="py-6 px-4 text-center text-muted-foreground text-sm">
            검색어를 입력하세요
            <div className="mt-2 text-xs">
              <kbd className="px-2 py-1 bg-muted rounded text-xs">ESC</kbd> 로 닫기
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
