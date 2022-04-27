import { useMemo } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { TaskForm } from '../TaskForm';

import { useCreateTask, useModal } from '../../../../hooks';

import './AddModal.scss';

const AddModal = () => {
  const [isModalOpen, openModal, toggleModal] = useModal(false);
  const { loading, createTask, isSuccess } = useCreateTask();

  useMemo(() => {
    if (isSuccess) {
      toggleModal();
    }
  }, [isSuccess]);

  return (
    <>
      <Button
        type="text"
        onClick={openModal}
        icon={<PlusOutlined />}
        className="task-add-btn"
      >
        Добавить задачу
      </Button>
      <Modal
        title="Добавить задачу"
        visible={isModalOpen}
        onCancel={toggleModal}
        footer={null}
      >
        <TaskForm
          defautData={undefined}
          loading={loading}
          onFinish={(data) => {
            createTask({ data });
          }}
        />
      </Modal>
    </>
  );
};

export default AddModal;
