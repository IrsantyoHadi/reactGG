/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

type MenuItemProps = {
  title: string;
  path: string | '';
  icon: string;
  active?: boolean;
  handleActive: (value: string) => void;
};

export default function MenuItem({
  title = '',
  path = '/',
  icon,
  active = false,
  handleActive = (value) => value,
}: Partial<MenuItemProps>) {
  const classItem = cx({
    active,
    item: true,
    'mb-30': true,
  });
  return (
    <div className={classItem}>
      <div className="icon me-3">
        <Image src={`/icon/Menu/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={path}>
          <a
            className="text-lg text-decoration-none"
            onClick={() => handleActive(title)}>
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}
