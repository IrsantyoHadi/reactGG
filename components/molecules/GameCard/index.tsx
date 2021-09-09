import Link from 'next/link';
import Image from 'next/image';

type GameCardProps = {
  image: string;
  title: string;
  console: string;
};

export default function GameCard({ image, title, console }: GameCardProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/${image}.png`}
              width={205}
              height={270}
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/game-icon.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{console}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
