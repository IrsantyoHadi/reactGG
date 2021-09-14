import Content from '../../components/organisms/MemberContent';
import SideBar from '../../components/organisms/SideBar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="Overview" />
      <Content />
    </section>
  );
}
