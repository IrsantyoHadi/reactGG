type PropsStepItem = {
  icon: string;
  title: string;
  detail1: string;
  detail2: string;
};
export default function StepItem({
  icon,
  title,
  detail1,
  detail2,
}: PropsStepItem) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          width={80}
          height={80}
          alt="icon-step"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {detail1}
          <br />
          {detail2}
        </p>
      </div>
    </div>
  );
}
