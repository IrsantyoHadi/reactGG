import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/Transaction';

/* eslint-disable linebreak-style */
export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="Transactions" />
      <TransactionContent />
    </section>
  );
}
