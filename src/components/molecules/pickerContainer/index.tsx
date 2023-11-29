import {ConfigProvider, Space} from "antd";
import CustomDatePicker from "../../atoms/customDatePicker";
import CustomTimePicker from "../../atoms/customTimePicker";
import {Dayjs} from "dayjs";
import "./index.css";

interface Iprops {
  onDateChange: (date: Dayjs | null, dateString: string) => void;
  onTimeChange: (time: Dayjs | null, timeString: string) => void;
  bordered: boolean;
  datePlaceholder: string;
  dateFormat: string;
  suffixIcon: boolean | null;
  allowClear?: boolean;
  datePickerName: string;
  timePickerName: string;
  timePlaceholder: string;
  use12Hours: boolean;
  timeFormat: string;
  dateDisabled?: boolean;
  timeDisabled?: boolean;
  defaultValue?: Dayjs;
  value?: Dayjs;
}

const PickerContainer = (props: Iprops) => {
  const {
    onDateChange,
    onTimeChange,
    bordered,
    dateFormat,
    datePickerName,
    datePlaceholder,
    allowClear = true,
    suffixIcon,
    timePickerName,
    timePlaceholder,
    timeFormat,
    use12Hours,
    dateDisabled = false,
    timeDisabled = false,
    defaultValue = undefined,
    value = undefined,
  } = props;

  return (
    <div className="picker-container">
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
          },
        }}
      >
        <Space direction="vertical">
          <CustomDatePicker
            onChange={onDateChange}
            bordered={bordered}
            placeholder={datePlaceholder}
            format={dateFormat}
            suffixIcon={suffixIcon}
            allowClear={allowClear}
            name={datePickerName}
            disabled={dateDisabled}
            defaultValue={defaultValue}
            value={value}
          />
        </Space>
        <CustomTimePicker
          onChange={onTimeChange}
          bordered={bordered}
          format={timeFormat}
          allowClear={allowClear}
          use12Hours={use12Hours}
          placeholder={timePlaceholder}
          name={timePickerName}
          suffixIcon={suffixIcon}
          disabled={timeDisabled}
        />
      </ConfigProvider>
    </div>
  );
};

export default PickerContainer;
