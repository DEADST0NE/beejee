import { Select } from 'antd';
import { SortTasksEnum } from '../../../../models/api';

const { Option } = Select;

import './Sort.scss';

interface SortProps {
  sort: SortTasksEnum;
  setSort: (v: SortTasksEnum) => void;
}

const Sort = ({ sort, setSort }: SortProps) => {
  return (
    <Select defaultValue={sort} onChange={(value) => setSort(value)}>
      <Option value={SortTasksEnum.DOWN_NAME}>По убыванию имени</Option>
      <Option value={SortTasksEnum.UP_NAME}>По возрастании имени</Option>
      <Option value={SortTasksEnum.DOWN_EMAIL}>По убыванию email</Option>
      <Option value={SortTasksEnum.UP_EMAIL}>По возрастании email</Option>
      <Option value={SortTasksEnum.DOWN_DESCRIPTION}>
        По убыванию описания
      </Option>
      <Option value={SortTasksEnum.UP_DESCRIPTION}>
        По возрастанию описания
      </Option>
      <Option value={SortTasksEnum.DOWN_DONE}>Сначала исполненные</Option>
      <Option value={SortTasksEnum.UP_DONE}>Сначала не исполненные</Option>
    </Select>
  );
};

export default Sort;
