import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';

import './TaskForm.scss';

interface TaskFormProps {
  loading: boolean;
  defautData:
    | {
        id: string;
        email: string;
        userName: string;
        isDone: boolean;
        description: string;
      }
    | undefined;
  onFinish: (data: any) => void;
}

const TaskForm = ({ defautData, loading, onFinish }: TaskFormProps) => {
  const [form] = Form.useForm();

  form.resetFields();
  useEffect(() => {
    form.resetFields();
  }, [defautData]);

  return (
    <Form
      form={form}
      className="task-form"
      layout="vertical"
      requiredMark={false}
      initialValues={defautData}
      onFinish={(data) => onFinish({ ...data, id: defautData?.id })}
    >
      <Form.Item
        name="userName"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свое имя',
          },
        ]}
      >
        <Input size="large" placeholder="Имя пользователя" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите свою почту',
          },
          {
            type: 'email',
            message: 'Почта не соответствует формату',
          },
        ]}
      >
        <Input size="large" placeholder="Почта" />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите описание',
          },
        ]}
      >
        <Input.TextArea size="large" placeholder="Описание" />
      </Form.Item>

      {defautData?.id && (
        <Form.Item name="isDone" valuePropName="checked">
          <Checkbox>Проверен</Checkbox>
        </Form.Item>
      )}

      <Form.Item className="submit-content" style={{ marginTop: '20px' }}>
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          loading={loading}
        >
          {defautData?.id ? 'Изменить' : 'Добавить'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
