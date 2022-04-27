import { useMemo } from 'react';
import { Modal } from 'antd';

import { TaskForm } from '../TaskForm';

import { useEditTask } from '../../../../hooks';
import { TaskResponse } from '../../../../models/api';

interface EditModalProps {
  defautData: TaskResponse;
  visible: boolean;
  onCancel: () => void;
}

const EditModal = ({ defautData, visible, onCancel }: EditModalProps) => {
  const { loading, patchTask, isSuccess } = useEditTask();
  useMemo(() => {
    if (isSuccess) {
      onCancel();
    }
  }, [isSuccess]);

  return (
    <Modal
      title="Изменить задачу"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <TaskForm
        defautData={defautData}
        loading={loading}
        onFinish={(data) => {
          const isDescriptionEdit = defautData.description !== data.description;
          patchTask({ data: { ...data, isDescriptionEdit } });
        }}
      />
    </Modal>
  );
};

export default EditModal;
