interface InputProps {
  label: string;
  placeholder: string;
  formType: string;
}

export default function Input({
  label,
  placeholder,
  formType,
  ...nativeProps
}: InputProps) {
  return (
    <>
      <label
        htmlFor="phone"
        className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={formType}
        className="form-control rounded-pill text-lg"
        id="phone"
        name="phone"
        aria-describedby="phone"
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
