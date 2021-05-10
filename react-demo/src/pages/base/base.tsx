import { Form, Input, Button } from "@arco-design/web-react";

const Base = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ padding: "100px 300px" }}>
      <Form form={form}>
        <Form.Item
          label="名字"
          field="name"
          rules={[{ required: true, message: "请输入名字" }]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => {
              form.validate().catch((error) => {});
            }}
          >
            confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Base;
