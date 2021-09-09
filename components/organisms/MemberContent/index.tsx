import Category from './category';
import TableRow, { TableRowProps } from './tableRow';

const ListCategories = [
  {
    icon: 'desktop',
    desc: 'Game',
    title: 'Desktop',
    totalSpent: 18500000,
  },
  {
    icon: 'mobile',
    desc: 'Game',
    title: 'Mobile',
    totalSpent: 8445000,
  },
  {
    icon: 'desktop',
    desc: 'Other',
    title: 'Catagories',
    totalSpent: 5000000,
  },
];

const ListTableRows: Array<TableRowProps> = [
  {
    img: 'overview-1',
    title: 'Mobile Legends: The New Battle 2021',
    type: 'Desktop',
    status: 'pending',
    item: 200,
    price: 290000,
  },
  {
    img: 'overview-2',
    title: 'Call of Duty:Modern',
    type: 'Desktop',
    status: 'success',
    item: 550,
    price: 740000,
  },
  {
    img: 'overview-3',
    title: 'Clash of Clans',
    type: 'Mobile',
    status: 'failed',
    item: 100,
    price: 120000,
  },
  {
    img: 'overview-4',
    title: 'The Royal Game',
    type: 'Mobile',
    status: 'success',
    item: 220,
    price: 400000,
  },
];

export default function Content() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {ListCategories.map((category) => (
                <Category
                  icon={category.icon}
                  totalSpent={category.totalSpent}
                  key={category.title}>
                  {category.desc} <br /> {category.title}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {ListTableRows.map((tableRow) => (
                  <TableRow
                    img={tableRow.img}
                    title={tableRow.title}
                    type={tableRow.type}
                    status={tableRow.status}
                    item={tableRow.item}
                    price={tableRow.price}
                    key={tableRow.title}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
