import Link from 'next/link';
import cx from 'classnames';

interface TableProps {
  dataCategory: 'pending' | 'success' | 'failed';
  image: string;
  title: string;
  console: string;
  item: number;
  price: number;
}

export default function TableRow({
  dataCategory,
  image,
  title,
  console,
  item,
  price,
}: TableProps) {
  const statusClass = cx({
    'float-start': true,
    'icon-status': true,
    [dataCategory]: true,
  });
  return (
    <tr data-category={dataCategory} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {console}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p
            className="fw-medium text-start color-palette-1 m-0 position-relative"
            style={{ textTransform: 'capitalize' }}>
            {dataCategory}
          </p>
        </div>
      </td>
      <td>
        <Link href="/member/transactions/detail">
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
