import Image from 'next/image';
import cx from 'classnames';

export type TableRowProps = {
  img: string;
  title: string;
  type: 'Desktop' | 'Mobile' | 'Other';
  item: number;
  price: number;
  status: 'pending' | 'success' | 'failed';
};

export default function TableRow({
  img,
  title,
  type,
  item,
  price,
  status,
}: TableRowProps) {
  const statusClass = cx({
    'float-start': true,
    'icon-status': true,
    [status]: true,
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`/img/${img}.png`} width={80} height={60} alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {type}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p
            className="fw-medium text-start color-palette-1 m-0 position-relative"
            style={{ textTransform: 'capitalize' }}>
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
