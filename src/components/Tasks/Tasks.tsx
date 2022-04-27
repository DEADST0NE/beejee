import { useState } from 'react';
import { Pagination } from 'antd';

import { Sort, AddModal, ListTasks } from './components';

import { useTasks } from '../../hooks/index';

import { SortTasksEnum } from '../../models/api';

import './Tasks.scss';

const Tasks = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SortTasksEnum.DOWN_NAME);

  const { loading, tasks } = useTasks({
    page,
    sort,
    limit: 3,
  });

  return (
    <div className="tasks">
      <div className="tasks-header">
        <AddModal />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="tasks-body">
        <ListTasks loading={loading} data={tasks.data} />
      </div>
      <div className="tasks-footer">
        <Pagination
          onChange={(value) => setPage(value)}
          defaultCurrent={page}
          pageSize={tasks.pagination.limit}
          total={tasks.pagination.length}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Tasks;
