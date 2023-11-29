interface Iprops {
  autoFocus?: boolean;
  placeholder?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  styles?: object;
  type?: string;
  name: string;
  autoComplete?: string;
}

const CustomInput = (props: Iprops) => {
  const {
    autoFocus = false,
    placeholder,
    value,
    onChange,
    styles,
    type = "text",
    name,
    autoComplete = "off",
  } = props;

  return (
    <input
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles}
      type={type}
      name={name}
      autoComplete={autoComplete}
    />
  );
};

export default CustomInput;
