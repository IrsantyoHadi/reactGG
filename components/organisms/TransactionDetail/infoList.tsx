interface InfoListProsp {
  label: string;
  value: string | number;
  classTotal?: string;
}

export default function InfoList({
  label,
  value,
  classTotal = '',
}: Partial<InfoListProsp>) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} <span className={`purchase-details ${classTotal}`}>{value}</span>
    </p>
  );
}
