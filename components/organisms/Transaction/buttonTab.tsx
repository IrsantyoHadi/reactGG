import cx from 'classnames';

interface ButtonProps {
  title: string;
  active?: boolean;
}

export default function ButtonTab({ title, active }: Partial<ButtonProps>) {
  const btnClass = cx({
    btn: true,
    'btn-status': true,
    'rounded-pill': true,
    'text-sm': true,
    'btn-active': active,
    'me-3': true,
  });
  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
