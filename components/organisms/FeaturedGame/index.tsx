import GameCard from '../../molecules/GameCard';

const Games = [
  {
    image: '/img/Thumbnail-1',
    title: 'Super Mechs',
    console: 'Mobile',
  },
  {
    image: '/img/Thumbnail-2',
    title: 'Call of Duty: Modern',
    console: 'Mobile',
  },
  {
    image: '/img/Thumbnail-3',
    title: 'Mobile Legends',
    console: 'Mobile',
  },
  {
    image: '/img/Thumbnail-4',
    title: 'Clash of Clans',
    console: 'Mobile',
  },
  {
    image: '/img/Thumbnail-5',
    title: 'Valorant',
    console: 'Desktop',
  },
];

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
          {Games.map((game) => (
            <GameCard
              title={game.title}
              image={game.image}
              console={game.console}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
