import {DatePicker, DatePickerProps} from "antd";
import dayjs, {Dayjs} from "dayjs";

interface Iprops extends Omit<DatePickerProps, "onChange"> {
  onChange: (date: Dayjs | null, dateString: string) => void;
  bordered: boolean;
  placeholder: string;
  format: string;
  style?: object;
  suffixIcon: boolean | null;
  defaultValue?: Dayjs;
  allowClear?: boolean;
  name: string;
  disabled?: boolean;
  value?: Dayjs;
}

const CustomDatePicker = (props: Iprops) => {
  const {
    onChange,
    bordered,
    placeholder,
    format,
    style,
    suffixIcon,
    allowClear,
    name,
    disabled = false,
    defaultValue = undefined,
    value = undefined,
  } = props;

  const disabledDate = (current: Dayjs) => {
    const today = dayjs().startOf("day");
    const nextDay = today.add(1, "day");
    return current && current < nextDay;
  };

  return (
    <DatePicker
      onChange={onChange}
      bordered={bordered}
      placeholder={placeholder}
      style={style}
      suffixIcon={suffixIcon}
      allowClear={allowClear}
      format={format}
      name={name}
      disabled={disabled}
      disabledDate={disabledDate}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default CustomDatePicker;
