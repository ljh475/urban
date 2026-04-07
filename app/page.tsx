'use client';

type MenuItem = {
  label: string;
  href: string;
};

type ProcessCard = {
  title: string;
  href: string;
  steps: string[];
};

type SimpleItem = {
  title: string;
  desc?: string;
  href?: string;
};

type StatItem = {
  label: string;
  value: string;
  change: string;
};

type BarData = {
  label: string;
  value: number;
};

const menu: MenuItem[] = [
  { label: '정비사업 개요', href: '#overview' },
  { label: '사업 절차', href: '#process' },
  { label: '공사비·비용 분석', href: '#cost' },
  { label: '관련 법령', href: '#law' },
  { label: '정보공개·데이터', href: '#data' },
  { label: '실무 자료실', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
];

const statItems: StatItem[] = [
  { label: '사업지 모니터링', value: '128개', change: '+12' },
  { label: '절차 단계 추적', value: '7단계', change: '실시간' },
  { label: '공사비 검토 지표', value: '24개', change: '+3' },
];

const costTrend: BarData[] = [
  { label: '2022', value: 58 },
  { label: '2023', value: 68 },
  { label: '2024', value: 81 },
  { label: '2025', value: 86 },
  { label: '2026', value: 92 },
];

const processCards: ProcessCard[] = [
  {
    title: '재개발 절차',
    href: '#process',
    steps: ['정비구역 지정', '추진위원회 승인', '조합설립인가', '사업시행인가', '관리처분계획인가', '착공·준공·이전고시'],
  },
  {
    title: '재건축 절차',
    href: '#process',
    steps: ['기본계획 반영', '안전진단', '정비구역 지정', '조합설립인가', '사업시행인가', '관리처분계획인가', '이주·철거·착공'],
  },
  {
    title: '소규모정비사업',
    href: '#process',
    steps: ['사업대상 검토', '주민합의', '사업시행계획 수립', '인가·신고', '공사 시행', '준공 및 정산'],
  },
];

const overviewItems: SimpleItem[] = [
  { title: '정비사업이란', desc: '도시기능 회복과 주거환경 개선을 위한 정비사업의 개념 정리', href: '#overview' },
  { title: '사업 유형', desc: '재개발, 재건축, 소규모정비사업의 특징과 차이 비교', href: '#overview' },
  { title: '용어 정리', desc: '조합, 추진위원회, 사업시행자, 관리처분 등 핵심 용어 설명', href: '#overview' },
];

const costItems: SimpleItem[] = [
  { title: '공사비 상승 요인 정리', href: '#cost' },
  { title: '공사비 검증 절차 안내', href: '#cost' },
  { title: '검증 기준 핵심 포인트', href: '#cost' },
  { title: '조합·시행자 체크리스트', href: '#cost' },
  { title: '분쟁 예방 포인트', href: '#cost' },
  { title: '실무 보고서 작성 예시', href: '#cost' },
];

const lawItems: SimpleItem[] = [
  { title: '도시 및 주거환경정비법', href: '#law' },
  { title: '시행령', href: '#law' },
  { title: '시행규칙', href: '#law' },
  { title: '정비사업 공사비 검증 기준', href: '#law' },
  { title: '주요 개정 사항 정리', href: '#law' },
  { title: '실무상 자주 보는 조문 요약', href: '#law' },
];

const dataItems: SimpleItem[] = [
  { title: '정비사업 추진 현황', href: '#data' },
  { title: '지역별 사업 현황', href: '#data' },
  { title: '사업유형별 통계', href: '#data' },
  { title: '향후 데이터 연계 메뉴', href: '#data' },
];

const resourceItems: SimpleItem[] = [
  { title: '체크리스트', desc: '단계별 검토사항과 의사결정 포인트를 한 번에 확인', href: '#resources' },
  { title: '보고서 양식', desc: '공사비 검증, 사업 절차 정리, 회의자료용 문서 포맷', href: '#resources' },
  { title: 'PDF 자료', desc: '법령 요약, 절차 정리, 실무 참고자료 다운로드', href: '#resources' },
];

const faqItems: SimpleItem[] = [
  {
    title: '재개발과 재건축의 가장 큰 차이는 무엇인가요?',
    desc: '재개발은 기반시설이 열악한 지역의 주거환경 개선에 초점이 있고, 재건축은 기존 공동주택을 철거하고 새로 짓는 사업에 가깝습니다.',
    href: '#faq',
  },
  {
    title: '공사비 검증은 언제 필요한가요?',
    desc: '사업 단계에 따라 증액 이슈나 분쟁 우려가 있을 때 중요하며, 관련 고시와 절차에 따라 검증 범위와 방식이 달라질 수 있습니다.',
    href: '#faq',
  },
  {
    title: '법령은 어디서 빠르게 확인할 수 있나요?',
    desc: '이 사이트에서는 핵심 법령, 시행령·시행규칙, 공사비 검증 기준을 한눈에 볼 수 있도록 정리하는 구조를 제공합니다.',
    href: '#faq',
  },
];

function SectionTitle({ english, title, desc }: { english: string; title: string; desc?: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{english}</p>
      <h3 className="text-3xl font-black">{title}</h3>
      {desc ? <p className="max-w-2xl text-sm leading-6 text-slate-600">{desc}</p> : null}
    </div>
  );
}

function ClickCard({ title, desc, href }: SimpleItem) {
  return (
    <a
      href={href ?? '#'}
      className="block rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-50"
    >
      <h4 className="text-lg font-bold">{title}</h4>
      {desc ? <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p> : null}
    </a>
  );
}

function StepCard({ title, href, steps }: ProcessCard) {
  return (
    <a href={href} className="block rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-400">
      <h4 className="text-xl font-bold">{title}</h4>
      <div className="mt-5 space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">{index + 1}</span>
            <p className="text-sm font-medium text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </a>
  );
}

function CostBarChart() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">공사비 추이 시각화(예시 인덱스)</p>
      <div className="mt-5 space-y-4">
        {costTrend.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100">
              <div className="h-3 rounded-full bg-slate-900" style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UrbanRenewalSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Urban Renewal Platform</p>
            <h1 className="text-lg font-bold sm:text-xl">도시정비사업 인사이트</h1>
          </div>

          <nav className="hidden gap-6 lg:flex">
            {menu.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#resources" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
            자료 보기
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-1 text-sm font-medium text-slate-700">
              재개발 · 재건축 · 공사비 · 법령 통합 정리
            </span>

            <div className="space-y-4">
              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                도시정비사업 정보를
                <br />
                더 쉽게, 더 시각적으로
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
                텍스트 위주 정보를 카드·지표·막대 차트 형태로 구조화해, 절차와 비용 흐름을 한 화면에서 빠르게 파악할 수 있도록 구성했습니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {statItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="mt-1 text-2xl font-black">{item.value}</p>
                  <p className="text-xs font-semibold text-emerald-600">{item.change}</p>
                </div>
              ))}
            </div>
          </div>

          <CostBarChart />
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6">
        <section id="overview" className="space-y-6 scroll-mt-28">
          <SectionTitle english="Overview" title="정비사업 개요" desc="핵심 개념을 카드 단위로 분해해 처음 보는 사용자도 빠르게 이해할 수 있도록 구성합니다." />
          <div className="grid gap-5 md:grid-cols-3">
            {overviewItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="process" className="space-y-6 scroll-mt-28">
          <SectionTitle english="Process" title="사업 절차" desc="각 사업 유형별 절차를 타임라인형 카드로 제공합니다." />
          <div className="grid gap-6 lg:grid-cols-3">
            {processCards.map((card) => (
              <StepCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id="cost" className="grid gap-8 scroll-mt-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionTitle english="Cost Verification" title="공사비 · 비용 분석" />
            <p className="text-sm leading-7 text-slate-600">
              공사비 검증의 핵심을 기준·절차·분쟁 예방의 3축으로 분류해 시각적으로 탐색할 수 있게 구성했습니다.
            </p>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-xl">
              <p className="text-lg font-bold">실무 포인트</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">증액 사유 검토, 비교견적, 의사결정 근거 정리를 위해 단계별 체크리스트를 함께 활용하세요.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {costItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="law" className="space-y-6 scroll-mt-28">
          <SectionTitle english="Law & Regulation" title="관련 법령" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {lawItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="data" className="space-y-6 scroll-mt-28">
          <SectionTitle english="Open Data" title="정보공개 · 데이터" />
          <div className="grid gap-5 md:grid-cols-4">
            {dataItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="resources" className="space-y-6 scroll-mt-28">
          <SectionTitle english="Resources" title="실무 자료실" />
          <div className="grid gap-5 lg:grid-cols-3">
            {resourceItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6 scroll-mt-28">
          <SectionTitle english="FAQ" title="자주 묻는 질문" />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <ClickCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-bold">도시정비사업 인사이트</p>
            <p className="mt-1 text-sm text-slate-600">도시정비사업 정보를 시각적으로 정리하는 실무형 정보 플랫폼</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            {menu.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
