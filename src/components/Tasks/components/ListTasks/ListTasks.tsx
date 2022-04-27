import { Space, Spin, Row, Col, Card, Button } from 'antd';
import { useState } from 'react';
import { useModal } from '../../../../hooks';
import storage, { JWT_KEY } from '../../../../storage';

import { TaskResponse } from '../../../../models/api';
import { EditModal } from '../EditModal';

import './ListTasks.scss';

interface ListTasksProps {
  data: TaskResponse[];
  loading: boolean;
}

interface TaskTitleProps {
  userName: string;
  email: string;
}

const TaskTitle = ({ userName, email }: TaskTitleProps) => (
  <div className="task-item-header">
    <span>Имя: {userName}</span>
    <span>Почта: {email}</span>
  </div>
);

const ListTasks = ({ data, loading }: ListTasksProps) => {
  const isAuth = !!storage.get(JWT_KEY);
  const [formData, setFormData] = useState<TaskResponse>({
    id: '',
    email: '',
    userName: '',
    isDone: false,
    description: '',
    isDescriptionEdit: false,
  });

  const [isModalOpen, openModal, toggleModal] = useModal(false);

  if (loading) {
    return (
      <Space>
        <Spin size="large" />
      </Space>
    );
  }
  return (
    <Row gutter={16}>
      {data.map((item) => (
        <Col key={item.id} span={8}>
          <div className={`task-item ${item.isDone ? 'green' : 'orange'}`}>
            <Card
              title={<TaskTitle userName={item.userName} email={item.email} />}
              bordered={false}
              extra={
                isAuth ? (
                  <Button
                    type="link"
                    onClick={() => {
                      setFormData(item);
                      openModal();
                    }}
                  >
                    Изменить
                  </Button>
                ) : null
              }
            >
              {item.description}
              {item.isDescriptionEdit ? (
                <div className="admin-edit-info">
                  Описание отредактировано администратором
                </div>
              ) : null}
            </Card>
          </div>
        </Col>
      ))}
      <EditModal
        defautData={formData}
        visible={isModalOpen}
        onCancel={toggleModal}
      />
    </Row>
  );
};

export default ListTasks;
