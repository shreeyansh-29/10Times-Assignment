import {TimePicker} from "antd";
import {Dayjs} from "dayjs";
interface Iprops {
  onChange: (time: Dayjs | null, timeString: string) => void;
  bordered: boolean;
  suffixIcon: boolean | null;
  format: string;
  allowClear?: boolean;
  style?: object;
  use12Hours: boolean;
  placeholder: string;
  name: string;
  disabled?: boolean
}

const CustomTimePicker = (props: Iprops) => {
  const {
    onChange,
    bordered,
    suffixIcon,
    format,
    allowClear,
    style,
    use12Hours,
    placeholder,
    name,
    disabled = false
  } = props;
  return (
    <div>
      <TimePicker
        onChange={onChange}
        bordered={bordered}
        suffixIcon={suffixIcon}
        format={format}
        allowClear={allowClear}
        style={style}
        use12Hours={use12Hours}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomTimePicker;
