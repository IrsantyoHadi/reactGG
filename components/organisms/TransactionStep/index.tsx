/* eslint-disable react/jsx-one-expression-per-line */
import StepItem from '../../molecules/StepItem';

const Steps = [
  {
    icon: 'step-1',
    title: '1. Start',
    detail1: 'Pilih salah satu game',
    detail2: 'yang ingin kamu top up',
  },
  {
    icon: 'step-2',
    title: '2. Fill Up',
    detail1: 'Top up sesuai dengan',
    detail2: 'nominal yang sudah tersedia',
  },
  {
    icon: 'step-3',
    title: '3. Be a Winner',
    detail1: 'Siap digunakan untuk',
    detail2: 'improve permainan kamu',
  },
];

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          {Steps.map((step) => (
            <StepItem
              title={step.title}
              icon={step.icon}
              detail1={step.detail1}
              detail2={step.detail2}
            />
          ))}{' '}
        </div>
      </div>
    </section>
  );
}
